import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod/v4'
import { useEffect, useState } from 'react'
import { useFetcher } from 'react-router'
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
import type { Route } from './+types/profile'

const updateProfileSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
})

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, '現在のパスワードを入力してください'),
    newPassword: z
      .string()
      .min(8, '新しいパスワードは8文字以上で入力してください'),
    confirmPassword: z.string().min(1, '確認用パスワードを入力してください'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  })

export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData()
  const intent = formData.get('intent')

  if (intent === 'updateProfile') {
    const submission = parseWithZod(formData, { schema: updateProfileSchema })

    if (submission.status !== 'success') {
      return { intent, lastResult: submission.reply(), success: false }
    }

    const { name } = submission.value

    const { error } = await authClient.updateUser({
      name,
    })

    if (error) {
      return {
        intent,
        lastResult: submission.reply({
          formErrors: [error.message || 'プロフィールの更新に失敗しました'],
        }),
        success: false,
      }
    }

    return { intent, lastResult: submission.reply(), success: true }
  }

  if (intent === 'changePassword') {
    const submission = parseWithZod(formData, { schema: changePasswordSchema })

    if (submission.status !== 'success') {
      return { intent, lastResult: submission.reply(), success: false }
    }

    const { currentPassword, newPassword } = submission.value

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
    })

    if (error) {
      return {
        intent,
        lastResult: submission.reply({
          formErrors: [error.message || 'パスワードの変更に失敗しました'],
        }),
        success: false,
      }
    }

    return { intent, lastResult: submission.reply(), success: true }
  }

  return { intent: null, lastResult: null, success: false }
}

export default function ProfileSettingsPage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const session = await authClient.getSession()
      if (session.data?.user) {
        setUser({
          name: session.data.user.name,
          email: session.data.user.email,
        })
      }
    }
    fetchUser()
  }, [])

  const profileFetcher = useFetcher<typeof clientAction>()
  const passwordFetcher = useFetcher<typeof clientAction>()

  const isProfileLoading = profileFetcher.state !== 'idle'
  const isPasswordLoading = passwordFetcher.state !== 'idle'

  const profileSuccess =
    profileFetcher.data?.intent === 'updateProfile' &&
    profileFetcher.data?.success === true
  const passwordSuccess =
    passwordFetcher.data?.intent === 'changePassword' &&
    passwordFetcher.data?.success === true

  const [profileForm, profileFields] = useForm({
    lastResult:
      profileFetcher.data?.intent === 'updateProfile'
        ? profileFetcher.data?.lastResult
        : undefined,
    defaultValue: { name: user?.name ?? '' },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: updateProfileSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  const [passwordForm, passwordFields] = useForm({
    lastResult:
      passwordFetcher.data?.intent === 'changePassword'
        ? passwordFetcher.data?.lastResult
        : undefined,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: changePasswordSchema })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  if (!user) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">読み込み中...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">プロフィール設定</h1>

      <Card>
        <CardHeader>
          <CardTitle>プロフィール</CardTitle>
          <CardDescription>
            名前やメールアドレスを確認・変更できます
          </CardDescription>
        </CardHeader>
        <CardContent>
          <profileFetcher.Form
            method="post"
            {...getFormProps(profileForm)}
            className="space-y-4"
          >
            <input type="hidden" name="intent" value="updateProfile" />

            {profileForm.errors && (
              <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
                {profileForm.errors[0]}
              </div>
            )}

            {profileSuccess && (
              <div className="rounded-md bg-green-500/10 p-3 text-sm text-green-600">
                プロフィールを更新しました
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor={profileFields.name.id}>名前</Label>
              <Input
                {...getInputProps(profileFields.name, { type: 'text' })}
                defaultValue={user.name}
              />
              {profileFields.name.errors && (
                <p className="text-destructive text-sm">
                  {profileFields.name.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>メールアドレス</Label>
              <Input type="email" value={user.email} disabled />
              <p className="text-muted-foreground text-xs">
                メールアドレスは変更できません
              </p>
            </div>

            <Button type="submit" disabled={isProfileLoading}>
              {isProfileLoading ? '更新中...' : 'プロフィールを更新'}
            </Button>
          </profileFetcher.Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>パスワード変更</CardTitle>
          <CardDescription>パスワードを変更できます</CardDescription>
        </CardHeader>
        <CardContent>
          <passwordFetcher.Form
            method="post"
            {...getFormProps(passwordForm)}
            className="space-y-4"
          >
            <input type="hidden" name="intent" value="changePassword" />

            {passwordForm.errors && (
              <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
                {passwordForm.errors[0]}
              </div>
            )}

            {passwordSuccess && (
              <div className="rounded-md bg-green-500/10 p-3 text-sm text-green-600">
                パスワードを変更しました
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor={passwordFields.currentPassword.id}>
                現在のパスワード
              </Label>
              <Input
                {...getInputProps(passwordFields.currentPassword, {
                  type: 'password',
                })}
                autoComplete="current-password"
              />
              {passwordFields.currentPassword.errors && (
                <p className="text-destructive text-sm">
                  {passwordFields.currentPassword.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={passwordFields.newPassword.id}>
                新しいパスワード
              </Label>
              <Input
                {...getInputProps(passwordFields.newPassword, {
                  type: 'password',
                })}
                autoComplete="new-password"
              />
              {passwordFields.newPassword.errors && (
                <p className="text-destructive text-sm">
                  {passwordFields.newPassword.errors[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={passwordFields.confirmPassword.id}>
                新しいパスワード（確認）
              </Label>
              <Input
                {...getInputProps(passwordFields.confirmPassword, {
                  type: 'password',
                })}
                autoComplete="new-password"
              />
              {passwordFields.confirmPassword.errors && (
                <p className="text-destructive text-sm">
                  {passwordFields.confirmPassword.errors[0]}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isPasswordLoading}>
              {isPasswordLoading ? '変更中...' : 'パスワードを変更'}
            </Button>
          </passwordFetcher.Form>
        </CardContent>
      </Card>
    </div>
  )
}
