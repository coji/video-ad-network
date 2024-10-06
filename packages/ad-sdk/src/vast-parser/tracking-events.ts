import type { VastResponse } from '../types'
import type { InLine, Tracking, TrackingEvents } from './vast-types'

export function extractTrackingEvents(
	impressions: InLine['Impression'],
	trackingEventsElement?: TrackingEvents,
): VastResponse['trackingEvents'] {
	const trackingEvents: VastResponse['trackingEvents'] = {
		impression: [],
		start: [],
		firstQuartile: [],
		midpoint: [],
		thirdQuartile: [],
		complete: [],
	}

	// Process Impressions
	if (impressions) {
		trackingEvents.impression = Array.isArray(impressions)
			? impressions.map((imp) => imp.trim())
			: [impressions.trim()]
	}

	if (!trackingEventsElement?.Tracking) return trackingEvents

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
			case 'progress':
				handleProgressEvent(tracking, url, trackingEvents)
				break
			default:
				console.warn(`Unhandled tracking event: ${event}`)
				break
		}
	}

	return trackingEvents
}

function handleProgressEvent(
	tracking: Tracking,
	url: string,
	trackingEvents: VastResponse['trackingEvents'],
) {
	const offset = tracking['@_offset']
	switch (offset) {
		case '0%':
			trackingEvents.start.push(url)
			break
		case '25%':
			trackingEvents.firstQuartile.push(url)
			break
		case '50%':
			trackingEvents.midpoint.push(url)
			break
		case '75%':
			trackingEvents.thirdQuartile.push(url)
			break
		default:
			console.warn(`Unhandled progress offset: ${offset}`)
			break
	}
}
