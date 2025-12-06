import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {
  handleClick,
  handleImpression,
  handleProgress,
  handleVastRequest,
} from './handlers'
import { uidMiddleware } from './middlewares/uid'

interface UIDState {
  uid: string
}

const app = new Hono<{ Bindings: Cloudflare.Env; State: UIDState }>()

app.use('*', uidMiddleware)
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
