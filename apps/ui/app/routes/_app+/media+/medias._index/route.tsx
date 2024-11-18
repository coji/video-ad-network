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
	HStack,
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
	const medias = await db
		.selectFrom('medias')
		.innerJoin('adSlots', 'medias.id', 'adSlots.mediaId')
		.select([
			'medias.id',
			'medias.name',
			'medias.categories',
			(eb) => eb.fn('count', [eb.ref('adSlots.id')]).as('adSlotCount'),
		])
		.where('medias.organizationId', '==', orgId)
		.groupBy('medias.id')
		.limit(100)
		.execute()

	return { medias }
}

export default function MediasIndexPage() {
	const { medias } = useLoaderData<typeof loader>()
	return (
		<Card>
			<CardHeader>
				<CardTitle>メディア</CardTitle>
				<CardDescription />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>名称</TableHead>
							<TableHead>カテゴリ</TableHead>
							<TableHead>広告枠数</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{medias.map((media) => (
							<TableRow key={media.id}>
								<TableCell>{media.id}</TableCell>
								<TableCell>{media.name}</TableCell>
								<TableCell>
									<HStack>
										{(media?.categories as unknown as string[] | null)?.map(
											(category) => {
												return (
													<Badge key={category} variant="outline">
														{category}
													</Badge>
												)
											},
										)}
									</HStack>
								</TableCell>
								<TableCell>
									{media.adSlotCount}
									<small>枠</small>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
