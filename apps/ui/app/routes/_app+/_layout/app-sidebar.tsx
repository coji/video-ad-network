import { OrganizationSwitcher, UserButton, useOrganization } from '@clerk/remix'
import {
	FileVideoIcon,
	GoalIcon,
	GroupIcon,
	NewspaperIcon,
	ScanIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import {
	useSidebar,
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
	SidebarTrigger,
	HStack,
} from '~/components/ui'

export function AppSidebar() {
	const { open } = useSidebar()
	const { organization } = useOrganization()

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				{open ? (
					<HStack>
						<OrganizationSwitcher hidePersonal />
						<div className="flex-1" />
						<SidebarTrigger />
					</HStack>
				) : (
					<SidebarTrigger />
				)}
			</SidebarHeader>

			<SidebarContent>
				{!!organization?.publicMetadata?.isAdvertiser && (
					<SidebarGroup>
						<SidebarGroupLabel>Advertiser</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<GoalIcon />
										キャンペーン
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<GroupIcon />
										広告グループ
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<FileVideoIcon />
										広告
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				)}

				{!!organization?.publicMetadata?.isMedia && (
					<SidebarGroup>
						<SidebarGroupLabel>Media</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<NewspaperIcon />
										メディア
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<ScanIcon />
										広告枠
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				)}
			</SidebarContent>
			<SidebarFooter>
				<UserButton
					showName={open}
					appearance={{
						elements: {
							rootBox: 'w-full justify-center',
							userButtonTrigger: 'w-full',
						},
					}}
				/>
			</SidebarFooter>
		</Sidebar>
	)
}
