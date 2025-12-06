import { env } from 'cloudflare:workers'
import { getDB } from '@video-ad-network/db'
import { match } from 'ts-pattern'
import type { Route } from './+types/route'
import {
  createOrgamizationMembershipOps,
  createOrganizationOps,
  createUserOps,
  verifyClerkWebhookOrThrow,
} from './functions.server'

export const action = async ({ request }: Route.ActionArgs) => {
  const db = getDB(env)

  const user = createUserOps(db)
  const org = createOrganizationOps(db)
  const member = createOrgamizationMembershipOps(db)

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
