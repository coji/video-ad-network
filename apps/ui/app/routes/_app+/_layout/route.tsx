import { Outlet } from '@remix-run/react'
import { SidebarProvider } from '~/components/ui/sidebar'
import { AppSidebar } from './app-sidebar'

export default function AppLayout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-2">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}
