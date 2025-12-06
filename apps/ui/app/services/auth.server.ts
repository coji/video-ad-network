import { getDB } from '@video-ad-network/db'
import { env } from 'cloudflare:workers'
import { redirect, type LoaderFunctionArgs } from 'react-router'
import { createAuth, type Auth } from './auth.config'

// Database
export const db = getDB(env.TURSO_DATABASE_URL, env.TURSO_AUTH_TOKEN)

// Better Auth instance
export const auth: Auth = createAuth({
  TURSO_DATABASE_URL: env.TURSO_DATABASE_URL,
  TURSO_AUTH_TOKEN: env.TURSO_AUTH_TOKEN,
  BETTER_AUTH_URL: env.BETTER_AUTH_URL,
  BETTER_AUTH_SECRET: env.BETTER_AUTH_SECRET,
})

// Session helpers
export const getSession = async (args: LoaderFunctionArgs) => {
  const session = await auth.api.getSession({
    headers: args.request.headers,
  })
  return session
}

export const requireUser = async (args: LoaderFunctionArgs) => {
  const session = await getSession(args)
  if (!session) {
    throw redirect('/login')
  }
  return session
}

type SessionWithOrg = Awaited<ReturnType<typeof requireUser>> & {
  session: {
    activeOrganizationId: string
  }
}

function hasActiveOrganization(
  session: Awaited<ReturnType<typeof requireUser>>,
): session is SessionWithOrg {
  return !!session.session.activeOrganizationId
}

export const requireOrgUser = async (args: LoaderFunctionArgs) => {
  const session = await requireUser(args)
  if (!hasActiveOrganization(session)) {
    throw redirect('/login')
  }
  return session
}

export const requireAdmin = async (args: LoaderFunctionArgs) => {
  const session = await requireUser(args)
  if (session.user.role !== 'admin') {
    throw redirect('/')
  }
  return session
}
