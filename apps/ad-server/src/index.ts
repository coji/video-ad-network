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
	await db
		.insertInto('adEvents')
		.values({
			id: crypto.randomUUID(),
			eventTimestamp: new Date().toISOString(),
			eventType: 'impression',
			adSlotId,
			mediaId,
			advertiserId,
			campaignId,
			adGroupId,
			adId,
			impressionId,
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
	await db
		.insertInto('adEvents')
		.values({
			id: crypto.randomUUID(),
			eventTimestamp: new Date().toISOString(),
			eventType: 'progress',
			adSlotId,
			mediaId,
			advertiserId,
			campaignId,
			adGroupId,
			adId,
			impressionId,
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
