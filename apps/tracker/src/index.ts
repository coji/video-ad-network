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
	const { ad_id, media_id, ad_slot_id, impression_id } = c.req.query()

	if (!ad_id || !media_id || !ad_slot_id || !impression_id) {
		return c.body(PIXCEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const rows: AdEventImpression[] = [
		{
			event_timestamp: new Date().toISOString(),
			event_type: 'impression',
			ad_id,
			ad_slot_id,
			media_id,
			impression_id,
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
	const { ad_id, media_id, ad_slot_id, progress, impression_id } = c.req.query()

	if (!ad_id || !media_id || !ad_slot_id || !progress || !impression_id) {
		return c.body(PIXCEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const rows: AdEventProgress[] = [
		{
			event_timestamp: new Date().toISOString(),
			event_type: 'progress',
			ad_id,
			ad_slot_id,
			media_id,
			impression_id,
			progress,
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
