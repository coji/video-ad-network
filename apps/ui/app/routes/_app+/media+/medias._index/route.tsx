import { getDB } from '@video-ad-network/db'
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
import type { Route } from './+types/route'

export const loader = async (args: Route.LoaderArgs) => {
  const user = await requireOrgUser(args)
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
    .where('medias.organizationId', '==', user.orgId)
    .groupBy('medias.id')
    .limit(100)
    .execute()

  return { medias }
}

export default function MediasIndexPage({
  loaderData: { medias },
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
