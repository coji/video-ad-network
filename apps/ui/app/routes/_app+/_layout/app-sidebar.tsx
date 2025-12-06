import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from '@clerk/react-router'
import {
  FileVideoIcon,
  GoalIcon,
  GroupIcon,
  NewspaperIcon,
  PlusIcon,
  ScanIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router'
import {
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
  SidebarRail,
  useSidebar,
} from '~/components/ui'

const SidebarMenuItemLink = ({
  children,
  to,
}: {
  children: ReactNode
  to: string
}) => (
  <SidebarMenuItem>
    <SidebarMenuButton asChild>
      <NavLink
        to={to}
        className="aria-[current]:bg-primary aria-[current]:text-primary-foreground aria-[current]:hover:bg-primary/80 aria-[current]:border-transparent aria-[current]:shadow"
      >
        {children}
      </NavLink>
    </SidebarMenuButton>
  </SidebarMenuItem>
)

export function AppSidebar() {
  const { open } = useSidebar()
  const { organization } = useOrganization()

  return (
    <Sidebar collapsible="icon">
      {open && (
        <SidebarHeader>
          <OrganizationSwitcher hidePersonal afterSelectOrganizationUrl={'/'} />
        </SidebarHeader>
      )}

      <SidebarContent>
        {!!organization?.publicMetadata?.isAdvertiser && (
          <SidebarGroup>
            <SidebarGroupLabel>Advertiser</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItemLink to="/advertiser/campaigns">
                  <GoalIcon />
                  キャンペーン
                </SidebarMenuItemLink>
                <SidebarMenuItemLink to="/advertiser/ad-groups">
                  <GroupIcon />
                  広告グループ
                </SidebarMenuItemLink>
                <SidebarMenuItemLink to="/advertiser/ads">
                  <FileVideoIcon />
                  広告
                </SidebarMenuItemLink>

                <SidebarMenuItemLink to="/advertiser/entries/new">
                  <PlusIcon />
                  新規入稿
                </SidebarMenuItemLink>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {!!organization?.publicMetadata?.isMedia && (
          <SidebarGroup>
            <SidebarGroupLabel>Media</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItemLink to="/media/media">
                  <NewspaperIcon />
                  メディア
                </SidebarMenuItemLink>
                <SidebarMenuItemLink to="/media/ad-slots">
                  <ScanIcon />
                  広告枠
                </SidebarMenuItemLink>
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

      <SidebarRail />
    </Sidebar>
  )
}
