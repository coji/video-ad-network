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

  const trackingEventThresholds = [
    { event: 'start', threshold: 0 },
    { event: 'firstQuartile', threshold: 0.25 },
    { event: 'midpoint', threshold: 0.5 },
    { event: 'thirdQuartile', threshold: 0.75 },
  ] satisfies { event: keyof typeof trackingEventsSent; threshold: number }[]

  state.mediaElement.addEventListener('timeupdate', () => {
    if (!state.vastData || !state.mediaElement) return
    const progress = state.mediaElement.currentTime / state.vastData.duration

    for (const { event, threshold } of trackingEventThresholds) {
      if (progress >= threshold && !trackingEventsSent[event]) {
        sendTrackingEvent(trackingEvents[event])
        trackingEventsSent[event] = true
      }
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
    fetch(url, { method: 'GET', mode: 'no-cors', credentials: 'include' })
  }
}
