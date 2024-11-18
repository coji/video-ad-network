import { OrganizationSwitcher, UserButton, useOrganization } from '@clerk/remix'
import { NavLink } from '@remix-run/react'
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
									<SidebarMenuButton asChild>
										<NavLink
											to="/advertiser/campaigns"
											className="aria-[current]:font-bold aria-[current]:bg-slate-500 aria-[current]:text-white"
										>
											<GoalIcon />
											キャンペーン
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<NavLink
											to="/advertiser/ad-groups"
											className="aria-[current]:font-bold aria-[current]:bg-slate-500 aria-[current]:text-white"
										>
											<GroupIcon />
											広告グループ
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<NavLink
											to="/advertiser/ads"
											className="aria-[current]:font-bold aria-[current]:bg-slate-500 aria-[current]:text-white"
										>
											<FileVideoIcon />
											広告
										</NavLink>
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
									<SidebarMenuButton asChild>
										<NavLink
											to="/media/medias"
											className="aria-[current]:font-bold aria-[current]:bg-slate-500 aria-[current]:text-white"
										>
											<NewspaperIcon />
											メディア
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<NavLink
											to="/media/ad-slots"
											className="aria-[current]:font-bold aria-[current]:bg-slate-500 aria-[current]:text-white"
										>
											<ScanIcon />
											広告枠
										</NavLink>
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
