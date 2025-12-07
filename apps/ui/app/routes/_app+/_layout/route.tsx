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
      <main className="flex flex-1 flex-col">
        <header className="bg-background flex h-10 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <div className="flex-1 overflow-auto px-4 py-2 md:px-8 md:py-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
