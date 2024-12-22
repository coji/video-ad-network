import type { Context } from 'hono'
import { getCookie, type setCookie } from 'hono/cookie'

export interface FrequencyData {
  [adGroupId: string]: {
    windowStartTime: number // ウィンドウ開始時刻（タイムスタンプ）
    count: number // 現在のウィンドウ内での表示回数
  }
}

export function deserializeFrequencyData(
  cookieValue: string | undefined,
): FrequencyData {
  if (!cookieValue) return {}
  try {
    return JSON.parse(cookieValue)
  } catch {
    return {}
  }
}

export function serializeFrequencyData(data: FrequencyData): string {
  return JSON.stringify(data)
}

export const FREQUENCY_COOKIE_OPTIONS: Parameters<typeof setCookie>[3] = {
  maxAge: 365 * 24 * 60 * 60, // 1年間
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  sameSite: 'Lax',
}

export function getFrequencyData(c: Context): FrequencyData {
  const frequencyDataCookie = getCookie(c, 'ad_frequency')
  return deserializeFrequencyData(frequencyDataCookie)
}

function getCapWindowStart(
  currentTime: number,
  window: number,
  unit: string,
): number {
  switch (unit) {
    case 'MINUTE':
      return currentTime - window * 60 * 1000
    case 'HOUR':
      return currentTime - window * 60 * 60 * 1000
    case 'DAY':
      return currentTime - window * 24 * 60 * 60 * 1000
    default:
      return currentTime - 24 * 60 * 60 * 1000
  }
}

// 広告がフリークエンシーキャップの条件を満たしているかを判定
export function canSelectAd(
  adFrequency: { count: number; windowStartTime: number } | undefined,
  frequencyCapImpressions: number,
  frequencyCapWindow: number,
  frequencyCapUnit: string,
  currentTime: number,
): boolean {
  // フリークエンシーキャップが設定されていない場合は常に選択可能
  if (!frequencyCapImpressions || !frequencyCapWindow || !frequencyCapUnit)
    return true

  // フリークエンシーデータが存在しない場合は選択可能
  if (!adFrequency) {
    return true
  }

  const capWindowStart = getCapWindowStart(
    currentTime,
    frequencyCapWindow,
    frequencyCapUnit,
  )

  // ウィンドウがリセットされるべきかチェック
  if (adFrequency.windowStartTime < capWindowStart) {
    // ウィンドウをリセット
    return true
  }

  // 現在のカウントがキャップ未満であれば選択可能
  if (adFrequency.count < frequencyCapImpressions) {
    return true
  }

  // それ以外は選択不可
  return false
}

// 広告選択後にフリークエンシーデータを更新
export function incrementFrequencyCount(
  frequencyData: FrequencyData,
  adGroupId: string,
  frequencyCapWindow: number,
  frequencyCapUnit: string,
  currentTime: number,
): void {
  const capWindowStart = getCapWindowStart(
    currentTime,
    frequencyCapWindow,
    frequencyCapUnit,
  )

  if (
    !frequencyData[adGroupId] ||
    frequencyData[adGroupId].windowStartTime < capWindowStart
  ) {
    // ウィンドウをリセット
    frequencyData[adGroupId] = { count: 1, windowStartTime: currentTime }
  } else {
    frequencyData[adGroupId].count += 1
  }
}
