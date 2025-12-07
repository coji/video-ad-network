import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { Link, redirect, useFetcher } from 'react-router'
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
import type { Route } from './+types/forgot-password'

const forgotPasswordSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください'),
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
  const submission = parseWithZod(formData, { schema: forgotPasswordSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply(), success: false }
  }

  const { email } = submission.value

  const { error } = await authClient.$fetch('/forget-password', {
    method: 'POST',
    body: {
      email,
      redirectTo: '/reset-password',
    },
  })

  if (error) {
    return {
      lastResult: submission.reply({
        formErrors: [
          error.message || 'パスワードリセットメールの送信に失敗しました',
        ],
      }),
      success: false,
    }
  }

  return { lastResult: submission.reply(), success: true }
}

export default function ForgotPasswordPage() {
  const fetcher = useFetcher<typeof clientAction>()
  const isLoading = fetcher.state !== 'idle'
  const isSuccess = fetcher.data?.success === true

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: forgotPasswordSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  if (isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>メールを送信しました</CardTitle>
          <CardDescription>
            パスワードリセット用のリンクをメールで送信しました。メールをご確認ください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/login">
            <Button variant="outline" className="w-full">
              ログインに戻る
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>パスワードをお忘れですか？</CardTitle>
        <CardDescription>
          登録したメールアドレスを入力してください。パスワードリセット用のリンクを送信します。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <fetcher.Form
          method="post"
          {...getFormProps(form)}
          className="space-y-4"
        >
          {form.errors && (
            <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
              {form.errors[0]}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor={fields.email.id}>メールアドレス</Label>
            <Input
              {...getInputProps(fields.email, { type: 'email' })}
              placeholder="admin@example.com"
              autoComplete="email"
            />
            {fields.email.errors && (
              <p className="text-destructive text-sm">
                {fields.email.errors[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? '送信中...' : 'リセットリンクを送信'}
          </Button>

          <div className="text-center text-sm">
            <Link to="/login" className="text-primary hover:underline">
              ログインに戻る
            </Link>
          </div>
        </fetcher.Form>
      </CardContent>
    </Card>
  )
}
