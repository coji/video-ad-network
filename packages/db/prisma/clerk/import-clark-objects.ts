import type { Selectable } from 'kysely'
import type { DB, Kysely } from '~/index'
import clerkObjects from './clerk-data.json'

export const importClerkObjects = async (db: Kysely<DB>) => {
  if (clerkObjects.users.length < 2) {
    throw new Error(
      'At least two users are required. You should create users on clerk: https://clerk.com/',
    )
  }
  if (clerkObjects.organizations.length < 2) {
    throw new Error(
      'At least one organization is required. You should create organizations on clerk: https://clerk.com/',
    )
  }
  if (clerkObjects.organizationMemberships.length < 2) {
    throw new Error(
      'At least one organization membership is required. You should create organization memberships on clerk: https://clerk.com/',
    )
  }

  const users: Selectable<DB['users']>[] = []
  const organizations: Selectable<DB['organizations']>[] = []
  const organizationMemberships: Selectable<DB['organizationMemberships']>[] =
    []

  // users
  for (const user of clerkObjects.users) {
    const upserted = await db
      .insertInto('users')
      .values({
        id: user.id,
        email: user.email,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          email: user.email,
        }),
      )
      .returningAll()
      .executeTakeFirstOrThrow()
    users.push(upserted)
  }

  // organizations
  for (const org of clerkObjects.organizations) {
    const upserted = await db
      .insertInto('organizations')
      .values({
        id: org.id,
        name: org.name,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          name: org.name,
        }),
      )
      .returningAll()
      .executeTakeFirstOrThrow()
    organizations.push(upserted)
  }

  // organization memberships
  for (const membership of clerkObjects.organizationMemberships) {
    const upserted = await db
      .insertInto('organizationMemberships')
      .values({
        id: membership.id,
        userId: membership.userId,
        organizationId: membership.organizationId,
        role: membership.role,
        permissions: membership.permissions,
      })
      .onConflict((oc) =>
        oc.column('id').doUpdateSet({
          userId: membership.userId,
          organizationId: membership.organizationId,
          role: membership.role,
          permissions: membership.permissions,
        }),
      )
      .returningAll()
      .executeTakeFirstOrThrow()

    organizationMemberships.push(upserted)
  }

  return { users, organizations, organizationMemberships }
}
