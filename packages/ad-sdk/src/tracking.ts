import type { AdState } from './types'

export function setupTracking(state: AdState): AdState {
	if (!state.vastData || !state.mediaElement) return state

	const { trackingEvents } = state.vastData

	sendTrackingEvent(trackingEvents.impression)

	state.mediaElement.addEventListener('timeupdate', () => {
		if (!state.vastData || !state.mediaElement) return
		const progress = state.mediaElement.currentTime / state.vastData.duration
		if (progress <= 0) {
			sendTrackingEvent(trackingEvents.start)
		} else if (progress >= 0.25 && progress < 0.5) {
			sendTrackingEvent(trackingEvents.firstQuartile)
		} else if (progress >= 0.5 && progress < 0.75) {
			sendTrackingEvent(trackingEvents.midpoint)
		} else if (progress >= 0.75 && progress < 1) {
			sendTrackingEvent(trackingEvents.thirdQuartile)
		}
	})

	state.mediaElement.addEventListener('ended', () =>
		sendTrackingEvent(trackingEvents.complete),
	)

	return state
}

function sendTrackingEvent(url: string[]): void {
	for (const u of url) {
		fetch(u, { method: 'GET', mode: 'no-cors' })
	}
}
