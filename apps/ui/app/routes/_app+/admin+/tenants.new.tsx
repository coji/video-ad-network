import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { ArrowLeftIcon } from 'lucide-react'
import { Link, redirect, useFetcher } from 'react-router'
import { z } from 'zod/v4'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
} from '~/components/ui'
import { auth, requireAdmin } from '~/services/auth.server'
import type { Route } from './+types/tenants.new'

const createTenantSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  slug: z
    .string()
    .min(1, 'スラッグを入力してください')
    .regex(
      /^[a-z0-9-]+$/,
      'スラッグは英小文字、数字、ハイフンのみ使用できます',
    ),
  logo: z.url('有効なURLを入力してください').optional().or(z.literal('')),
  isAdvertiser: z.boolean().optional(),
  isMedia: z.boolean().optional(),
})

export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)
  return null
}

export const action = async (args: Route.ActionArgs) => {
  await requireAdmin(args)
  const formData = await args.request.formData()
  const submission = parseWithZod(formData, { schema: createTenantSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  const { name, slug, logo, isAdvertiser, isMedia } = submission.value

  try {
    await auth.api.createOrganization({
      body: {
        name,
        slug,
        logo: logo || undefined,
        metadata: {
          isAdvertiser: isAdvertiser ?? false,
          isMedia: isMedia ?? false,
        },
      },
      headers: args.request.headers,
    })

    throw redirect('/admin/tenants')
  } catch (error) {
    if (error instanceof Response) {
      throw error
    }
    return {
      lastResult: submission.reply({
        formErrors: ['テナントの作成に失敗しました'],
      }),
    }
  }
}

export default function NewTenantPage() {
  const fetcher = useFetcher<typeof action>()
  const isLoading = fetcher.state !== 'idle'

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    defaultValue: {
      name: '',
      slug: '',
      logo: '',
      isAdvertiser: false,
      isMedia: false,
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createTenantSchema })
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
        <div>
          <h1 className="text-2xl font-bold">テナント作成</h1>
          <p className="text-muted-foreground">
            新しいテナント（組織）を作成します
          </p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>基本情報</CardTitle>
          <CardDescription>
            テナントの基本情報を入力してください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <fetcher.Form
            method="post"
            {...getFormProps(form)}
            className="space-y-6"
          >
            {form.errors && (
              <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
                {form.errors[0]}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor={fields.name.id}>名前 *</Label>
              <Input
                {...getInputProps(fields.name, { type: 'text' })}
                placeholder="例: 株式会社サンプル"
              />
              {fields.name.errors && (
                <p className="text-destructive text-sm">
                  {fields.name.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.slug.id}>スラッグ *</Label>
              <Input
                {...getInputProps(fields.slug, { type: 'text' })}
                placeholder="例: sample-company"
              />
              <p className="text-muted-foreground text-xs">
                URLの一部として使用されます。英小文字、数字、ハイフンのみ使用できます。
              </p>
              {fields.slug.errors && (
                <p className="text-destructive text-sm">
                  {fields.slug.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.logo.id}>ロゴURL</Label>
              <Input
                {...getInputProps(fields.logo, { type: 'url' })}
                placeholder="https://example.com/logo.png"
              />
              {fields.logo.errors && (
                <p className="text-destructive text-sm">
                  {fields.logo.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <Label>テナントタイプ</Label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={fields.isAdvertiser.id}
                    name={fields.isAdvertiser.name}
                    defaultChecked={fields.isAdvertiser.initialValue === 'on'}
                  />
                  <Label
                    htmlFor={fields.isAdvertiser.id}
                    className="font-normal"
                  >
                    広告主
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={fields.isMedia.id}
                    name={fields.isMedia.name}
                    defaultChecked={fields.isMedia.initialValue === 'on'}
                  />
                  <Label htmlFor={fields.isMedia.id} className="font-normal">
                    メディア
                  </Label>
                </div>
              </div>
              <p className="text-muted-foreground text-xs">
                テナントの役割を選択してください。複数選択可能です。
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? '作成中...' : '作成'}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link to="/admin/tenants">キャンセル</Link>
              </Button>
            </div>
          </fetcher.Form>
        </CardContent>
      </Card>
    </div>
  )
}
