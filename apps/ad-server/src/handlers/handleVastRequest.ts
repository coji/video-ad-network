import { getDB } from '@video-ad-network/db'
import type { Context } from 'hono'
import { selectAd } from '~/functions/ad-selection'
import { getAdSlot } from '~/functions/get-ad-slot'
import { getCompanionBanners } from '~/functions/get-companion-banners'
import { utcNow } from '~/functions/utc-now'
import {
  generateTrackers,
  generateVastXml,
  getFrequencyData,
  updateFrequencyData,
  validateVastRequest,
} from '~/functions/vast-utils'

export async function handleVastRequest(c: Context) {
  const { mediaId, adSlotId } = validateVastRequest(c)
  if (!mediaId || !adSlotId) {
    return c.text('Missing required parameters', 400)
  }

  const db = getDB(c.env)
  const frequencyData = getFrequencyData(c)
  const now = new Date()

  const adSlot = await getAdSlot(db, mediaId, adSlotId)
  if (!adSlot) {
    await db
      .insertInto('adEvents')
      .values({
        id: crypto.randomUUID(),
        eventTimestamp: utcNow(now),
        eventType: 'vast',
        mediaId,
        adSlotId,
        ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
        userAgent: c.req.header('User-Agent') || 'unknown',
        uid: '', // Populate as needed
      })
      .execute()
      .catch(console.error)
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
    await db
      .insertInto('adEvents')
      .values({
        id: crypto.randomUUID(),
        eventTimestamp: utcNow(now),
        eventType: 'vast',
        mediaId,
        adSlotId,
        ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
        userAgent: c.req.header('User-Agent') || 'unknown',
        uid: '', // Populate as needed
      })
      .execute()
      .catch(console.error)
    return c.notFound()
  }

  await db
    .insertInto('adEvents')
    .values({
      id: crypto.randomUUID(),
      eventTimestamp: utcNow(now),
      eventType: 'vast',
      mediaId,
      adSlotId,
      advertiserId: ad.advertiserId,
      campaignId: ad.campaignId,
      adGroupId: ad.adGroupId,
      adId: ad.id,
      ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
      userAgent: c.req.header('User-Agent') || 'unknown',
      uid: '', // Populate as needed
    })
    .execute()
    .catch(console.error)

  const companionBanners = await getCompanionBanners(db, ad.id)
  updateFrequencyData(c, frequencyData, ad.id, now.getTime())

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

  return c.body(vastXml, 200, {
    'Content-Type': 'application/xml',
  })
}
