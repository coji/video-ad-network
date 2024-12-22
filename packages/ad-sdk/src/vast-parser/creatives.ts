import type { CompanionAds, Creative, Linear } from './vast-types'

export function extractCreatives(creative: Creative | Creative[]) {
  let linear: Linear | undefined
  let companionAds: CompanionAds | undefined

  if (Array.isArray(creative)) {
    for (const c of creative) {
      if (c.Linear && !linear) {
        linear = c.Linear
      }
      if (c.CompanionAds && !companionAds) {
        companionAds = c.CompanionAds
      }
      if (linear && companionAds) break
    }
  } else {
    linear = creative.Linear
    companionAds = creative.CompanionAds
  }

  return { linear, companionAds }
}
