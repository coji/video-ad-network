import { SignOutButton } from '@clerk/react-router'
import { getAuth } from '@clerk/react-router/ssr.server'
import type { LoaderFunctionArgs } from 'react-router'
import { redirect } from 'react-router'

export const loader = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  const auth = await getAuth({ request, params, context })
  if (!auth.userId) {
    // すでにログアウトしてる
    throw redirect('/login')
  }
  return {}
}

export default function Index() {
  return <SignOutButton />
}
