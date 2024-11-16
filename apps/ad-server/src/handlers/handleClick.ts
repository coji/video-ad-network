import type { Context } from 'hono'
import { getDB } from '@video-ad-network/db'

export async function handleClick(c: Context) {
	const adId = c.req.query('ad_id')
	const adSlotId = c.req.query('ad_slot_id')
	const mediaId = c.req.query('media_id')
	const isCompanion = c.req.query('is_companion') === 'true'
	const companionId = c.req.query('companion_id')
	const impressionId = c.req.query('impression_id')
	const ipAddress = c.req.header('CF-Connecting-IP')
	const userAgent = c.req.header('User-Agent')
	const db = getDB(c.env)

	if (!adId || !adSlotId || !mediaId || !impressionId) {
		return c.text('Missing required parameters', 400)
	}

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
			adId,
			adSlotId,
			mediaId,
			timestamp: new Date().toISOString(),
			ipAddress: ipAddress ?? '',
			userAgent: userAgent ?? '',
			isCompanion: isCompanion ? 1 : 0,
			impressionId,
			clickThroughUrl,
			updatedAt: new Date().toISOString(),
		})
		.execute()

	return clickThroughUrl !== ''
		? c.redirect(clickThroughUrl)
		: c.text('Redirect URL not found', 404)
}
