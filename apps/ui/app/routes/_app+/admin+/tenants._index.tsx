import { sql } from '@video-ad-network/db'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui'
import { parseOrganizationMetadata } from '~/lib/organization'
import { db, requireAdmin } from '~/services/auth.server'
import type { Route } from './+types/tenants._index'

export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)

  const tenants = await db
    .selectFrom('organization')
    .leftJoin('member', 'member.organizationId', 'organization.id')
    .select([
      'organization.id',
      'organization.name',
      'organization.slug',
      'organization.logo',
      'organization.metadata',
      'organization.createdAt',
    ])
    .select(sql<number>`count(member.id)`.as('memberCount'))
    .groupBy('organization.id')
    .orderBy('organization.createdAt', 'desc')
    .execute()

  return {
    tenants: tenants.map((tenant) => {
      const metadata = parseOrganizationMetadata(tenant.metadata)
      return {
        ...tenant,
        isAdvertiser: metadata?.isAdvertiser ?? false,
        isMedia: metadata?.isMedia ?? false,
      }
    }),
  }
}

export default function TenantsIndexPage({
  loaderData: { tenants },
}: Route.ComponentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">テナント管理</h1>
          <p className="text-muted-foreground">
            システム内のすべてのテナント（組織）を管理します
          </p>
        </div>
        <Button asChild>
          <Link to="/admin/tenants/new">
            <PlusIcon className="mr-2 h-4 w-4" />
            新規作成
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>テナント一覧</CardTitle>
          <CardDescription>
            全 {tenants.length} 件のテナントが登録されています
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>名前</TableHead>
                <TableHead>スラッグ</TableHead>
                <TableHead>タイプ</TableHead>
                <TableHead className="text-right">メンバー数</TableHead>
                <TableHead>作成日</TableHead>
                <TableHead className="w-[100px]">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-muted-foreground text-center"
                  >
                    テナントがありません
                  </TableCell>
                </TableRow>
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">{tenant.name}</TableCell>
                    <TableCell>
                      <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                        {tenant.slug}
                      </code>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {tenant.isAdvertiser && (
                          <Badge variant="default">広告主</Badge>
                        )}
                        {tenant.isMedia && (
                          <Badge variant="secondary">メディア</Badge>
                        )}
                        {!tenant.isAdvertiser && !tenant.isMedia && (
                          <Badge variant="outline">未設定</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {tenant.memberCount}
                    </TableCell>
                    <TableCell>
                      {new Date(tenant.createdAt).toLocaleDateString('ja-JP')}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/admin/tenants/${tenant.id}`}>詳細</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
