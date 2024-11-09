import type { FrequencyData } from './frequency-cap'
import type { DB } from '../services/database-schema'
import type { Kysely, Selectable } from 'kysely'
import { getDB } from '../services/db' // Added import for getDB

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
) {
	// Updated return type
	const ads = await db
		.selectFrom('ads')
		.innerJoin('adGroups', 'adGroups.id', 'ads.adGroupId')
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
		])
		.orderBy('adGroups.bidPriceCpm', 'desc')
		.execute()

	return ads
}

export async function selectAd(
	db: Kysely<DB>, // Added db parameter
	currentTime: number,
	frequencyData: FrequencyData,
) {
	const ads = await fetchAds(db)
	console.log({ ads })

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
