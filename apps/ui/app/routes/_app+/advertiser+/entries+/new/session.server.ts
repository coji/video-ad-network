import { createCookie, createCookieSessionStorage } from 'react-router'
import type { CampaignFormData } from './schema'
interface DraftDataSession {
  draftData: {
    campaign: CampaignFormData | null
    adgroup: {
      name: string
      bidPriceCpm: number
    } | null
    ad: {
      type: string
      url: string
      duration: number
    } | null
  }
}

export const sessionStorage = createCookieSessionStorage<DraftDataSession>({
  cookie: createCookie('draftData', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    secrets: ['hogehoge'],
  }),
})
