import {
  createClerkClient,
  type Organization,
  type OrganizationMembership,
  type User,
} from '@clerk/react-router/api.server'
import fs from 'node:fs/promises'
import path from 'node:path'

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

interface ClerkObjects {
  users: {
    id: User['id']
    email: User['emailAddresses'][0]['emailAddress']
  }[]
  organizations: {
    id: Organization['id']
    name: Organization['name']
  }[]
  organizationMemberships: {
    id: OrganizationMembership['id']
    userId: User['id']
    organizationId: Organization['id']
    role: OrganizationMembership['role']
    permissions: string // JSON Array
  }[]
}

const listClerkObjects = async () => {
  const client = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  })

  const objects: ClerkObjects = {
    users: [],
    organizations: [],
    organizationMemberships: [],
  }

  // users
  const users = await client.users.getUserList()
  for (const user of users.data) {
    objects.users.push({
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
    })

    // user の membership 追加
    const userMemberships = await client.users.getOrganizationMembershipList({
      userId: user.id,
    })
    for (const membership of userMemberships.data) {
      objects.organizationMemberships.push({
        id: membership.id,
        userId: user.id,
        organizationId: membership.organization.id,
        role: membership.role,
        permissions: JSON.stringify(membership.permissions),
      })
    }
  }

  // organizations
  const organizations = await client.organizations.getOrganizationList()
  for (const org of organizations.data) {
    objects.organizations.push({
      id: org.id,
      name: org.name,
    })
  }

  return objects
}

const dumpClerkObjects = async () => {
  const clerkObjects = await listClerkObjects()
  await fs.writeFile(
    path.join(__dirname, 'clerk-data.json'),
    JSON.stringify(clerkObjects, null, 2),
  )
}

await dumpClerkObjects()
