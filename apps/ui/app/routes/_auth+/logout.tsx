import { redirect, useFetcher } from 'react-router'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui'
import { authClient } from '~/services/auth.client'
import { getSession } from '~/services/auth.server'
import type { Route } from './+types/logout'

export const loader = async (args: Route.LoaderArgs) => {
  const session = await getSession(args)
  if (!session) {
    throw redirect('/login')
  }
  return null
}

export const clientAction = async () => {
  const { error } = await authClient.$fetch('/sign-out', {
    method: 'POST',
  })

  if (error) {
    return { error: error.message || 'ログアウトに失敗しました' }
  }

  return redirect('/login')
}

export default function LogoutPage() {
  const fetcher = useFetcher<typeof clientAction>()
  const isLoading = fetcher.state !== 'idle'

  return (
    <Card>
      <CardHeader>
        <CardTitle>ログアウト</CardTitle>
        <CardDescription>ログアウトしますか？</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {fetcher.data?.error && (
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {fetcher.data.error}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => history.back()}
            disabled={isLoading}
          >
            キャンセル
          </Button>
          <fetcher.Form method="post">
            <Button
              type="submit"
              variant="destructive"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'ログアウト中...' : 'ログアウト'}
            </Button>
          </fetcher.Form>
        </div>
      </CardContent>
    </Card>
  )
}
