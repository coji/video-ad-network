import type { DB, Kysely } from '@video-ad-network/db'
import { utcNow } from '~/functions/utc-now'

export async function saveAdEvent(
  db: Kysely<DB>,
  eventType: string,
  eventData: Record<string, string | null>,
) {
  await db
    .insertInto('adEvents')
    .values({
      id: crypto.randomUUID(),
      eventTimestamp: utcNow(),
      eventType,
      ...eventData,
      ipAddress: eventData.ipAddress || 'unknown',
      userAgent: eventData.userAgent || 'unknown',
      uid: eventData.uid || '',
    })
    .execute()
}
