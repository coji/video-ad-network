import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import {
  ArrowLeftIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
  UsersIcon,
} from 'lucide-react'
import { Link, redirect, useFetcher, useLoaderData } from 'react-router'
import { z } from 'zod/v4'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui'
import { auth, db, requireAdmin } from '~/services/auth.server'
import type { Route } from './+types/tenants.$id._index'

type OrganizationMetadata = {
  isAdvertiser?: boolean
  isMedia?: boolean
}

const updateTenantSchema = z.object({
  _action: z.literal('update'),
  name: z.string().min(1, '名前を入力してください'),
  slug: z
    .string()
    .min(1, 'スラッグを入力してください')
    .regex(/^[a-z0-9-]+$/, 'スラッグは英小文字、数字、ハイフンのみ使用できます'),
  logo: z.string().url('有効なURLを入力してください').optional().or(z.literal('')),
  isAdvertiser: z.boolean().optional(),
  isMedia: z.boolean().optional(),
})

const deleteTenantSchema = z.object({
  _action: z.literal('delete'),
})

const updateMemberRoleSchema = z.object({
  _action: z.literal('updateMemberRole'),
  memberId: z.string(),
  role: z.enum(['owner', 'admin', 'member']),
})

const removeMemberSchema = z.object({
  _action: z.literal('removeMember'),
  memberId: z.string(),
})

const actionSchema = z.discriminatedUnion('_action', [
  updateTenantSchema,
  deleteTenantSchema,
  updateMemberRoleSchema,
  removeMemberSchema,
])

export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)
  const { id } = args.params

  const tenant = await db
    .selectFrom('organization')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()

  if (!tenant) {
    throw new Response('Tenant not found', { status: 404 })
  }

  const members = await db
    .selectFrom('member')
    .innerJoin('user', 'user.id', 'member.userId')
    .select([
      'member.id',
      'member.role',
      'member.createdAt',
      'user.id as userId',
      'user.name as userName',
      'user.email as userEmail',
      'user.image as userImage',
    ])
    .where('member.organizationId', '=', id)
    .orderBy('member.createdAt', 'asc')
    .execute()

  const metadata = tenant.metadata
    ? (JSON.parse(tenant.metadata) as OrganizationMetadata)
    : null

  return {
    tenant: {
      ...tenant,
      isAdvertiser: metadata?.isAdvertiser ?? false,
      isMedia: metadata?.isMedia ?? false,
    },
    members,
  }
}

export const action = async (args: Route.ActionArgs) => {
  await requireAdmin(args)
  const { id } = args.params
  const formData = await args.request.formData()
  const submission = parseWithZod(formData, { schema: actionSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  const data = submission.value

  try {
    switch (data._action) {
      case 'update': {
        const { name, slug, logo, isAdvertiser, isMedia } = data
        await auth.api.updateOrganization({
          body: {
            organizationId: id,
            data: {
              name,
              slug,
              logo: logo || undefined,
              metadata: {
                isAdvertiser: isAdvertiser ?? false,
                isMedia: isMedia ?? false,
              },
            },
          },
          headers: args.request.headers,
        })
        return { lastResult: submission.reply(), success: true }
      }
      case 'delete': {
        await auth.api.deleteOrganization({
          body: { organizationId: id },
          headers: args.request.headers,
        })
        throw redirect('/admin/tenants')
      }
      case 'updateMemberRole': {
        await auth.api.updateMemberRole({
          body: {
            organizationId: id,
            memberId: data.memberId,
            role: data.role,
          },
          headers: args.request.headers,
        })
        return { lastResult: submission.reply(), success: true }
      }
      case 'removeMember': {
        await auth.api.removeMember({
          body: {
            organizationId: id,
            memberIdOrEmail: data.memberId,
          },
          headers: args.request.headers,
        })
        return { lastResult: submission.reply(), success: true }
      }
    }
  } catch (error) {
    if (error instanceof Response) {
      throw error
    }
    return {
      lastResult: submission.reply({
        formErrors: ['操作に失敗しました'],
      }),
    }
  }
}

export default function TenantDetailPage() {
  const { tenant, members } = useLoaderData<typeof loader>()
  const fetcher = useFetcher<typeof action>()
  const isLoading = fetcher.state !== 'idle'

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    defaultValue: {
      _action: 'update' as const,
      name: tenant.name,
      slug: tenant.slug,
      logo: tenant.logo ?? '',
      isAdvertiser: tenant.isAdvertiser,
      isMedia: tenant.isMedia,
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: updateTenantSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/admin/tenants">
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{tenant.name}</h1>
          <p className="text-muted-foreground">テナントID: {tenant.id}</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2Icon className="mr-2 h-4 w-4" />
              削除
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>テナントを削除しますか？</AlertDialogTitle>
              <AlertDialogDescription>
                この操作は取り消せません。テナントに関連するすべてのデータ（メンバー、招待、メディア、広告主）も削除されます。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <fetcher.Form method="post">
                <input type="hidden" name="_action" value="delete" />
                <AlertDialogAction type="submit" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  削除する
                </AlertDialogAction>
              </fetcher.Form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PencilIcon className="h-4 w-4" />
              基本情報
            </CardTitle>
            <CardDescription>テナントの基本情報を編集します</CardDescription>
          </CardHeader>
          <CardContent>
            <fetcher.Form
              method="post"
              {...getFormProps(form)}
              className="space-y-4"
            >
              <input type="hidden" name="_action" value="update" />

              {form.errors && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.errors[0]}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor={fields.name.id}>名前</Label>
                <Input {...getInputProps(fields.name, { type: 'text' })} />
                {fields.name.errors && (
                  <p className="text-sm text-destructive">
                    {fields.name.errors[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={fields.slug.id}>スラッグ</Label>
                <Input {...getInputProps(fields.slug, { type: 'text' })} />
                {fields.slug.errors && (
                  <p className="text-sm text-destructive">
                    {fields.slug.errors[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor={fields.logo.id}>ロゴURL</Label>
                <Input {...getInputProps(fields.logo, { type: 'url' })} />
                {fields.logo.errors && (
                  <p className="text-sm text-destructive">
                    {fields.logo.errors[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>テナントタイプ</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={fields.isAdvertiser.id}
                      name={fields.isAdvertiser.name}
                      defaultChecked={tenant.isAdvertiser}
                    />
                    <Label htmlFor={fields.isAdvertiser.id} className="font-normal">
                      広告主
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={fields.isMedia.id}
                      name={fields.isMedia.name}
                      defaultChecked={tenant.isMedia}
                    />
                    <Label htmlFor={fields.isMedia.id} className="font-normal">
                      メディア
                    </Label>
                  </div>
                </div>
              </div>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? '保存中...' : '保存'}
              </Button>
            </fetcher.Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4" />
              メンバー
            </CardTitle>
            <CardDescription>
              {members.length}名のメンバーが所属しています
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Button size="sm" asChild>
                <Link to={`/admin/tenants/${tenant.id}/members/invite`}>
                  <UserPlusIcon className="mr-2 h-4 w-4" />
                  招待
                </Link>
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>名前</TableHead>
                  <TableHead>ロール</TableHead>
                  <TableHead className="w-[100px]">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      メンバーがいません
                    </TableCell>
                  </TableRow>
                ) : (
                  members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{member.userName}</div>
                          <div className="text-sm text-muted-foreground">
                            {member.userEmail}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <fetcher.Form method="post" className="flex items-center gap-2">
                          <input type="hidden" name="_action" value="updateMemberRole" />
                          <input type="hidden" name="memberId" value={member.id} />
                          <Select
                            name="role"
                            defaultValue={member.role}
                            onValueChange={(value) => {
                              const form = document.createElement('form')
                              form.method = 'post'
                              form.innerHTML = `
                                <input type="hidden" name="_action" value="updateMemberRole" />
                                <input type="hidden" name="memberId" value="${member.id}" />
                                <input type="hidden" name="role" value="${value}" />
                              `
                              fetcher.submit(form)
                            }}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="owner">オーナー</SelectItem>
                              <SelectItem value="admin">管理者</SelectItem>
                              <SelectItem value="member">メンバー</SelectItem>
                            </SelectContent>
                          </Select>
                        </fetcher.Form>
                      </TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>メンバーを削除しますか？</AlertDialogTitle>
                              <AlertDialogDescription>
                                {member.userName} をテナントから削除します。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>キャンセル</AlertDialogCancel>
                              <fetcher.Form method="post">
                                <input type="hidden" name="_action" value="removeMember" />
                                <input type="hidden" name="memberId" value={member.id} />
                                <AlertDialogAction type="submit" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                  削除する
                                </AlertDialogAction>
                              </fetcher.Form>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
