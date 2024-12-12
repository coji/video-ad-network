import { SignOutButton } from '@clerk/react-router'
import { redirect } from 'react-router'
import { getUser } from '~/services/auth.server'
import type { Route } from './+types/logout'

export const loader = async (args: Route.LoaderArgs) => {
  const user = await getUser(args)
  if (!user) {
    // すでにログアウトしてる
    throw redirect('/login')
  }
  return null
}

export default function Index() {
  return <SignOutButton />
}
