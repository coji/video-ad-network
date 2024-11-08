import type { AdConfig, VastResponse } from './types'
import { parseVastXml } from './vast-parser'
import { API_BASE_URL } from './config'

export async function fetchVastXml(config: AdConfig): Promise<VastResponse> {
	const response = await fetch(
		`${API_BASE_URL}/v1/vast?adSlotId=${config.adSlotId}&mediaId=${config.mediaId}`,
	)
	if (!response.ok) {
		throw new Error('Failed to fetch VAST XML')
	}
	const vastXml = await response.text()
	return parseVastXml(vastXml)
}
