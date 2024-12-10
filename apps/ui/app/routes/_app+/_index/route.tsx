import { getAuth } from '@clerk/remix/ssr.server'
import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { redirect } from '@remix-run/react'

export const loader = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  const auth = await getAuth({ request, params, context })
  if (!auth.userId) {
    throw redirect('/login')
  }

  return {}
}

export default function Index() {
  return (
    <div>
      <h1>ダッシュボード</h1>
    </div>
  )
}
