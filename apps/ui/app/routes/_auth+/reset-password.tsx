import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { Link, redirect, useFetcher, useSearchParams } from 'react-router'
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
} from '~/components/ui'
import { authClient } from '~/services/auth.client'
import { getSession } from '~/services/auth.server'
import type { Route } from './+types/reset-password'

const resetPasswordSchema = z
  .object({
    token: z.string().min(1, 'トークンが必要です'),
    password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
    confirmPassword: z.string().min(1, '確認用パスワードを入力してください'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  })

export const loader = async (args: Route.LoaderArgs) => {
  const session = await getSession(args)
  if (session) {
    throw redirect('/')
  }
  return null
}

export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: resetPasswordSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), success: false }
  }

  const { password, token } = submission.value

  const { error } = await authClient.$fetch('/reset-password', {
    method: 'POST',
    body: {
      newPassword: password,
      token,
    },
  })

  if (error) {
    return {
      lastResult: submission.reply({
        formErrors: [error.message || 'パスワードのリセットに失敗しました'],
      }),
      success: false,
    }
  }

  return { lastResult: submission.reply(), success: true }
}

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const urlError = searchParams.get('error')

  const fetcher = useFetcher<typeof clientAction>()
  const isLoading = fetcher.state !== 'idle'
  const isSuccess = fetcher.data?.success === true

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    defaultValue: { token: token ?? '' },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: resetPasswordSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  // Show error if token is invalid
  if (urlError === 'INVALID_TOKEN' || (!token && !isSuccess)) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>エラー</CardTitle>
          <CardDescription>
            パスワードリセットリンクが無効または期限切れです。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/forgot-password">
            <Button variant="outline" className="w-full">
              パスワードリセットを再度リクエスト
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>パスワードをリセットしました</CardTitle>
          <CardDescription>
            新しいパスワードでログインできます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/login">
            <Button className="w-full">ログインへ</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>新しいパスワードを設定</CardTitle>
        <CardDescription>新しいパスワードを入力してください。</CardDescription>
      </CardHeader>
      <CardContent>
        <fetcher.Form
          method="post"
          {...getFormProps(form)}
          className="space-y-4"
        >
          <input type="hidden" name="token" value={token ?? ''} />

          {form.errors && (
            <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
              {form.errors[0]}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor={fields.password.id}>新しいパスワード</Label>
            <Input
              {...getInputProps(fields.password, { type: 'password' })}
              placeholder="********"
              autoComplete="new-password"
            />
            {fields.password.errors && (
              <p className="text-destructive text-sm">
                {fields.password.errors[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={fields.confirmPassword.id}>パスワードを確認</Label>
            <Input
              {...getInputProps(fields.confirmPassword, { type: 'password' })}
              placeholder="********"
              autoComplete="new-password"
            />
            {fields.confirmPassword.errors && (
              <p className="text-destructive text-sm">
                {fields.confirmPassword.errors[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'リセット中...' : 'パスワードをリセット'}
          </Button>
        </fetcher.Form>
      </CardContent>
    </Card>
  )
}
