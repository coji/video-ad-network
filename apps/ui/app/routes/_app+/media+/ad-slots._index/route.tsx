import { getAuth } from '@clerk/remix/ssr.server'
import { redirect, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { getDB, sql } from '@video-ad-network/db'
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
	const adSlots = await db
		.selectFrom('adSlots')
		.innerJoin('medias', 'medias.id', 'adSlots.mediaId')
		.innerJoin('companionSlots', 'adSlots.id', 'companionSlots.adSlotId')
		.select([
			'adSlots.id',
			'adSlots.name',
			'adSlots.type',
			'medias.id as mediaAId',
			'medias.name as mediaName',
			(eb) =>
				eb.fn('count', [eb.ref('companionSlots.id')]).as('companionSlotCount'),
			// サイズ
			() =>
				sql`GROUP_CONCAT("companion_slots"."width" || 'x' || "companion_slots"."height")`.as(
					'companionSlotSizes',
				),
		])
		.where('medias.organizationId', '==', orgId)
		.limit(100)
		.execute()

	return { adSlots }
}

export default function MediasIndexPage() {
	const { adSlots } = useLoaderData<typeof loader>()
	return (
		<Card>
			<CardHeader>
				<CardTitle>広告枠</CardTitle>
				<CardDescription />
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>名称</TableHead>
							<TableHead>タイプ</TableHead>
							<TableHead>コンパニオンバナースロット</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{adSlots.map((adSlot) => (
							<TableRow key={adSlot.id}>
								<TableCell>{adSlot.id}</TableCell>
								<TableCell>{adSlot.name}</TableCell>
								<TableCell>{adSlot.type}</TableCell>
								<TableCell>
									{adSlot.companionSlotCount}
									<small>枠</small> {adSlot.companionSlotSizes}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
