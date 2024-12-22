import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {
  handleClick,
  handleImpression,
  handleProgress,
  handleVastRequest,
} from './handlers'

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
app.get('/v1/impression', handleImpression)
app.get('/v1/progress', handleProgress)

export default app
