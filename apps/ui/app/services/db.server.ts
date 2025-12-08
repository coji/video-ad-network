import { getDB } from '@video-ad-network/db'
import { env } from 'cloudflare:workers'

export const db = () => getDB(env.TURSO_DATABASE_URL)
