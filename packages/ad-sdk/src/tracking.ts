import type { AdState } from './types'

export function setupTracking(state: AdState): AdState {
	if (!state.vastData || !state.mediaElement) return state

	const { trackingEvents } = state.vastData

	// トラッキングイベントの送信フラグを初期化
	const trackingEventsSent = {
		start: false,
		firstQuartile: false,
		midpoint: false,
		thirdQuartile: false,
		complete: false,
	}

	sendTrackingEvent(trackingEvents.impression)

	state.mediaElement.addEventListener('timeupdate', () => {
		if (!state.vastData || !state.mediaElement) return
		const progress = state.mediaElement.currentTime / state.vastData.duration

		if (progress >= 0 && !trackingEventsSent.start) {
			sendTrackingEvent(trackingEvents.start)
			trackingEventsSent.start = true
		}
		if (progress >= 0.25 && !trackingEventsSent.firstQuartile) {
			sendTrackingEvent(trackingEvents.firstQuartile)
			trackingEventsSent.firstQuartile = true
		}
		if (progress >= 0.5 && !trackingEventsSent.midpoint) {
			sendTrackingEvent(trackingEvents.midpoint)
			trackingEventsSent.midpoint = true
		}
		if (progress >= 0.75 && !trackingEventsSent.thirdQuartile) {
			sendTrackingEvent(trackingEvents.thirdQuartile)
			trackingEventsSent.thirdQuartile = true
		}
	})

	state.mediaElement.addEventListener('ended', () => {
		if (!trackingEventsSent.complete) {
			sendTrackingEvent(trackingEvents.complete)
			trackingEventsSent.complete = true
		}
	})

	return state
}

function sendTrackingEvent(urls: string[]): void {
	for (const url of urls) {
		fetch(url, { method: 'GET', mode: 'no-cors' })
	}
}
