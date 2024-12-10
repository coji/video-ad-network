import { SignIn } from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { redirect } from '@remix-run/react'

export const loader = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  const auth = await getAuth({ request, params, context })
  if (auth.userId) {
    // すでにログイン済み
    throw redirect('/')
  }
  return {}
}

export default function Index() {
  return <SignIn />
}
