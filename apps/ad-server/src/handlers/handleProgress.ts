import { getDB } from '@video-ad-network/db'
import type { Context } from 'hono'
import { saveAdEvent } from '~/functions/ad-events'
import { PIXEL } from '~/functions/pixel'

export async function handleProgress(c: Context) {
  const {
    media_id: mediaId,
    ad_slot_id: adSlotId,
    advertiser_id: advertiserId,
    campaign_id: campaignId,
    ad_group_id: adGroupId,
    ad_id: adId,
    impression_id: impressionId,
    progress,
  } = c.req.query()

  const db = getDB(c.env)
  await saveAdEvent(db, 'progress', {
    adSlotId,
    mediaId,
    advertiserId,
    campaignId,
    adGroupId,
    adId,
    impressionId,
    progress: String(progress),
    ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
    userAgent: c.req.header('User-Agent') || 'unknown',
    uid: '',
  })

  return c.body(PIXEL, 200, {
    'Content-Type': 'image/gif',
    'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  })
}
