import {
  FileVideoIcon,
  GoalIcon,
  GroupIcon,
  LogOutIcon,
  NewspaperIcon,
  PlusIcon,
  ScanIcon,
  UserIcon,
} from 'lucide-react'
import { useState, useEffect, type ReactNode } from 'react'
import { NavLink, useNavigate } from 'react-router'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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
import { authClient } from '~/services/auth.client'

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
        className="aria-[current]:border-transparent aria-[current]:bg-primary aria-[current]:text-primary-foreground aria-[current]:shadow aria-[current]:hover:bg-primary/80"
      >
        {children}
      </NavLink>
    </SidebarMenuButton>
  </SidebarMenuItem>
)

type OrganizationMetadata = {
  isAdvertiser?: boolean
  isMedia?: boolean
}

type User = {
  name: string
  email: string
  image?: string | null
}

export function AppSidebar() {
  const { open } = useSidebar()
  const navigate = useNavigate()
  const [metadata, setMetadata] = useState<OrganizationMetadata | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const fetchData = async () => {
      try {
        // Fetch session to get user info
        const session = await authClient.getSession()
        if (session.data?.user) {
          setUser({
            name: session.data.user.name,
            email: session.data.user.email,
            image: session.data.user.image,
          })
        }

        // Fetch active organization
        const result = await authClient.organization.getFullOrganization()
        if (result.data?.metadata) {
          setMetadata(
            JSON.parse(result.data.metadata as string) as OrganizationMetadata,
          )
        }
      } catch {
        // No active organization or error - ignore
      }
    }

    fetchData()
  }, [])

  const handleLogout = async () => {
    await authClient.signOut()
    navigate('/login')
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Sidebar collapsible="icon">
      {open && (
        <SidebarHeader>
          <div className="px-2 py-1 text-sm font-semibold">
            Video Ad Network
          </div>
        </SidebarHeader>
      )}

      <SidebarContent>
        {metadata?.isAdvertiser && (
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

        {metadata?.isMedia && (
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
        {isMounted && user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={
                  open
                    ? 'h-auto w-full justify-start gap-2 px-2'
                    : 'h-9 w-9 p-0'
                }
              >
                <Avatar className="h-8 w-8">
                  {user.image && <AvatarImage src={user.image} alt={user.name} />}
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                {open && (
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <NavLink to="/settings/profile">
                  <UserIcon className="mr-2 h-4 w-4" />
                  プロフィール
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOutIcon className="mr-2 h-4 w-4" />
                ログアウト
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
