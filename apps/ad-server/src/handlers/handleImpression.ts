import { getDB } from '@video-ad-network/db'
import type { Context } from 'hono'
import { saveAdEvent } from '~/functions/ad-events'
import { PIXEL } from '~/functions/pixel'

export async function handleImpression(c: Context) {
  const {
    media_id: mediaId,
    ad_slot_id: adSlotId,
    advertiser_id: advertiserId,
    campaign_id: campaignId,
    ad_group_id: adGroupId,
    ad_id: adId,
    impression_id: impressionId,
  } = c.req.query()

  const db = getDB(c.env)
  const uid = c.get('uid') as string
  await saveAdEvent(db, 'impression', {
    adSlotId,
    mediaId,
    advertiserId,
    campaignId,
    adGroupId,
    adId,
    impressionId,
    ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
    userAgent: c.req.header('User-Agent') || 'unknown',
    uid,
  }).catch(console.error)

  return c.body(PIXEL, 200, {
    'Content-Type': 'image/gif',
    'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  })
}
