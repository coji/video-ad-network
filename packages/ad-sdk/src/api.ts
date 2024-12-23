import { API_BASE_URL } from './config'
import type { AdConfig, VastResponse } from './types'
import { parseVastXml } from './vast-parser'

export async function fetchVastXml(config: AdConfig): Promise<VastResponse> {
  const response = await fetch(
    `${API_BASE_URL}/v1/vast?media_id=${config.mediaId}&ad_slot_id=${config.adSlotId}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch VAST XML')
  }
  const vastXml = await response.text()
  return parseVastXml(vastXml)
}
