import type { setCookie } from 'hono/cookie'

export interface FrequencyData {
  [adId: string]: {
    count: number
    lastSeen: number
  }
}

export const FREQUENCY_CAP = 3
export const FREQUENCY_PERIOD = 24 * 60 * 60 * 1000 // 24時間（ミリ秒単位）

export function parseFrequencyData(
  cookieValue: string | undefined,
): FrequencyData {
  if (!cookieValue) return {}
  try {
    return JSON.parse(cookieValue)
  } catch {
    return {}
  }
}

export function stringifyFrequencyData(data: FrequencyData): string {
  return JSON.stringify(data)
}

export const FREQUENCY_COOKIE_OPTIONS: Parameters<typeof setCookie>[3] = {
  maxAge: 365 * 24 * 60 * 60, // 1年間
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  sameSite: 'Lax',
}
