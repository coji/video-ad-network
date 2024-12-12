import { getDB, sql } from '@video-ad-network/db'
import { ExternalLinkIcon } from 'lucide-react'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
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
  const ads = await db
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
      () =>
        sql`GROUP_CONCAT("companion_banners"."width" || 'x' || "companion_banners"."height")`.as(
          'companionBannerSizes',
        ),
    ])
    .where('advertisers.organizationId', '==', user.orgId)
    .groupBy('ads.id')
    .limit(100)
    .execute()

  return { ads }
}

export default function AdsIndexPage({
  loaderData: { ads },
}: Route.ComponentProps) {
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
                      <PopoverContent className="w-96">
                        <Stack>
                          {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
                          <video src={ad.url} controls />

                          <a
                            className="text-xs"
                            href={ad.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            URL
                            <ExternalLinkIcon className="ml-2 inline h-4 w-4" />
                          </a>

                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>MIME</TableHead>
                                {ad.width && <TableHead>サイズ</TableHead>}
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>{ad.mimeType}</TableCell>
                                {ad.width && (
                                  <TableCell>
                                    {ad.width} x {ad.height}
                                  </TableCell>
                                )}
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Stack>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
