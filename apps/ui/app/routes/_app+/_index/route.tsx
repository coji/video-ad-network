import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { redirect, useLoaderData } from '@remix-run/react'
import { getDB, type DB, type Selectable } from '@video-ad-network/db'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export const loader = async ({
	request,
	params,
	context,
}: LoaderFunctionArgs) => {
	const auth = await getAuth({ request, params, context })
	if (!auth.userId) {
		throw redirect('/login')
	}

	const db = getDB(context.cloudflare.env)
	const ads = await db.selectFrom('ads').selectAll().execute()

	return { ads }
}

export default function Index() {
	const { ads } = useLoaderData<typeof loader>()

	return (
		<div>
			<h1>Index Route</h1>
			<div>{JSON.stringify(ads)}</div>
		</div>
	)
}
