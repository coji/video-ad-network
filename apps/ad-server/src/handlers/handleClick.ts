import { getDB } from '@video-ad-network/db'
import type { Context } from 'hono'
import { utcNow } from '~/functions/utc-now'

export async function handleClick(c: Context) {
  const {
    media_id: mediaId,
    ad_slot_id: adSlotId,
    advertiser_id: advertiserId,
    campaign_id: campaignId,
    ad_group_id: adGroupId,
    ad_id: adId,
    impression_id: impressionId,
    companion_id: companionId,
  } = c.req.query()
  const isCompanion = c.req.query('is_companion') === 'true'
  const ipAddress = c.req.header('CF-Connecting-IP')
  const userAgent = c.req.header('User-Agent')
  const db = getDB(c.env)

  // リダイレクト先を取得
  let clickThroughUrl: string
  if (isCompanion && companionId) {
    const companion = await db
      .selectFrom('companionBanners')
      .select('clickThroughUrl')
      .where('id', '==', companionId)
      .executeTakeFirst()
    clickThroughUrl = companion?.clickThroughUrl ?? ''
  } else {
    const ad = await db
      .selectFrom('ads')
      .select('clickThroughUrl')
      .where('id', '==', adId)
      .executeTakeFirst()
    clickThroughUrl = ad?.clickThroughUrl ?? ''
  }

  // クリックを記録
  await db
    .insertInto('clicks')
    .values({
      id: crypto.randomUUID(),
      uid: 'uid!',
      mediaId,
      adSlotId,
      advertiserId,
      campaignId,
      adGroupId,
      adId,
      timestamp: utcNow(),
      ipAddress: ipAddress ?? '',
      userAgent: userAgent ?? '',
      isCompanion: isCompanion ? 1 : 0,
      impressionId,
      clickThroughUrl,
    })
    .execute()

  await db
    .insertInto('adEvents')
    .values({
      id: crypto.randomUUID(),
      eventTimestamp: utcNow(),
      mediaId,
      adSlotId,
      advertiserId,
      campaignId,
      adGroupId,
      adId,
      impressionId,
      eventType: 'click',
      ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
      userAgent: c.req.header('User-Agent') || 'unknown',
      uid: '', // Populate as needed
    })
    .execute()
    .catch(console.error)

  return clickThroughUrl !== ''
    ? c.redirect(clickThroughUrl)
    : c.text('Redirect URL not found', 404)
}
