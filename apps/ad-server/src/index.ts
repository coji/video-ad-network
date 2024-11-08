import { Hono } from 'hono'
import { setCookie, getCookie } from 'hono/cookie'
import type { D1Database } from '@cloudflare/workers-types'
import { cors } from 'hono/cors'
import { getDB } from './services/db'
import { getCompanionBanners } from './functions/get-companion-banners'
import { selectAd } from './functions/ad-selection'
import {
	FREQUENCY_COOKIE_OPTIONS,
	parseFrequencyData,
	stringifyFrequencyData,
} from './functions/frequency-cap'

interface Bindings {
	DB: D1Database
	TRACKER_ORIGIN: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(
	'/v1/vast',
	cors({
		origin: '*', // すべてのオリジンを許可
		allowMethods: ['GET', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	}),
)

// AdSystemの定数を定義
const AD_SYSTEM_NAME = 'Custom Ad Network'
const AD_SYSTEM_VERSION = '1.0'

app.get('/v1/vast', async (c) => {
	const adSlotId = c.req.query('adSlotId')
	const mediaId = c.req.query('mediaId')
	if (!adSlotId || !mediaId) {
		return c.text('Missing required parameters', 400)
	}

	const db = getDB(c.env.DB)
	const url = new URL(c.req.url)
	const origin = url.origin
	const trackerOrigin = c.env.TRACKER_ORIGIN // トラッカーのドメインに変更してください

	const frequencyDataCookie = getCookie(c, 'ad_frequency')
	const frequencyData = parseFrequencyData(frequencyDataCookie)

	const now = Date.now()
	// Changed the selectAd call to include currentTime
	const ad = await selectAd(db, now, frequencyData)
	if (!ad) {
		return c.notFound()
	}

	const companionBanners = await getCompanionBanners(db, ad.id)

	// フリークエンシーデータを更新
	frequencyData[ad.id] = frequencyData[ad.id] || { count: 0, lastSeen: now }
	frequencyData[ad.id].count += 1
	frequencyData[ad.id].lastSeen = now

	// 更新したクッキーをセット
	setCookie(
		c,
		'ad_frequency',
		stringifyFrequencyData(frequencyData),
		FREQUENCY_COOKIE_OPTIONS,
	)

	// インプレッションIDと広告配信IDを生成
	const impressionId = crypto.randomUUID()
	const adServingId = crypto.randomUUID()

	// トラッカーURLを生成
	const tracker = {
		click: `${origin}/click?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&isCompanion=false&impressionId=${impressionId}`,
		companionClick: (companionId: string) =>
			`${origin}/click?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&isCompanion=true&companionId=${companionId}&impressionId=${impressionId}`,
		impression: `${trackerOrigin}/impression?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		start: `${trackerOrigin}/progress?progress=0&adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		firstQuartile: `${trackerOrigin}/progress?progress=25?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		midpoint: `${trackerOrigin}/progress?progress=50?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		thirdQuartile: `${trackerOrigin}/progress?progress=75?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		complete: `${trackerOrigin}/progress?progress=100?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
		error: `${trackerOrigin}/error?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&impressionId=${impressionId}`,
	}

	const vastXml = `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="4.1" xmlns="http://www.iab.com/VAST">
  <Ad id="${ad.id}" adType="${ad.type}">
    <InLine>
      <AdSystem version="${AD_SYSTEM_VERSION}">${AD_SYSTEM_NAME}</AdSystem>
      <Error><![CDATA[${tracker.error}]]></Error>
      <AdServingId>${adServingId}</AdServingId>
      <AdTitle>${ad.description ?? `Ad ${ad.id}`}</AdTitle>
      <Impression><![CDATA[${tracker.impression}]]></Impression>
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
              <ClickThrough><![CDATA[${tracker.click}]]></ClickThrough>
            </VideoClicks>
            <TrackingEvents>
              <Tracking event="start"><![CDATA[${tracker.start}]]></Tracking>
              <Tracking event="firstQuartile"><![CDATA[${tracker.firstQuartile}]]></Tracking>
              <Tracking event="midpoint"><![CDATA[${tracker.midpoint}]]></Tracking>
              <Tracking event="thirdQuartile"><![CDATA[${tracker.thirdQuartile}]]></Tracking>
              <Tracking event="complete"><![CDATA[${tracker.complete}]]></Tracking>
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
                <![CDATA[${tracker.companionClick(companion.id)}]]>
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

	return new Response(vastXml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml',
		},
	})
})

// クリックエンドポイントの追加
app.get('/v1/click', async (c) => {
	const adId = c.req.query('adId')
	const adSlotId = c.req.query('adSlotId')
	const mediaId = c.req.query('mediaId')
	const isCompanion = c.req.query('isCompanion') === 'true'
	const companionId = c.req.query('companionId')
	const impressionId = c.req.query('impressionId')
	const ipAddress = c.req.header('CF-Connecting-IP')
	const userAgent = c.req.header('User-Agent')
	const db = getDB(c.env.DB)

	if (!adId || !adSlotId || !mediaId || !impressionId) {
		return c.text('Missing required parameters', 400)
	}

	// リダイレクト先を取得
	let clickThroughUrl: string
	if (isCompanion && companionId) {
		const companion = await db
			.selectFrom('companionBanners')
			.select('clickThroughUrl')
			.where('id', '==', companionId)
			.executeTakeFirst()
		clickThroughUrl = companion?.clickThroughUrl ?? ''
	} else {
		const ad = await db
			.selectFrom('ads')
			.select('clickThroughUrl')
			.where('id', '==', adId)
			.executeTakeFirst()
		clickThroughUrl = ad?.clickThroughUrl ?? ''
	}

	// クリックを記録
	await db
		.insertInto('clicks')
		.values({
			id: crypto.randomUUID(),
			uid: 'uid!',
			adId,
			adSlotId,
			mediaId,
			timestamp: new Date().toISOString(),
			ipAddress: ipAddress ?? '',
			userAgent: userAgent ?? '',
			isCompanion: isCompanion ? 1 : 0,
			impressionId,
			clickThroughUrl,
		})
		.execute()

	return clickThroughUrl !== ''
		? c.redirect(clickThroughUrl)
		: c.text('Redirect URL not found', 404)
})

export default app
