import { Outlet } from 'react-router'
import { requireAdmin } from '~/services/auth.server'
import type { Route } from './+types/_layout'

export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)
  return null
}

export default function AdminLayout() {
  return <Outlet />
}
