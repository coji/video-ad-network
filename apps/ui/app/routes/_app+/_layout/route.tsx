import { Outlet } from 'react-router'
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
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

      <div className="flex-1">
        <header className="p-2">
          <SidebarTrigger />
        </header>

        <main className="px-4 py-2 md:px-8 md:py-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
