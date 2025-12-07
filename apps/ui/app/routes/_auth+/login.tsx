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
import type { Route } from './+types/login'

const loginSchema = z.object({
  email: z.email('有効なメールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
})

export const loader = async (args: Route.LoaderArgs) => {
  const session = await getSession(args)
  if (session) {
    throw redirect('/admin/tenants')
  }
  return null
}

export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: loginSchema })

  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  const { email, password } = submission.value

  const { error } = await authClient.signIn.email({
    email,
    password,
  })

  if (error) {
    return {
      lastResult: submission.reply({
        formErrors: [error.message || 'ログインに失敗しました'],
      }),
    }
  }

  return redirect('/admin/tenants')
}

export default function LoginPage() {
  const fetcher = useFetcher<typeof clientAction>()
  const isLoading = fetcher.state !== 'idle'

  const [form, fields] = useForm({
    lastResult: fetcher.data?.lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
        <CardDescription>
          メールアドレスとパスワードを入力してください
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

          <div className="space-y-2">
            <Label htmlFor={fields.password.id}>パスワード</Label>
            <Input
              {...getInputProps(fields.password, { type: 'password' })}
              placeholder="********"
              autoComplete="current-password"
            />
            {fields.password.errors && (
              <p className="text-destructive text-sm">
                {fields.password.errors[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </Button>

          <div className="text-center text-sm">
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              パスワードをお忘れですか？
            </Link>
          </div>
        </fetcher.Form>
      </CardContent>
    </Card>
  )
}
