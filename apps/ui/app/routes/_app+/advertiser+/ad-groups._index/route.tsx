import { getAuth } from '@clerk/remix/ssr.server'
import { type LoaderFunctionArgs, redirect } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { getDB } from '@video-ad-network/db'
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
	const adGroups = await db
		.selectFrom('adGroups')
		.innerJoin('campaigns', 'adGroups.campaignId', 'campaigns.id')
		.innerJoin('advertisers', 'campaigns.advertiserId', 'advertisers.id')
		.select([
			'adGroups.id',
			'adGroups.name',
			'adGroups.bidPriceCpm',
			'adGroups.categories',
			'adGroups.frequencyCapUnit',
			'adGroups.frequencyCapWindow',
			'adGroups.frequencyCapImpressions',
			'campaigns.id as campaignId',
			'campaigns.name as campaignName',
			'campaigns.status as campaignStatus',
		])
		.where('advertisers.organizationId', '==', orgId)
		.limit(100)
		.execute()

	return { adGroups }
}

export default function AdGroupsIndexPage() {
	const { adGroups } = useLoaderData<typeof loader>()
	return (
		<Card>
			<CardHeader>
				<CardTitle>広告グループ</CardTitle>
				<CardDescription />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>名称</TableHead>
							<TableHead>対象メディアカテゴリ</TableHead>
							<TableHead>FQキャップ</TableHead>
							<TableHead>入札価格 CPM</TableHead>
							<TableHead>キャンペーン</TableHead>
							<TableHead>ステータス</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{adGroups.map((adGroup) => (
							<TableRow key={adGroup.id}>
								<TableCell>{adGroup.id}</TableCell>
								<TableCell>{adGroup.name}</TableCell>
								<TableCell>{adGroup.categories ?? 'すべて'}</TableCell>
								<TableCell>
									{adGroup.frequencyCapUnit} / {adGroup.frequencyCapWindow} /{' '}
									{adGroup.frequencyCapImpressions}
								</TableCell>
								<TableCell>
									{adGroup.bidPriceCpm.toLocaleString()}
									<small>円</small>
								</TableCell>
								<TableCell>{adGroup.campaignName}</TableCell>
								<TableCell>
									<Badge
										variant={
											adGroup.campaignStatus === 'ACTIVE'
												? 'default'
												: 'outline'
										}
									>
										{adGroup.campaignStatus}
									</Badge>
								</TableCell>{' '}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
