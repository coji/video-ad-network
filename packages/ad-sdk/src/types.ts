export interface AdConfig {
  adSlotId: string
  mediaId: string
  containerElement: HTMLElement
  companionContainer?: HTMLElement
}

export type AdType = 'video' | 'audio'

export interface VastResponse {
  adType: AdType
  mediaUrl: string
  duration: number
  clickThroughUrl: string
  trackingEvents: {
    impression: string[]
    start: string[]
    firstQuartile: string[]
    midpoint: string[]
    thirdQuartile: string[]
    complete: string[]
  }
  companionAds?: CompanionAd[]
}

export interface CompanionAd {
  width: number
  height: number
  imageUrl: string
  clickThroughUrl: string
}

export interface AdState {
  config: AdConfig
  vastData: VastResponse | null
  mediaElement: HTMLVideoElement | HTMLAudioElement | null
  companionElement: HTMLImageElement | null
}
