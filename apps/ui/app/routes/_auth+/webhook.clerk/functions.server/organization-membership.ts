import type { WebhookEvent } from '@clerk/react-router/ssr.server'
import type { DB, Kysely } from '@video-ad-network/db'

type WebhookEventOrganizationMembership = Extract<
  WebhookEvent,
  {
    type:
      | 'organizationMembership.created'
      | 'organizationMembership.updated'
      | 'organizationMembership.deleted'
  }
>

export const createOrgamizationMembershipOps = (db: Kysely<DB>) => {
  /**
   * 組織メンバー情報の作成・更新
   * @param event
   */
  const upsert = async (event: WebhookEventOrganizationMembership) => {
    const organization = await db
      .selectFrom('organizations')
      .select('id')
      .where('id', '==', event.data.organization.id)
      .executeTakeFirst()
    const user = await db
      .selectFrom('users')
      .select('id')
      .where('id', '==', event.data.public_user_data.user_id)
      .executeTakeFirst()
    if (!organization || !user) {
      console.error('Organization or User not found', event.data)
      throw Response.json(
        { error: 'Organization or User not found' },
        { status: 400 },
      )
    }

    return await db
      .insertInto('organizationMemberships')
      .values({
        id: event.data.id,
        organizationId: organization.id,
        userId: user.id,
        role: event.data.role,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet((eb) => ({
          organizationId: organization.id,
          userId: user.id,
          role: event.data.role,
        })),
      )
      .returningAll()
      .executeTakeFirst()
  }

  const del = async (event: WebhookEventOrganizationMembership) => {
    return await db
      .deleteFrom('organizationMemberships')
      .where('id', '==', event.data.id)
      .returningAll()
      .executeTakeFirst()
  }

  return { upsert, del }
}
