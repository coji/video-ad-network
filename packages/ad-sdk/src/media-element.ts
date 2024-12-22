import type { AdState } from './types'

export function createMediaElement(state: AdState): AdState {
  if (!state.vastData) return state

  const mediaElement =
    state.vastData.adType === 'video'
      ? document.createElement('video')
      : document.createElement('audio')

  mediaElement.src = state.vastData.mediaUrl
  mediaElement.style.width = '100%'
  mediaElement.style.height = '100%'
  mediaElement.setAttribute('playsinline', '') // Required for iOS inline playback
  mediaElement.addEventListener('click', () => handleClick(state))
  state.config.containerElement.appendChild(mediaElement)

  return { ...state, mediaElement }
}

export function handleClick(state: AdState): void {
  if (state.vastData) {
    window.open(state.vastData.clickThroughUrl, '_blank')
  }
}
