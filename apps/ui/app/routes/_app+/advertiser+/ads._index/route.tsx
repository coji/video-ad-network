import { getAuth } from '@clerk/remix/ssr.server'
import { type LoaderFunctionArgs, redirect } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { getDB, sql } from '@video-ad-network/db'
import {
	Badge,
	Popover,
	PopoverContent,
	PopoverTrigger,
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
	HStack,
	Button,
} from '~/components/ui'

export const loader = async (args: LoaderFunctionArgs) => {
	const { userId, orgId } = await getAuth(args)
	if (!userId || !orgId) {
		throw redirect('/login')
	}

	const db = getDB(args.context.cloudflare.env)
	const query = db
		.selectFrom('ads')
		.innerJoin('adGroups', 'ads.adGroupId', 'adGroups.id')
		.innerJoin('campaigns', 'adGroups.campaignId', 'campaigns.id')
		.innerJoin('advertisers', 'campaigns.advertiserId', 'advertisers.id')
		.innerJoin('companionBanners', 'ads.id', 'companionBanners.adId')
		.select([
			'ads.id',
			'ads.description',
			'ads.type',
			'ads.url',
			'ads.mimeType',
			'ads.duration',
			'ads.width',
			'ads.height',
			'adGroups.id as adGroupId',
			'adGroups.name as adGroupName',
			'campaigns.id as campaignId',
			'campaigns.name as campaignName',
			'campaigns.status as campaignStatus',
			(eb) =>
				eb
					.fn('count', [eb.ref('companionBanners.id')])
					.as('companionBannerCount'),
			// サイズ
			(eb) =>
				sql`GROUP_CONCAT("companion_banners"."width" || 'x' || "companion_banners"."height")`.as(
					'companionBannerSizes',
				),
		])
		.where('advertisers.organizationId', '==', orgId)
		.groupBy('ads.id')
		.limit(100)

	console.log(query.compile().sql)
	const ads = await query.execute()

	return { ads }
}

export default function AdsIndexPage() {
	const { ads } = useLoaderData<typeof loader>()
	return (
		<Card>
			<CardHeader>
				<CardTitle>広告</CardTitle>
				<CardDescription />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>概要</TableHead>
							<TableHead>クリエイティブ素材</TableHead>
							<TableHead>コンパニオンバナー</TableHead>
							<TableHead>広告グループ</TableHead>
							<TableHead>キャンペーン</TableHead>
							<TableHead>ステータス</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{ads.map((ad) => (
							<TableRow key={ad.id}>
								<TableCell>{ad.id}</TableCell>
								<TableCell>{ad.description}</TableCell>
								<TableCell>
									<HStack>
										<div>{ad.type}</div>
										<div>
											{ad.duration}
											<small>秒</small>
										</div>
										<Popover>
											<PopoverTrigger asChild>
												<Button type="button" variant="ghost" size="sm">
													詳細
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-80">
												<Table>
													<TableHeader>
														<TableRow>
															<TableHead>URL</TableHead>
															<TableHead>MIME</TableHead>
															<TableHead>サイズ</TableHead>
														</TableRow>
													</TableHeader>
													<TableBody>
														<TableRow>
															<TableCell>{ad.url}</TableCell>
															<TableCell>{ad.mimeType}</TableCell>
															<TableCell>
																{ad.width} x {ad.height}
															</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</PopoverContent>
										</Popover>
									</HStack>
								</TableCell>
								<TableCell>
									{ad.companionBannerCount}
									<small>件</small> {ad.companionBannerSizes}
								</TableCell>
								<TableCell>{ad.adGroupName}</TableCell>
								<TableCell>{ad.campaignName}</TableCell>
								<TableCell>
									<Badge
										variant={
											ad.campaignStatus === 'ACTIVE' ? 'default' : 'outline'
										}
									>
										{ad.campaignStatus}
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
