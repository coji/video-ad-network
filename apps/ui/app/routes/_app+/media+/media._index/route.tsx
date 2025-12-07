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
import { requireOrgUser } from '~/services/auth.server'
import { db } from '~/services/db.server'
import type { Route } from './+types/route'

export const loader = async (args: Route.LoaderArgs) => {
  const user = await requireOrgUser(args)
  const kysely = db()
  const media = await kysely
    .selectFrom('media')
    .innerJoin('adSlots', 'media.id', 'adSlots.mediaId')
    .select([
      'media.id',
      'media.name',
      'media.categories',
      (eb) => eb.fn('count', [eb.ref('adSlots.id')]).as('adSlotCount'),
    ])
    .where('media.organizationId', '==', user.session.activeOrganizationId)
    .groupBy('media.id')
    .limit(100)
    .execute()

  return { media }
}

export default function MediaIndexPage({
  loaderData: { media },
}: Route.ComponentProps) {
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
            {media.map((medium) => (
              <TableRow key={medium.id}>
                <TableCell>{medium.id}</TableCell>
                <TableCell>{medium.name}</TableCell>
                <TableCell>
                  <HStack>
                    {(medium.categories as unknown as string[] | null)?.map(
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
                  {medium.adSlotCount}
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
