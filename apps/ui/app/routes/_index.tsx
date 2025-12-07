import { redirect } from 'react-router'
import { getSession } from '~/services/auth.server'
import type { Route } from './+types/_index'

export const loader = async (args: Route.LoaderArgs) => {
  const session = await getSession(args)
  if (session) {
    return redirect('/admin/tenants')
  }
  return redirect('/login')
}
