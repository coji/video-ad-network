import type { AdState } from './types'
import { handleClick } from './click'

export function createMediaElement(state: AdState): AdState {
	if (!state.vastData) return state

	const mediaElement =
		state.vastData.adType === 'video'
			? document.createElement('video')
			: document.createElement('audio')

	mediaElement.src = state.vastData.mediaUrl
	mediaElement.style.width = '100%'
	mediaElement.style.height = '100%'
	mediaElement.addEventListener('click', () => handleClick(state))
	state.config.containerElement.appendChild(mediaElement)

	return { ...state, mediaElement }
}
