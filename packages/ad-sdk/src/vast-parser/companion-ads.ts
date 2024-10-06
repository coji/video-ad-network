import type { CompanionAd } from '../types'
import type { CompanionAds } from './vast-types'

export function parseCompanionAds(companionAds?: CompanionAds): CompanionAd[] {
	const parsedCompanionAds: CompanionAd[] = []
	if (!companionAds?.Companion) return parsedCompanionAds

	const companions = Array.isArray(companionAds.Companion)
		? companionAds.Companion
		: [companionAds.Companion]

	for (const companion of companions) {
		const width = Number.parseInt(companion['@_width'], 10)
		const height = Number.parseInt(companion['@_height'], 10)
		const imageUrl = companion.StaticResource['#text'].trim()
		const clickThroughUrl = extractCompanionClickThrough(
			companion.CompanionClickThrough,
		)

		parsedCompanionAds.push({
			width,
			height,
			imageUrl,
			clickThroughUrl,
		})
	}

	return parsedCompanionAds
}

function extractCompanionClickThrough(
	clickThrough?: { '#text': string } | string,
): string {
	if (!clickThrough) return ''
	if (typeof clickThrough === 'string') {
		return clickThrough.trim()
	}
	if (clickThrough['#text']) {
		return clickThrough['#text'].trim()
	}
	console.warn('CompanionClickThrough has unexpected structure:', clickThrough)
	return ''
}
