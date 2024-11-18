import { getAuth } from '@clerk/remix/ssr.server'
import { redirect, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { getDB } from '@video-ad-network/db'
import { formatDateTime } from '~/lib/datetime'
import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/components/ui'

export const loader = async (args: LoaderFunctionArgs) => {
	const { userId, orgId } = await getAuth(args)
	if (!userId || !orgId) {
		throw redirect('/login')
	}

	const db = getDB(args.context.cloudflare.env)
	const campaigns = await db
		.selectFrom('campaigns')
		.innerJoin('advertisers', 'campaigns.advertiserId', 'advertisers.id')
		.selectAll()
		.where('advertisers.organizationId', '==', orgId)
		.limit(100)
		.execute()

	return { campaigns }
}

export default function CampaignIndexPage() {
	const { campaigns } = useLoaderData<typeof loader>()
	return (
		<Card>
			<CardHeader>
				<CardTitle>キャンペーン</CardTitle>
				<CardDescription />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>名称</TableHead>
							<TableHead>タイプ</TableHead>
							<TableHead>消化 / 予算</TableHead>
							<TableHead>期間</TableHead>
							<TableHead>ステータス</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{campaigns.map((campaign) => (
							<TableRow key={campaign.id}>
								<TableCell>{campaign.id}</TableCell>
								<TableCell>{campaign.name}</TableCell>
								<TableCell>{campaign.budgetType}</TableCell>
								<TableCell>
									{campaign.spentBudget.toLocaleString()}
									<small>円</small> / {campaign.budget.toLocaleString()}
									<small>円</small>
								</TableCell>
								<TableCell>
									{formatDateTime(campaign.startAt)} -{' '}
									{formatDateTime(campaign.endAt)}
								</TableCell>
								<TableCell>
									<Badge
										variant={
											campaign.status === 'ACTIVE' ? 'default' : 'outline'
										}
									>
										{campaign.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
