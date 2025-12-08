import type { DB, getDB, Selectable } from '@video-ad-network/db'

export type CompanionBanner = Selectable<DB['companionBanners']>

export async function getCompanionBanners(
  db: ReturnType<typeof getDB>,
  adId: string,
  companionSizes: { width: number; height: number }[],
): Promise<CompanionBanner[]> {
  const banners = await db
    .selectFrom('companionBanners')
    .selectAll()
    .where('adId', '=', adId)
    .execute()

  // Filter banners to only include those matching the ad slot's companion sizes
  return banners.filter((banner) =>
    companionSizes.some(
      (size) => size.width === banner.width && size.height === banner.height,
    ),
  )
}
