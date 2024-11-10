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
	ad_id: string,
	media_id: string,
	ad_slot_id: string,
	impression_id: string,
): Trackers {
	const origin = new URL(c.req.url).origin
	const trackerOrigin = c.env.TRACKER_ORIGIN

	return {
		click: buildUrl(origin, '/v1/click', {
			ad_id,
			media_id,
			ad_slot_id,
			is_companion: 'false',
			impression_id,
		}),
		companionClick: (companion_id: string) =>
			buildUrl(origin, '/v1/click', {
				ad_id,
				media_id,
				ad_slot_id,
				is_companion: 'true',
				companion_id,
				impression_id,
			}),
		impression: buildUrl(trackerOrigin, '/impression', {
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		start: buildUrl(trackerOrigin, '/progress', {
			progress: '0',
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		firstQuartile: buildUrl(trackerOrigin, '/progress', {
			progress: '25',
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		midpoint: buildUrl(trackerOrigin, '/progress', {
			progress: '50',
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		thirdQuartile: buildUrl(trackerOrigin, '/progress', {
			progress: '75',
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		complete: buildUrl(trackerOrigin, '/progress', {
			progress: '100',
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
		}),
		error: buildUrl(trackerOrigin, '/error', {
			ad_id,
			media_id,
			ad_slot_id,
			impression_id,
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
