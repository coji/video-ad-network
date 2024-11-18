import { OrganizationSwitcher, UserButton, useUser } from '@clerk/remix'
import {
	HStack,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '~/components/ui'

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<OrganizationSwitcher
					hidePersonal
					appearance={{
						elements: {},
					}}
				/>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>キャンペーン</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>広告グループ</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>広告</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter>
				<UserButton showName />
			</SidebarFooter>
		</Sidebar>
	)
}
