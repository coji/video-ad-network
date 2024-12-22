import type { AdState } from './types'

export function play(state: AdState): void {
  if (!state.vastData || !state.mediaElement) {
    throw new Error('Ad not loaded')
  }
  state.mediaElement.play()
}

export function pause(state: AdState): void {
  if (state.mediaElement) {
    state.mediaElement.pause()
  }
}

export function setVolume(state: AdState, volume: number): void {
  if (state.mediaElement) {
    state.mediaElement.volume = Math.max(0, Math.min(1, volume))
  }
}
