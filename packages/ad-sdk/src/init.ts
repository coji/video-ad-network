import { fetchVastXml } from './api'
import { createCompanionAd } from './companion-ads'
import { createMediaElement } from './media-element'
import { setupTracking } from './tracking'
import type { AdConfig, AdState } from './types'

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
