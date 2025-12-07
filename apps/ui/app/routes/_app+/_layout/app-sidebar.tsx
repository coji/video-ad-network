import {
  BuildingIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  FileVideoIcon,
  GoalIcon,
  GroupIcon,
  LogOutIcon,
  NewspaperIcon,
  PlusIcon,
  ScanIcon,
  UserIcon,
} from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, useNavigate, useRevalidator } from 'react-router'
import { toast } from 'sonner'
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
import { parseOrganizationMetadata } from '~/lib/organization'
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
        className="aria-[current]:bg-primary aria-[current]:text-primary-foreground aria-[current]:hover:bg-primary/80 aria-[current]:border-transparent aria-[current]:shadow"
      >
        {children}
      </NavLink>
    </SidebarMenuButton>
  </SidebarMenuItem>
)

type Organization = {
  id: string
  name: string
  slug: string
  logo?: string | null
  metadata?: string | null
}

type User = {
  name: string
  email: string
  image?: string | null
  role?: string | null
}

export function AppSidebar() {
  const { open } = useSidebar()
  const navigate = useNavigate()
  const revalidator = useRevalidator()

  const [user, setUser] = useState<User | null>(null)
  const [activeOrg, setActiveOrg] = useState<Organization | null>(null)
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Sync with better-auth session and organizations (external auth state)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await authClient.getSession()
        if (session.data?.user) {
          setUser({
            name: session.data.user.name,
            email: session.data.user.email,
            image: session.data.user.image,
            role: session.data.user.role,
          })
        }

        const orgResult = await authClient.organization.getFullOrganization()
        if (orgResult.data) {
          setActiveOrg(orgResult.data as Organization)
        }

        const orgsResult = await authClient.organization.list()
        if (orgsResult.data) {
          setOrganizations(orgsResult.data as Organization[])
        }
      } catch (error) {
        console.error('Error fetching auth data:', error)
        toast.error('認証情報の取得に失敗しました')
      } finally {
        setIsLoaded(true)
      }
    }

    fetchData()
  }, [])

  const metadata = parseOrganizationMetadata(activeOrg?.metadata)

  const handleLogout = async () => {
    await authClient.signOut()
    navigate('/login')
  }

  const handleSwitchOrganization = async (organizationId: string) => {
    await authClient.organization.setActive({ organizationId })
    // Refresh local state after switching
    const orgResult = await authClient.organization.getFullOrganization()
    if (orgResult.data) {
      setActiveOrg(orgResult.data as Organization)
    }
    revalidator.revalidate()
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const hasMultipleOrgs = organizations && organizations.length > 1
  const hasNoOrgs = organizations.length === 0
  const displayName = activeOrg?.name ?? 'Video Ad Network'

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        {/* アプリ名 */}
        {open ? (
          <div className="px-2 py-1 text-sm font-semibold">
            Video Ad Network
          </div>
        ) : (
          <div className="flex justify-center py-1">
            <BuildingIcon className="h-4 w-4" />
          </div>
        )}

        {/* 組織セレクター */}
        {open &&
          (hasNoOrgs ? (
            // 組織がない場合：作成を誘導
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2"
              asChild
            >
              <NavLink to="/admin/tenants/new">
                <PlusIcon className="h-4 w-4" />
                <span className="text-sm">組織を作成</span>
              </NavLink>
            </Button>
          ) : hasMultipleOrgs ? (
            // 複数組織がある場合：ドロップダウンで切り替え
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                >
                  <span className="truncate">{displayName}</span>
                  <ChevronsUpDownIcon className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {organizations?.map((org) => (
                  <DropdownMenuItem
                    key={org.id}
                    onClick={() => handleSwitchOrganization(org.id)}
                    className="flex items-center justify-between"
                  >
                    <span className="truncate">{org.name}</span>
                    {org.id === activeOrg?.id && (
                      <CheckIcon className="h-4 w-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // 1つだけの場合：組織名を表示
            <div className="text-muted-foreground truncate px-2 text-xs">
              {displayName}
            </div>
          ))}
      </SidebarHeader>

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

        {user?.role === 'admin' && (
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItemLink to="/admin/tenants">
                  <BuildingIcon />
                  テナント管理
                </SidebarMenuItemLink>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        {isLoaded && user && (
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
                  {user.image && (
                    <AvatarImage src={user.image} alt={user.name} />
                  )}
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                {open && (
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {user.email}
                    </span>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-muted-foreground text-xs">{user.email}</p>
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
