import type { AdConfig, AdState } from './types'
import { fetchVastXml } from './api'
import { setupTracking } from './tracking'
import { createMediaElement } from './media-element'
import { createCompanionAd } from './companion-ads'

export async function initializeAdSDK(config: AdConfig): Promise<AdState> {
	const initialState: AdState = {
		config,
		vastData: null,
		mediaElement: null,
		companionElement: null,
	}

	const vastData = await fetchVastXml(config)
	let state: AdState = { ...initialState, vastData }

	state = createMediaElement(state)
	state = createCompanionAd(state)
	state = setupTracking(state)

	return state
}
