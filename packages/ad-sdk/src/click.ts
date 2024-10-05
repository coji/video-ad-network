import type { AdState } from './types'

export function handleClick(state: AdState): void {
	if (state.vastData) {
		window.open(state.vastData.clickThroughUrl, '_blank')
	}
}
