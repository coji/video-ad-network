import type { DB, Kysely } from '@video-ad-network/db'
import type { FrequencyData } from './frequency-cap'
import { canSelectAd } from './frequency-cap'

export interface AdCandidate {
  id: string
  type: string
  url: string
  duration: number
  width: number | null
  height: number | null
  mimeType: string | null
  description: string | null
  bidPriceCpm: string // Kysely returns decimal as string
  frequencyCapImpressions: number
  frequencyCapWindow: number
  frequencyCapUnit: string
  advertiserId: string
  adGroupId: string
  campaignId: string
}

async function fetchAds(
  db: Kysely<DB>, // Added db parameter
  _categories: string[] | null,
  mediaType: string,
  companionSizes: { width: number; height: number }[],
): Promise<AdCandidate[]> {
  // Fetch ads matching category, media type, and companion banner sizes
  return await db
    .selectFrom('ads')
    .innerJoin('companionBanners', 'companionBanners.adId', 'ads.id')
    .innerJoin('adGroups', 'adGroups.id', 'ads.adGroupId')
    .innerJoin('campaigns', 'campaigns.id', 'adGroups.campaignId')
    .innerJoin('advertisers', 'advertisers.id', 'campaigns.advertiserId')
    .where('campaigns.status', '=', 'ACTIVE')
    .where('ads.type', '=', mediaType)
    .where(
      'companionBanners.width',
      'in',
      companionSizes.map((s) => s.width),
    )
    .select([
      'ads.id',
      'ads.type',
      'ads.url',
      'ads.duration',
      'ads.width',
      'ads.height',
      'ads.mimeType',
      'ads.description',
      'adGroups.bidPriceCpm',
      'adGroups.frequencyCapImpressions',
      'adGroups.frequencyCapWindow',
      'adGroups.frequencyCapUnit',
      'advertisers.id as advertiserId',
      'campaigns.id as campaignId',
      'adGroups.id as adGroupId',
    ])
    .orderBy('adGroups.bidPriceCpm', 'desc')
    .execute()
}

export async function selectAd(
  db: Kysely<DB>,
  currentTime: number,
  frequencyData: FrequencyData,
  categories: string[] | null,
  mediaType: string,
  companionSizes: { width: number; height: number }[],
): Promise<AdCandidate | null> {
  const allAds = await fetchAds(db, categories, mediaType, companionSizes)

  // Filter out ads that have reached their frequency cap
  const selectableAds = allAds.filter((ad) => {
    return canSelectAd(
      frequencyData[ad.adGroupId],
      ad.frequencyCapImpressions,
      ad.frequencyCapWindow,
      ad.frequencyCapUnit,
      currentTime,
    )
  })

  // Select a random ad from the list of selectable ads
  if (selectableAds.length > 0) {
    return selectableAds[Math.floor(Math.random() * selectableAds.length)]
  }

  // If no ads are selectable, return null
  return null
}
