import { XMLParser } from 'fast-xml-parser'
import type { VastResponse, AdType, CompanionAd } from './types'

interface Linear {
	Duration: string | number
	MediaFiles?: {
		MediaFile:
			| {
					'#text': string
			  }
			| Array<{ '#text': string }>
	}
	VideoClicks?: {
		ClickThrough: { '#text': string } | string
	}
	TrackingEvents?: {
		Tracking:
			| Array<{
					'@_event': string
					'@_offset'?: string
					'#text': string
			  }>
			| {
					'@_event': string
					'@_offset'?: string
					'#text': string
			  }
	}
}

interface NonLinearAds {
	NonLinear: {
		StaticResource?: { '#text': string }
		NonLinearClickThrough?: { '#text': string } | string
	}
	TrackingEvents?: {
		Tracking:
			| Array<{
					'@_event': string
					'@_offset'?: string
					'#text': string
			  }>
			| {
					'@_event': string
					'@_offset'?: string
					'#text': string
			  }
	}
	Duration: string | number
	MediaFiles?: {
		MediaFile:
			| {
					'#text': string
			  }
			| Array<{ '#text': string }>
	}
	VideoClicks?: {
		ClickThrough: { '#text': string } | string
	}
}

interface CompanionAds {
	Companion:
		| Array<{
				'@_width': string
				'@_height': string
				StaticResource: { '#text': string }
				CompanionClickThrough: { '#text': string } | string
		  }>
		| {
				'@_width': string
				'@_height': string
				StaticResource: { '#text': string }
				CompanionClickThrough: { '#text': string } | string
		  }
}

interface Creative {
	'@_id'?: string
	Linear?: Linear
	NonLinearAds?: NonLinearAds
	CompanionAds?: CompanionAds
}

type ParsedXML = {
	VAST: {
		Ad: {
			'@_id': string
			'@_adType'?: string
			InLine: {
				Impression?: string | string[]
				Creatives: {
					Creative: Creative | Creative[]
				}
			}
		}
	}
}

export function parseVastXml(vastXml: string): VastResponse {
	const parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: '@_',
	})
	const result = parser.parse(vastXml) as ParsedXML

	const ad = result.VAST?.Ad
	if (!ad) {
		throw new Error('No Ad found in VAST XML')
	}

	const adType: AdType = (ad['@_adType'] as AdType) || 'unknown'

	const inline = ad.InLine
	if (!inline) {
		throw new Error('No InLine element found in Ad')
	}

	const creatives = inline.Creatives?.Creative
	if (!creatives) {
		throw new Error('No Creatives found in InLine')
	}

	let linear: Linear | undefined
	let nonLinearAds: NonLinearAds | undefined
	let companionAds: CompanionAds | undefined

	if (Array.isArray(creatives)) {
		const creativeWithLinear = creatives.find((c) => c.Linear)
		if (creativeWithLinear) {
			linear = creativeWithLinear.Linear
		}

		const creativeWithNonLinear = creatives.find((c) => c.NonLinearAds)
		if (creativeWithNonLinear) {
			nonLinearAds = creativeWithNonLinear.NonLinearAds
		}

		companionAds = creatives.find((c) => c.CompanionAds)?.CompanionAds
	} else {
		linear = creatives.Linear
		nonLinearAds = creatives.NonLinearAds
		companionAds = creatives.CompanionAds
	}

	// メディアファイルの取得
	let mediaUrl = ''
	let duration = 0
	let clickThroughUrl = ''
	const trackingEvents: VastResponse['trackingEvents'] = {
		impression: [],
		start: [],
		firstQuartile: [],
		midpoint: [],
		thirdQuartile: [],
		complete: [],
	}

	// Impressionの取得
	if (inline.Impression) {
		trackingEvents.impression = Array.isArray(inline.Impression)
			? inline.Impression.map((imp) => imp.trim())
			: [inline.Impression.trim()]
	}

	if (linear) {
		// Linearの場合
		mediaUrl = extractMediaUrl(linear.MediaFiles)
		duration = parseDuration(linear.Duration)
		clickThroughUrl = extractClickThrough(linear.VideoClicks)
		extractTrackingEvents(linear.TrackingEvents, trackingEvents)
	} else if (nonLinearAds) {
		// NonLinearAdsの場合
		mediaUrl = extractMediaUrl(nonLinearAds.MediaFiles)
		duration = parseDuration(nonLinearAds.Duration)
		clickThroughUrl = extractClickThrough(nonLinearAds.VideoClicks)
		extractTrackingEvents(nonLinearAds.TrackingEvents, trackingEvents)
	} else {
		throw new Error('No Linear or NonLinearAds element found in Creative')
	}

	// CompanionAdsのパース
	const parsedCompanionAds: CompanionAd[] = []
	if (companionAds?.Companion) {
		const companions = Array.isArray(companionAds.Companion)
			? companionAds.Companion
			: [companionAds.Companion]

		for (const companion of companions) {
			let clickThroughUrl = ''
			if (typeof companion.CompanionClickThrough === 'string') {
				clickThroughUrl = companion.CompanionClickThrough.trim()
			} else if (
				typeof companion.CompanionClickThrough === 'object' &&
				companion.CompanionClickThrough['#text']
			) {
				clickThroughUrl = companion.CompanionClickThrough['#text'].trim()
			} else {
				console.warn(
					'CompanionClickThrough is missing or has unexpected structure:',
					companion.CompanionClickThrough,
				)
			}

			parsedCompanionAds.push({
				width: Number.parseInt(companion['@_width']),
				height: Number.parseInt(companion['@_height']),
				imageUrl: companion.StaticResource['#text'].trim(),
				clickThroughUrl,
			})
		}
	}

	return {
		adType,
		mediaUrl,
		duration,
		clickThroughUrl,
		trackingEvents,
		companionAds:
			parsedCompanionAds.length > 0 ? parsedCompanionAds : undefined,
	}
}

function extractMediaUrl(
	mediaFiles?:
		| {
				MediaFile:
					| {
							'#text': string
					  }
					| Array<{ '#text': string }>
		  }
		| undefined,
): string {
	if (!mediaFiles) return ''
	const mediaFile = mediaFiles.MediaFile
	if (mediaFile) {
		return Array.isArray(mediaFile)
			? mediaFile[0]['#text'].trim()
			: mediaFile['#text'].trim()
	}
	return ''
}

function extractClickThrough(
	videoClicks?:
		| {
				ClickThrough: { '#text': string } | string
		  }
		| undefined,
): string {
	if (!videoClicks || !videoClicks.ClickThrough) return ''
	const clickThrough = videoClicks.ClickThrough
	if (typeof clickThrough === 'string') {
		return clickThrough.trim()
	}
	if (typeof clickThrough === 'object' && clickThrough['#text']) {
		return clickThrough['#text'].trim()
	}
	console.warn(
		'VideoClicks is missing or has unexpected structure:',
		videoClicks,
	)
	return ''
}

function extractTrackingEvents(
	trackingEventsElement?:
		| {
				Tracking:
					| Array<{
							'@_event': string
							'@_offset'?: string
							'#text': string
					  }>
					| {
							'@_event': string
							'@_offset'?: string
							'#text': string
					  }
		  }
		| undefined,
	trackingEvents: VastResponse['trackingEvents'] = {
		impression: [],
		start: [],
		firstQuartile: [],
		midpoint: [],
		thirdQuartile: [],
		complete: [],
	},
) {
	if (!trackingEventsElement?.Tracking) return
	const trackings = Array.isArray(trackingEventsElement.Tracking)
		? trackingEventsElement.Tracking
		: [trackingEventsElement.Tracking]

	for (const tracking of trackings) {
		const event = tracking['@_event'].toLowerCase()
		const url = tracking['#text'].trim()

		switch (event) {
			case 'start':
				trackingEvents.start.push(url)
				break
			case 'firstquartile':
				trackingEvents.firstQuartile.push(url)
				break
			case 'midpoint':
				trackingEvents.midpoint.push(url)
				break
			case 'thirdquartile':
				trackingEvents.thirdQuartile.push(url)
				break
			case 'complete':
				trackingEvents.complete.push(url)
				break
			case 'progress': {
				const offset = tracking['@_offset']
				if (offset === '0%') {
					trackingEvents.start.push(url)
				} else if (offset === '25%') {
					trackingEvents.firstQuartile.push(url)
				} else if (offset === '50%') {
					trackingEvents.midpoint.push(url)
				} else if (offset === '75%') {
					trackingEvents.thirdQuartile.push(url)
				}
				break
			}
		}
	}
}

function parseDuration(duration: string | number): number {
	if (typeof duration === 'number') {
		return duration
	}

	if (typeof duration === 'string') {
		if (duration.includes(':')) {
			// HH:MM:SS format
			const [hours, minutes, seconds] = duration.split(':').map(Number)
			return hours * 3600 + minutes * 60 + seconds
		}
		// Try parsing as a number
		const parsedDuration = Number.parseFloat(duration)
		if (!Number.isNaN(parsedDuration)) {
			return parsedDuration
		}
	}

	console.warn(`Invalid duration format: ${duration}. Returning 0.`)
	return 0
}
