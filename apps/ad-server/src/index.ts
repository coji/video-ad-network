import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { handleVastRequest } from './handlers/handleVastRequest'
import { handleClick } from './handlers/handleClick'
import { getDB } from '@video-ad-network/db'
import { PIXEL } from './functions/pixel'

interface Bindings {
	TRACKER_ORIGIN: string
	TURSO_DATABASE_URL: string
	TURSO_AUTH_TOKEN: string
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

app.get('/v1/vast', handleVastRequest)
app.get('/v1/click', handleClick)

// Impressionエンドポイント
app.get('/v1/impression', async (c) => {
	const { ad_id, media_id, ad_slot_id, impression_id } = c.req.query()

	if (!ad_id || !media_id || !ad_slot_id || !impression_id) {
		return c.body(PIXEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const db = getDB(c.env)
	await db
		.insertInto('adEvents')
		.values({
			id: crypto.randomUUID(),
			eventTimestamp: new Date().toISOString(),
			eventType: 'impression',
			adId: ad_id,
			adSlotId: ad_slot_id,
			mediaId: media_id,
			impressionId: impression_id,
			ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
			userAgent: c.req.header('User-Agent') || 'unknown',
			uid: '', // Populate as needed
		})
		.execute()
		.catch(console.error)

	return c.body(PIXEL, 200, {
		'Content-Type': 'image/gif',
		'Cache-Control': 'no-store, no-cache, must-revalidate, private',
	})
})

// Progressエンドポイント
app.get('/v1/progress', async (c) => {
	const { ad_id, media_id, ad_slot_id, progress, impression_id } = c.req.query()

	if (!ad_id || !media_id || !ad_slot_id || !progress || !impression_id) {
		return c.body(PIXEL, 200, {
			'Content-Type': 'image/gif',
			'Cache-Control': 'no-store, no-cache, must-revalidate, private',
		})
	}

	const db = getDB(c.env)
	await db
		.insertInto('adEvents')
		.values({
			id: crypto.randomUUID(),
			eventTimestamp: new Date().toISOString(),
			eventType: 'progress',
			adId: ad_id,
			adSlotId: ad_slot_id,
			mediaId: media_id,
			impressionId: impression_id,
			progress: Number(progress),
			ipAddress: c.req.header('X-Forwarded-For') || 'unknown',
			userAgent: c.req.header('User-Agent') || 'unknown',
			uid: '', // Populate as needed
		})
		.execute()
		.catch(console.error)

	return c.body(PIXEL, 200, {
		'Content-Type': 'image/gif',
		'Cache-Control': 'no-store, no-cache, must-revalidate, private',
	})
})

export default app
