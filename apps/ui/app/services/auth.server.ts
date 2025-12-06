import { getAuth } from '@clerk/react-router/server'
import { redirect, type LoaderFunctionArgs } from 'react-router'

type SignedInAuthObject = Awaited<ReturnType<typeof requireUser>>

export const getUser = async (args: LoaderFunctionArgs) => {
  const auth = await getAuth(args)
  return auth.isAuthenticated ? auth : null
}

export const requireUser = async (args: LoaderFunctionArgs) => {
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

export const requireOrgUser = async (args: LoaderFunctionArgs) => {
  const user = await requireUser(args)
  if (!isOrgUser(user)) {
    throw redirect('/login')
  }
  return user
}
