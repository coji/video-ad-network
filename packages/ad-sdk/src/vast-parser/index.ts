import { XMLParser } from 'fast-xml-parser'
import type { AdType, VastResponse } from '../types'
import { extractClickThrough } from './click-through'
import { parseCompanionAds } from './companion-ads'
import { extractCreatives } from './creatives'
import { parseDuration } from './duration'
import { extractMediaUrl } from './media-url'
import { extractTrackingEvents } from './tracking-events'
import type { VastTag } from './vast-types'

export function parseVastXml(vastXml: string): VastResponse {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  })
  const result = parser.parse(vastXml) as VastTag
  const ad = result.VAST?.Ad
  if (!ad) {
    throw new Error('No Ad found in VAST XML')
  }

  const adType: AdType = (ad['@_adType'] as AdType) || 'unknown'
  const inline = ad.InLine

  if (!inline) {
    throw new Error('No InLine element found in Ad')
  }

  if (inline.Creatives === '' || !inline.Creatives.Creative) {
    throw new Error('No Creative element found in Creatives')
  }

  const creatives = extractCreatives(inline.Creatives.Creative)
  const linear = creatives.linear
  const companionAds = creatives.companionAds

  if (!linear) {
    throw new Error('No Linear element found in Creative')
  }

  const mediaUrl = extractMediaUrl(linear.MediaFiles)
  const duration = parseDuration(linear.Duration)
  const clickThroughUrl = extractClickThrough(linear.VideoClicks)
  const trackingEvents = extractTrackingEvents(
    inline.Impression,
    linear.TrackingEvents,
  )

  const parsedCompanionAds = parseCompanionAds(companionAds)

  return {
    adType,
    mediaUrl,
    duration,
    clickThroughUrl,
    trackingEvents,
    companionAds:
      parsedCompanionAds.length > 0 ? parsedCompanionAds : undefined,
  }
}
