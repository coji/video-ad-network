import { match } from 'ts-pattern'
import { db } from '~/services/db.server'
import type { Route } from './+types/route'
import {
  createOrgamizationMembershipOps,
  createOrganizationOps,
  createUserOps,
  verifyClerkWebhookOrThrow,
} from './.server'

export const action = async ({ request }: Route.ActionArgs) => {
  const kysely = db()

  const user = createUserOps(kysely)
  const org = createOrganizationOps(kysely)
  const member = createOrgamizationMembershipOps(kysely)

  const event = await verifyClerkWebhookOrThrow(request)
  await match(event)
    .with({ type: 'user.created' }, (e) => user.upsert(e))
    .with({ type: 'user.updated' }, (e) => user.upsert(e))
    .with({ type: 'user.deleted' }, (e) => user.del(e))
    .with({ type: 'organization.created' }, (e) => org.upsert(e))
    .with({ type: 'organization.updated' }, (e) => org.upsert(e))
    .with({ type: 'organization.deleted' }, (e) => org.del(e))
    .with({ type: 'organizationMembership.created' }, (e) => member.upsert(e))
    .with({ type: 'organizationMembership.updated' }, (e) => member.upsert(e))
    .with({ type: 'organizationMembership.deleted' }, (e) => member.del(e))
    .otherwise((e) => {
      throw new Error(`Unhandled webhook event: ${e.type}`)
    })

  return Response.json({})
}
