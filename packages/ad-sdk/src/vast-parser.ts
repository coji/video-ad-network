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
		ClickThrough: { '#text': string }
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

// CompanionAds 要素の型定義
interface CompanionAds {
	Companion:
		| Array<{
				'@_width': string
				'@_height': string
				StaticResource: { '#text': string }
				CompanionClickThrough: { '#text': string }
		  }>
		| {
				'@_width': string
				'@_height': string
				StaticResource: { '#text': string }
				CompanionClickThrough: { '#text': string }
		  }
}

type ParsedXML = {
	VAST: {
		Ad: {
			InLine: {
				Impression?: string | string[]
				Creatives: {
					Creative:
						| {
								Linear?: Linear
								CompanionAds?: CompanionAds
						  }
						| Array<{
								Linear?: Linear
								CompanionAds?: CompanionAds
						  }>
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

	const inline = ad.InLine
	if (!inline) {
		throw new Error('No InLine element found in Ad')
	}

	const creatives = inline.Creatives?.Creative
	if (!creatives) {
		throw new Error('No Creatives found in InLine')
	}

	let linear: Linear | undefined
	let companionAds: CompanionAds | undefined

	if (Array.isArray(creatives)) {
		linear = creatives.find((c) => c.Linear)?.Linear
		companionAds = creatives.find((c) => c.CompanionAds)?.CompanionAds
	} else {
		linear = creatives.Linear
		companionAds = creatives.CompanionAds
	}

	if (!linear) {
		throw new Error('No Linear element found in Creative')
	}

	const adType: AdType = linear.MediaFiles ? 'video' : 'audio'

	const mediaFile = linear.MediaFiles?.MediaFile
	let mediaUrl = ''
	if (mediaFile) {
		mediaUrl = Array.isArray(mediaFile)
			? mediaFile[0]['#text'].trim()
			: mediaFile['#text'].trim()
	}

	const clickThrough = linear.VideoClicks?.ClickThrough
	let clickThroughUrl = ''
	if (typeof clickThrough === 'string') {
		clickThroughUrl = (clickThrough as string).trim()
	} else if (typeof clickThrough === 'object' && clickThrough['#text']) {
		clickThroughUrl = clickThrough['#text'].trim()
	} else {
		console.warn(
			'VideoClicks is missing or has unexpected structure:',
			linear.VideoClicks,
		)
	}

	const trackingEvents: VastResponse['trackingEvents'] = {
		impression: [],
		start: [],
		firstQuartile: [],
		midpoint: [],
		thirdQuartile: [],
		complete: [],
	}

	if (inline.Impression) {
		trackingEvents.impression = Array.isArray(inline.Impression)
			? inline.Impression.map((imp) => imp.trim())
			: [inline.Impression.trim()]
	}

	if (linear.TrackingEvents?.Tracking) {
		const trackings = Array.isArray(linear.TrackingEvents.Tracking)
			? linear.TrackingEvents.Tracking
			: [linear.TrackingEvents.Tracking]

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
					// 'progress' イベントの offset 属性を確認
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

	const parsedCompanionAds: CompanionAd[] = []
	if (companionAds?.Companion) {
		const companions = Array.isArray(companionAds.Companion)
			? companionAds.Companion
			: [companionAds.Companion]

		for (const companion of companions) {
			let clickThroughUrl = ''
			if (typeof companion.CompanionClickThrough === 'string') {
				clickThroughUrl = (companion.CompanionClickThrough as string).trim()
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
		duration: parseDuration(linear.Duration),
		clickThroughUrl,
		trackingEvents,
		companionAds:
			parsedCompanionAds.length > 0 ? parsedCompanionAds : undefined,
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
