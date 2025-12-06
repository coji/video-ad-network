import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { ArrowLeftIcon } from 'lucide-react'
import { Link, redirect, useFetcher, useLoaderData } from 'react-router'
import { z } from 'zod/v4'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui'
import { auth, db, requireAdmin } from '~/services/auth.server'
import type { Route } from './+types/tenants.$id.members.invite'

const inviteMemberSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください'),
  role: z.enum(['owner', 'admin', 'member']),
})

export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)
  const { id } = args.params

  const tenant = await db
    .selectFrom('organization')
    .select(['id', 'name'])
    .where('id', '=', id)
    .executeTakeFirst()

  if (!tenant) {
    throw new Response('Tenant not found', { status: 404 })
  }

  return { tenant }
}

export const action = async (args: Route.ActionArgs) => {
  await requireAdmin(args)
  const { id } = args.params
  const formData = await args.request.formData()
  const submission = parseWithZod(formData, { schema: inviteMemberSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  const { email, role } = submission.value

  try {
    await auth.api.createInvitation({
      body: {
        organizationId: id,
        email,
        role,
      },
      headers: args.request.headers,
    })

    throw redirect(`/admin/tenants/${id}`)
  } catch (error) {
    if (error instanceof Response) {
      throw error
    }
    return {
      lastResult: submission.reply({
        formErrors: ['招待の送信に失敗しました'],
      }),
    }
  }
}

export default function InviteMemberPage() {
  const { tenant } = useLoaderData<typeof loader>()
  const fetcher = useFetcher<typeof action>()
  const isLoading = fetcher.state !== 'idle'

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    defaultValue: {
      email: '',
      role: 'member',
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: inviteMemberSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to={`/admin/tenants/${tenant.id}`}>
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">メンバー招待</h1>
          <p className="text-muted-foreground">
            {tenant.name} に新しいメンバーを招待します
          </p>
        </div>
      </div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>招待情報</CardTitle>
          <CardDescription>
            招待するメンバーの情報を入力してください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <fetcher.Form
            method="post"
            {...getFormProps(form)}
            className="space-y-4"
          >
            {form.errors && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {form.errors[0]}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor={fields.email.id}>メールアドレス *</Label>
              <Input
                {...getInputProps(fields.email, { type: 'email' })}
                placeholder="user@example.com"
              />
              {fields.email.errors && (
                <p className="text-sm text-destructive">
                  {fields.email.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.role.id}>ロール *</Label>
              <Select name={fields.role.name} defaultValue="member">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">オーナー</SelectItem>
                  <SelectItem value="admin">管理者</SelectItem>
                  <SelectItem value="member">メンバー</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                オーナー: 全権限 / 管理者: メンバー管理可能 / メンバー: 基本操作のみ
              </p>
              {fields.role.errors && (
                <p className="text-sm text-destructive">
                  {fields.role.errors[0]}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? '送信中...' : '招待を送信'}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link to={`/admin/tenants/${tenant.id}`}>キャンセル</Link>
              </Button>
            </div>
          </fetcher.Form>
        </CardContent>
      </Card>
    </div>
  )
}
