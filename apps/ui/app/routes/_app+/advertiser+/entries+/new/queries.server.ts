import type { DB, Kysely } from '@video-ad-network/db'

export const getAdvertiserByOrganizationId = async (
  db: Kysely<DB>,
  orgId: string,
) => {
  return await db
    .selectFrom('advertisers')
    .selectAll()
    .where('organizationId', '==', orgId)
    .executeTakeFirst()
}
