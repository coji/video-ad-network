import { getDB } from '@video-ad-network/db'
import type { Context } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'
import { saveAdEvent } from '~/functions/ad-events'
import { selectAd } from '~/functions/ad-selection'
import {
  deserializeFrequencyData,
  FREQUENCY_COOKIE_OPTIONS,
  incrementFrequencyCount,
  serializeFrequencyData,
} from '~/functions/frequency-cap'
import { getAdSlot } from '~/functions/get-ad-slot'
import { getCompanionBanners } from '~/functions/get-companion-banners'
import {
  generateTrackers,
  generateVastXml,
  validateVastRequest,
} from '~/functions/vast-utils'

function getRequestContext(c: Context) {
  return {
    ip: c.req.header('X-Forwarded-For') || 'unknown',
    userAgent: c.req.header('User-Agent') || 'unknown',
  }
}

export async function handleVastRequest(c: Context) {
  const { mediaId, adSlotId } = validateVastRequest(c)
  if (!mediaId || !adSlotId) {
    return c.text('Missing required parameters', 400)
  }

  const db = getDB(c.env)
  const uid = c.get('uid') as string
  const { ip, userAgent } = getRequestContext(c)
  const frequencyData = deserializeFrequencyData(getCookie(c, 'ad_frequency'))
  const now = new Date()

  const adSlot = await getAdSlot(db, mediaId, adSlotId)
  if (!adSlot) {
    await saveAdEvent(db, 'vast', {
      mediaId,
      adSlotId,
      ipAddress: ip,
      userAgent,
      uid,
    })
    return c.notFound()
  }

  const ad = await selectAd(
    db,
    now.getTime(),
    frequencyData,
    adSlot.categories,
    adSlot.mediaType,
    adSlot.companionSizes,
  )
  if (!ad) {
    await saveAdEvent(db, 'vast', {
      mediaId,
      adSlotId,
      ipAddress: ip,
      userAgent,
      uid,
    })
    return c.notFound()
  }

  await saveAdEvent(db, 'vast', {
    mediaId,
    adSlotId,
    advertiserId: ad.advertiserId,
    campaignId: ad.campaignId,
    adGroupId: ad.adGroupId,
    adId: ad.id,
    ipAddress: ip,
    userAgent,
    uid,
  })

  const companionBanners = await getCompanionBanners(db, ad.id)

  incrementFrequencyCount(
    frequencyData,
    ad.adGroupId,
    ad.frequencyCapWindow,
    ad.frequencyCapUnit,
    now.getTime(),
  )

  const impressionId = crypto.randomUUID()
  const adServingId = crypto.randomUUID()
  const trackers = generateTrackers(c, {
    media_id: mediaId,
    ad_slot_id: adSlotId,
    advertiser_id: ad.advertiserId,
    campaign_id: ad.campaignId,
    ad_group_id: ad.adGroupId,
    ad_id: ad.id,
    impression_id: impressionId,
  })
  const vastXml = generateVastXml(ad, companionBanners, adServingId, trackers)

  setCookie(
    c,
    'ad_frequency',
    serializeFrequencyData(frequencyData),
    FREQUENCY_COOKIE_OPTIONS,
  )

  return c.body(vastXml, 200, {
    'Content-Type': 'application/xml',
  })
}
