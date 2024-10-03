import { Hono } from 'hono'
import { logger } from 'hono/logger'
import {
	recordAdEvents,
	type AdEventImpression,
	type AdEventProgress,
} from './services/ad-events'
import { PIXCEL } from './services/pixel'

const app = new Hono()
app.use(logger())

app.get('/', (c) => {
	return c.text('Hello Hono!')
})

// Impressionエンドポイント
app.get('/impression', async (c) => {
	const { adId, adSlotId, mediaId, impressionId } = c.req.query()

	if (!adId || !adSlotId || !mediaId || !impressionId) {
		return c.body(PIXCEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const rows: AdEventImpression[] = [
		{
			event_timestamp: new Date().toISOString(),
			event_type: 'impression',
			ad_id: Number.parseInt(adId as string),
			ad_slot_id: Number.parseInt(adSlotId as string),
			media_id: Number.parseInt(mediaId as string),
			impression_id: impressionId,
			ip_address: c.req.header('X-Forwarded-For') || 'unknown',
			user_agent: c.req.header('User-Agent') || 'unknown',
		},
	]

	// BigQueryへの挿入を非同期で行い、レスポンスを待たない
	recordAdEvents('ad_events', rows).catch(console.error)

	return c.body(PIXCEL, 200, {
		'Content-Type': 'image/gif',
		'Cache-Control': 'no-store, no-cache, must-revalidate, private',
	})
})

// Progressエンドポイント
app.get('/progress', async (c) => {
	const { adId, adSlotId, mediaId, progress, impressionId } = c.req.query()

	if (!adId || !adSlotId || !mediaId || !progress || !impressionId) {
		return c.body(PIXCEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const rows: AdEventProgress[] = [
		{
			event_timestamp: new Date().toISOString(),
			event_type: 'progress',
			ad_id: Number.parseInt(adId as string),
			ad_slot_id: Number.parseInt(adSlotId as string),
			media_id: Number.parseInt(mediaId as string),
			impression_id: impressionId,
			progress: Number.parseInt(progress as string),
			ip_address: c.req.header('X-Forwarded-For') || 'unknown',
			user_agent: c.req.header('User-Agent') || 'unknown',
		},
	]

	// BigQueryへの挿入を非同期で行い、レスポンスを待たない
	recordAdEvents('ad_events', rows).catch(console.error)

	return c.body(PIXCEL, 200, {
		'Content-Type': 'image/gif',
		'Cache-Control': 'no-store, no-cache, must-revalidate, private',
	})
})

export default app
