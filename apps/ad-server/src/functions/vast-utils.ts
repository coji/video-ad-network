import type { Context } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'
import {
	parseFrequencyData,
	stringifyFrequencyData,
	FREQUENCY_COOKIE_OPTIONS,
	type FrequencyData,
} from './frequency-cap'
import type { CompanionBanner } from './get-companion-banners'
import type { AdCandidate } from './ad-selection'

// AdSystemの定数を定義
const AD_SYSTEM_NAME = 'Custom Ad Network'
const AD_SYSTEM_VERSION = '1.0'

interface Trackers {
	click: string
	companionClick: (companionId: string) => string
	impression: string
	start: string
	firstQuartile: string
	midpoint: string
	thirdQuartile: string
	complete: string
	error: string
}

export function validateVastRequest(c: Context) {
	const mediaId = c.req.query('media_id')
	const adSlotId = c.req.query('ad_slot_id')
	return { mediaId, adSlotId }
}

export function getFrequencyData(c: Context) {
	const frequencyDataCookie = getCookie(c, 'ad_frequency')
	return parseFrequencyData(frequencyDataCookie)
}

export function updateFrequencyData(
	c: Context,
	frequencyData: FrequencyData,
	adId: string,
	now: number,
) {
	frequencyData[adId] = frequencyData[adId] || { count: 0, lastSeen: now }
	frequencyData[adId].count += 1
	frequencyData[adId].lastSeen = now

	setCookie(
		c,
		'ad_frequency',
		stringifyFrequencyData(frequencyData),
		FREQUENCY_COOKIE_OPTIONS,
	)
}

const buildUrl = (
	origin: string,
	path: string,
	params: Record<string, string>,
) => {
	const url = new URL(path, origin)
	for (const [key, value] of Object.entries(params)) {
		url.searchParams.append(key, value)
	}
	return url.toString()
}

export function generateTrackers(
	c: Context,
	params: {
		media_id: string
		ad_slot_id: string
		advertiser_id: string
		campaign_id: string
		ad_group_id: string
		ad_id: string
		impression_id: string
	},
): Trackers {
	const origin = new URL(c.req.url).origin
	const trackerOrigin = c.env.TRACKER_ORIGIN

	return {
		click: buildUrl(origin, '/v1/click', {
			...params,
			is_companion: 'false',
		}),
		companionClick: (companion_id: string) =>
			buildUrl(origin, '/v1/click', {
				...params,
				is_companion: 'true',
				companion_id,
			}),
		impression: buildUrl(trackerOrigin, '/v1/impression', {
			...params,
		}),
		start: buildUrl(trackerOrigin, '/v1/progress', {
			progress: '0',
			...params,
		}),
		firstQuartile: buildUrl(trackerOrigin, '/v1/progress', {
			progress: '25',
			...params,
		}),
		midpoint: buildUrl(trackerOrigin, '/v1/progress', {
			progress: '50',
			...params,
		}),
		thirdQuartile: buildUrl(trackerOrigin, '/v1/progress', {
			progress: '75',
			...params,
		}),
		complete: buildUrl(trackerOrigin, '/v1/progress', {
			progress: '100',
			...params,
		}),
		error: buildUrl(trackerOrigin, '/v1/error', {
			...params,
		}),
	}
}

export function generateVastXml(
	ad: AdCandidate,
	companionBanners: CompanionBanner[],
	adServingId: string,
	trackers: Trackers,
) {
	const vastXml = `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="4.1" xmlns="http://www.iab.com/VAST">
  <Ad id="${ad.id}" adType="${ad.type}">
    <InLine>
      <AdSystem version="${AD_SYSTEM_VERSION}">${AD_SYSTEM_NAME}</AdSystem>
      <Error><![CDATA[${trackers.error}]]></Error>
      <AdServingId>${adServingId}</AdServingId>
      <AdTitle>${ad.description ?? `Ad ${ad.id}`}</AdTitle>
      <Impression><![CDATA[${trackers.impression}]]></Impression>
      <Creatives>
        <Creative id="${ad.id}">
          <Linear>
            <Duration>${ad.duration}</Duration>
            <MediaFiles>
              <MediaFile delivery="progressive" type="${
								ad.mimeType ?? 'application/octet-stream'
							}" width="${ad.width}" height="${ad.height}">
                <![CDATA[${ad.url}]]>
              </MediaFile>
            </MediaFiles>
            <VideoClicks>
              <ClickThrough><![CDATA[${trackers.click}]]></ClickThrough>
            </VideoClicks>
            <TrackingEvents>
              <Tracking event="start"><![CDATA[${trackers.start}]]></Tracking>
              <Tracking event="firstQuartile"><![CDATA[${trackers.firstQuartile}]]></Tracking>
              <Tracking event="midpoint"><![CDATA[${trackers.midpoint}]]></Tracking>
              <Tracking event="thirdQuartile"><![CDATA[${trackers.thirdQuartile}]]></Tracking>
              <Tracking event="complete"><![CDATA[${trackers.complete}]]></Tracking>
            </TrackingEvents>
          </Linear>
        </Creative>
        ${companionBanners
					.map(
						(companion) => `
        <Creative>
          <CompanionAds>
            <Companion width="${companion.width}" height="${companion.height}">
              <StaticResource creativeType="${
								companion.mimeType ?? 'image/jpeg'
							}">
                <![CDATA[${companion.url}]]>
              </StaticResource>
              <CompanionClickThrough>
                <![CDATA[${trackers.companionClick(companion.id)}]]>
              </CompanionClickThrough>
            </Companion>
          </CompanionAds>
        </Creative>
        `,
					)
					.join('')}
      </Creatives>
    </InLine>
  </Ad>
</VAST>`

	return vastXml
}
