import type { WebhookEvent } from '@clerk/react-router/ssr.server'
import type { DB, Kysely } from '@video-ad-network/db'

type WebhookEventUserCreateOrUpdate = Extract<
  WebhookEvent,
  { type: 'user.created' | 'user.updated' }
>
type WebhookEventUserDeleted = Extract<WebhookEvent, { type: 'user.deleted' }>

export const createUserOps = (db: Kysely<DB>) => {
  /**
   * AdminUser 追加/更新
   * @param event Clerk Webhook Event
   */
  const upsert = async (event: WebhookEventUserCreateOrUpdate) => {
    return await db
      .insertInto('users')
      .values({
        id: event.data.id,
        email: event.data.email_addresses[0].email_address,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet((eb) => ({
          email: event.data.email_addresses[0].email_address,
        })),
      )
      .returningAll()
      .executeTakeFirst()
  }

  /**
   * AdminUser 削除
   */

  const del = async (event: WebhookEventUserDeleted) => {
    // AdminUser 削除
    if (!event.data.id) {
      console.error('No id found in event data', event.data)
      throw Response.json(
        { error: 'No id found in event data' },
        { status: 400 },
      )
    }

    return await db
      .deleteFrom('users')
      .where('id', '==', event.data.id)
      .returningAll()
      .executeTakeFirst()
  }

  return { upsert, del }
}
