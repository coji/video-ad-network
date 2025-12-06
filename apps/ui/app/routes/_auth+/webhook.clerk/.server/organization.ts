import type { WebhookEvent } from '@clerk/react-router/ssr.server'
import type { DB, Kysely } from '@video-ad-network/db'

type WebhookEventOrganizationCreateOrUpdate = Extract<
  WebhookEvent,
  { type: 'organization.created' | 'organization.updated' }
>
type WebhookEventUserDeleted = Extract<
  WebhookEvent,
  { type: 'organization.deleted' }
>

export const createOrganizationOps = (db: Kysely<DB>) => {
  /**
   * 組織の追加・更新
   * @param event
   * @returns
   */
  const upsert = async (event: WebhookEventOrganizationCreateOrUpdate) => {
    // Tenant 追加/更新
    return await db
      .insertInto('organizations')
      .values({
        id: event.data.id,
        name: event.data.name,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet((eb) => ({
          name: eb.ref('excluded.name'),
        })),
      )
      .returningAll()
      .executeTakeFirst()
  }

  const del = async (event: WebhookEventUserDeleted) => {
    if (!event.data.id) {
      console.error('No id found in event data', event.data)
      throw Response.json(
        { error: 'No id found in event data' },
        { status: 400 },
      )
    }
    return await db
      .deleteFrom('organizations')
      .where('id', '==', event.data.id)
      .returningAll()
      .executeTakeFirst()
  }

  return {
    upsert,
    del,
  }
}
