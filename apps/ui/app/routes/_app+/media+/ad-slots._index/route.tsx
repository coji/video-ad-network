import { getDB, sql } from '@video-ad-network/db'
import {
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
import { requireOrgUser } from '~/services/auth.server'
import type { Route } from './+types/route'

export const loader = async (args: Route.LoaderArgs) => {
  const user = await requireOrgUser(args)

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
    .where('medias.organizationId', '==', user.orgId)
    .limit(100)
    .execute()

  return { adSlots }
}

export default function MediasIndexPage({
  loaderData: { adSlots },
}: Route.ComponentProps) {
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
