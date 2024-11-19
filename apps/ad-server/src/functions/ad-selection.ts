import type { FrequencyData } from './frequency-cap'
import type { DB, Kysely } from '@video-ad-network/db'

export interface AdCandidate {
	id: string
	type: string
	url: string
	duration: number
	width: number | null
	height: number | null
	mimeType: string | null
	description: string | null
	bidPriceCpm: number
	frequencyCapImpressions: number
	frequencyCapWindow: number
	frequencyCapUnit: string
	advertiserId: string
	adGroupId: string
	campaignId: string
}

function getCapWindowStart(
	currentTime: number,
	window: number,
	unit: string,
): number {
	switch (unit) {
		case 'MINUTE':
			return currentTime - window * 60 * 1000
		case 'HOUR':
			return currentTime - window * 60 * 60 * 1000
		case 'DAY':
			return currentTime - window * 24 * 60 * 60 * 1000
		default:
			return currentTime - 24 * 60 * 60 * 1000
	}
}

async function fetchAds(
	db: Kysely<DB>, // Added db parameter
	categories: string[] | null,
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
		.where('ads.type', '==', mediaType)
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
		.where('campaigns.status', '==', 'ACTIVE')
		.orderBy('adGroups.bidPriceCpm', 'desc')
		.execute()
}

export async function selectAd(
	db: Kysely<DB>, // Added db parameter
	currentTime: number,
	frequencyData: FrequencyData,
	categories: string[] | null,
	mediaType: string,
	companionSizes: { width: number; height: number }[],
): Promise<AdCandidate | null> {
	const ads = await fetchAds(db, categories, mediaType, companionSizes)

	for (const ad of ads) {
		const adFrequency = frequencyData[ad.id]
		let canShow = false

		if (!adFrequency) {
			canShow = true
		} else {
			if (adFrequency.count < ad.frequencyCapImpressions) {
				canShow = true
			} else {
				const capWindowStart = getCapWindowStart(
					currentTime,
					ad.frequencyCapWindow,
					ad.frequencyCapUnit,
				)
				if (adFrequency.lastSeen < capWindowStart) {
					canShow = true
				}
			}
		}

		if (canShow) {
			if (adFrequency) {
				if (adFrequency.count < ad.frequencyCapImpressions) {
					frequencyData[ad.id].count += 1
				} else {
					frequencyData[ad.id] = { count: 1, lastSeen: currentTime }
				}
			} else {
				frequencyData[ad.id] = { count: 1, lastSeen: currentTime }
			}

			return ad
		}
	}

	return null
}
