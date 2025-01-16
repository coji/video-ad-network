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
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div>
          <header className="p-2">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-2">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
