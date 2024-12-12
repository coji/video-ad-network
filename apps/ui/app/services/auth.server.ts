import { getAuth } from '@clerk/react-router/ssr.server'
import { redirect, type AppLoadContext } from 'react-router'

type AuthArgs = {
  request: Request
  params: Record<string, string | undefined>
  context: AppLoadContext
}
type SignedInAuthObject = Awaited<ReturnType<typeof requireUser>>

export const getUser = async (args: AuthArgs) => {
  const user = await getAuth(args)
  return user.userId ? user : null
}

export const requireUser = async (args: AuthArgs) => {
  const user = await getUser(args)
  if (!user) {
    throw redirect('/login')
  }
  return user
}

function isOrgUser(
  user: SignedInAuthObject,
): user is SignedInAuthObject & { orgId: string; orgRole: string } {
  return !!user.orgId && !!user.orgRole
}

export const requireOrgUser = async (args: AuthArgs) => {
  const user = await requireUser(args)
  if (!isOrgUser(user)) {
    throw redirect('/login')
  }
  return user
}
