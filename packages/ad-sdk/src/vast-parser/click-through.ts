import type { VideoClicks } from './vast-types'

export function extractClickThrough(videoClicks?: VideoClicks): string {
  if (!videoClicks || !videoClicks.ClickThrough) return ''
  const clickThrough = videoClicks.ClickThrough

  if (typeof clickThrough === 'string') {
    return clickThrough.trim()
  }
  if (clickThrough['#text']) {
    return clickThrough['#text'].trim()
  }

  console.warn('VideoClicks has unexpected structure:', videoClicks)
  return ''
}
