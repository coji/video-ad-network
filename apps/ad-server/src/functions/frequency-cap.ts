import type { Context } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'

export interface FrequencyData {
  [adId: string]: {
    count: number
    lastSeen: number
  }
}

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

export function getFrequencyData(c: Context) {
  const frequencyDataCookie = getCookie(c, 'ad_frequency')
  return parseFrequencyData(frequencyDataCookie)
}

export function updateFrequencyData(
  c: Context,
  frequencyData: FrequencyData,
  adId: string,
  now: number,
) {
  if (!frequencyData[adId]) {
    frequencyData[adId] = { count: 1, lastSeen: now }
  } else {
    frequencyData[adId].count++
    frequencyData[adId].lastSeen = now
  }

  setCookie(
    c,
    'ad_frequency',
    stringifyFrequencyData(frequencyData),
    FREQUENCY_COOKIE_OPTIONS,
  )
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

// detect if an ad is selectable based on frequency cap
export function isAdSelectableWithFrequencyCap(
  adFrequency: { count: number; lastSeen: number } | undefined,
  frequencyCapImpressions: number,
  frequencyCapWindow: number,
  frequencyCapUnit: string,
  currentTime: number,
): boolean {
  // if no frequency cap is set, the ad is always selectable
  if (!adFrequency) return true

  // if the ad has not been seen enough times, it is selectable
  if (adFrequency.count < frequencyCapImpressions) return true

  // if the ad has not been seen in the last frequency cap window, it is selectable
  const capWindowStart = getCapWindowStart(
    currentTime,
    frequencyCapWindow,
    frequencyCapUnit,
  )
  console.log({
    frequency: adFrequency,
    capWindowStart: new Date(capWindowStart),
    lastSeen: new Date(adFrequency.lastSeen),
  })
  return adFrequency.lastSeen < capWindowStart
}
