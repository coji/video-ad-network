import { Outlet } from 'react-router'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar'
import { requireUser } from '~/services/auth.server'
import type { Route } from './+types/route'
import { AppSidebar } from './app-sidebar'

export const loader = async (args: Route.LoaderArgs) => {
  await requireUser(args)
  return null
}

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="px-4 py-2 md:px-8 md:py-4">
        <header className="mb-4 flex items-center gap-2">
          <SidebarTrigger />
        </header>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
