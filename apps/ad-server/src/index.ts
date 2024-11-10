import { Hono } from 'hono'
import type { D1Database } from '@cloudflare/workers-types'
import { cors } from 'hono/cors'
import { getDB } from './services/db'
import { selectAd } from './functions/ad-selection'
import { getAdSlot } from './functions/get-ad-slot'
import {
	validateVastRequest,
	getFrequencyData,
	updateFrequencyData,
	generateTrackers,
	generateVastXml,
} from './functions/vast-utils'
import { getCompanionBanners } from './functions/get-companion-banners'

interface Bindings {
	DB: D1Database
	TRACKER_ORIGIN: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(
	'/v1/vast',
	cors({
		origin: '*', // すべてのオリジンを許可
		allowMethods: ['GET', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	}),
)

app.get('/v1/vast', async (c) => {
	const { mediaId, adSlotId } = validateVastRequest(c)
	if (!mediaId || !adSlotId) {
		return c.text('Missing required parameters', 400)
	}

	const db = getDB(c.env.DB)
	const frequencyData = getFrequencyData(c)
	const now = Date.now()

	const adSlot = await getAdSlot(db, mediaId, adSlotId)
	if (!adSlot) {
		return c.notFound()
	}

	const ad = await selectAd(
		db,
		now,
		frequencyData,
		adSlot.categories,
		adSlot.mediaType,
		adSlot.companionSizes,
	)
	if (!ad) {
		return c.notFound()
	}

	const companionBanners = await getCompanionBanners(db, ad.id)
	updateFrequencyData(c, frequencyData, ad.id, now)

	const impressionId = crypto.randomUUID()
	const adServingId = crypto.randomUUID()
	const trackers = generateTrackers(c, ad.id, mediaId, adSlotId, impressionId)
	const vastXml = generateVastXml(ad, companionBanners, adServingId, trackers)

	return new Response(vastXml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml',
		},
	})
})

// クリックエンドポイントの追加
app.get('/v1/click', async (c) => {
	const adId = c.req.query('ad_id')
	const adSlotId = c.req.query('ad_slot_id')
	const mediaId = c.req.query('media_id')
	const isCompanion = c.req.query('is_companion') === 'true'
	const companionId = c.req.query('companion_id')
	const impressionId = c.req.query('impression_id')
	const ipAddress = c.req.header('CF-Connecting-IP')
	const userAgent = c.req.header('User-Agent')
	const db = getDB(c.env.DB)

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
		})
		.execute()

	return clickThroughUrl !== ''
		? c.redirect(clickThroughUrl)
		: c.text('Redirect URL not found', 404)
})

export default app
