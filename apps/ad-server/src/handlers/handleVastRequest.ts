import type { Context } from 'hono'
import { getDB } from '~/services/db'
import { selectAd } from '~/functions/ad-selection'
import { getAdSlot } from '~/functions/get-ad-slot'
import {
	validateVastRequest,
	getFrequencyData,
	updateFrequencyData,
	generateTrackers,
	generateVastXml,
} from '~/functions/vast-utils'
import { getCompanionBanners } from '~/functions/get-companion-banners'

export async function handleVastRequest(c: Context) {
	const { mediaId, adSlotId } = validateVastRequest(c)
	if (!mediaId || !adSlotId) {
		return c.text('Missing required parameters', 400)
	}

	const db = getDB(c.env.DB)
	const frequencyData = getFrequencyData(c)
	const now = Date.now()

	const adSlot = await getAdSlot(db, mediaId, adSlotId)
	if (!adSlot) {
		return c.notFound()
	}

	const ad = await selectAd(
		db,
		now,
		frequencyData,
		adSlot.categories,
		adSlot.mediaType,
		adSlot.companionSizes,
	)
	if (!ad) {
		return c.notFound()
	}

	const companionBanners = await getCompanionBanners(db, ad.id)
	updateFrequencyData(c, frequencyData, ad.id, now)

	const impressionId = crypto.randomUUID()
	const adServingId = crypto.randomUUID()
	const trackers = generateTrackers(c, ad.id, mediaId, adSlotId, impressionId)
	const vastXml = generateVastXml(ad, companionBanners, adServingId, trackers)

	return new Response(vastXml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml',
		},
	})
}
