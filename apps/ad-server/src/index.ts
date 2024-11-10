import { Hono } from 'hono'
import type { D1Database } from '@cloudflare/workers-types'
import { cors } from 'hono/cors'
import { handleVastRequest } from './handlers/handleVastRequest'
import { handleClick } from './handlers/handleClick'

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

app.get('/v1/vast', handleVastRequest)

app.get('/v1/click', handleClick)

export default app
