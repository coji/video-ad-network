import type { AdState } from './types'

export function createCompanionAd(state: AdState): AdState {
  if (!state.vastData?.companionAds?.[0] || !state.config.companionContainer)
    return state

  const companionAd = state.vastData.companionAds[0]
  const companionElement = document.createElement('img')
  companionElement.src = companionAd.imageUrl
  companionElement.width = companionAd.width
  companionElement.height = companionAd.height
  companionElement.style.objectFit = 'contain'
  companionElement.addEventListener('click', () => {
    window.open(companionAd.clickThroughUrl, '_blank')
  })
  state.config.companionContainer.appendChild(companionElement)

  return { ...state, companionElement }
}
