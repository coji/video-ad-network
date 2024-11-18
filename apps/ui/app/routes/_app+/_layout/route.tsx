import { Outlet } from '@remix-run/react'
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'
import { AppSidebar } from './app-sidebar'

export default function AppLayout() {
	return (
		<div>
			<SidebarProvider>
				<AppSidebar />
				<main className="p-2 flex-1">
					<Outlet />
				</main>
			</SidebarProvider>
		</div>
	)
}
