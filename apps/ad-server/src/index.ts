// vast-api.ts

import { Hono } from 'hono'
import { setCookie, getCookie } from 'hono/cookie'
import type { D1Database } from '@cloudflare/workers-types'
import { cors } from 'hono/cors'

interface Bindings {
	DB: D1Database
	TRACKER_ORIGIN: string
}

const app = new Hono<{ Bindings: Bindings }>()

interface Ad {
	id: number
	advertiser_id: number
	type: 'video' | 'audio'
	url: string
	duration: number
	width: number
	height: number
	clickThroughURL: string
	category?: string
	description?: string
	mimeType?: string // 追加
}

interface CompanionBanner {
	id: number
	ad_id: number
	url: string
	width: number
	height: number
	clickThroughURL?: string
	mimeType?: string
}

interface FrequencyData {
	[adId: string]: {
		count: number
		lastSeen: number
	}
}

const FREQUENCY_CAP = 3
const FREQUENCY_PERIOD = 24 * 60 * 60 * 1000 // 24時間（ミリ秒単位）

function parseFrequencyData(cookieValue: string | undefined): FrequencyData {
	if (!cookieValue) return {}
	try {
		return JSON.parse(cookieValue)
	} catch {
		return {}
	}
}

function stringifyFrequencyData(data: FrequencyData): string {
	return JSON.stringify(data)
}

async function selectAd(
	db: D1Database,
	adSlotId: number,
	frequencyData: FrequencyData,
): Promise<Ad | null> {
	const ads = await db
		.prepare(
			`
      SELECT a.*, ast.bid_amount
      FROM ads a
      JOIN ad_slot_targeting ast ON a.id = ast.ad_id
      WHERE ast.ad_slot_id = ?
      ORDER BY ast.bid_amount DESC
    `,
		)
		.bind(adSlotId)
		.all<Ad>()

	if (!ads.results) return null

	const now = Date.now()
	for (const ad of ads.results) {
		const adFreq = frequencyData[ad.id] || { count: 0, lastSeen: 0 }
		if (now - adFreq.lastSeen > FREQUENCY_PERIOD) {
			// フリークエンシー期間が過ぎた場合、カウントをリセット
			return ad
		}
		if (adFreq.count < FREQUENCY_CAP) {
			return ad
		}
	}

	return null // 適切な広告が見つからない場合
}

async function getCompanionBanners(
	db: D1Database,
	adId: number,
): Promise<CompanionBanner[]> {
	const companions = await db
		.prepare(
			`
      SELECT * FROM companion_banners WHERE ad_id = ?
    `,
		)
		.bind(adId)
		.all<CompanionBanner>()

	return companions.results || []
}

app.use(
	'/vast',
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

app.get('/vast', async (c) => {
	const adSlotId = Number.parseInt(c.req.query('adSlotId') || '')
	const mediaId = Number.parseInt(c.req.query('mediaId') || '')
	const db: D1Database = c.env.DB

	if (!adSlotId || !mediaId) {
		return c.text('Missing required parameters', 400)
	}

	const url = new URL(c.req.url)
	const origin = url.origin
	const trackerOrigin = c.env.TRACKER_ORIGIN // トラッカーのドメインに変更してください

	const frequencyDataCookie = getCookie(c, 'ad_frequency')
	const frequencyData = parseFrequencyData(frequencyDataCookie)

	const ad = await selectAd(db, adSlotId, frequencyData)
	if (!ad) {
		return c.text('No suitable ad available', 204)
	}

	const companionBanners = await getCompanionBanners(db, ad.id)

	// フリークエンシーデータを更新
	const now = Date.now()
	frequencyData[ad.id] = frequencyData[ad.id] || { count: 0, lastSeen: now }
	frequencyData[ad.id].count += 1
	frequencyData[ad.id].lastSeen = now

	// 更新したクッキーをセット
	setCookie(c, 'ad_frequency', stringifyFrequencyData(frequencyData), {
		maxAge: 30 * 24 * 60 * 60, // 30日間
		httpOnly: true,
		secure: true,
		sameSite: 'Strict',
	})

	// インプレッションIDと広告配信IDを生成
	const impressionId = crypto.randomUUID()
	const adServingId = crypto.randomUUID()

	// トラッカーURLを生成
	const tracker = {
		click: `${origin}/click?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&isCompanion=false&impressionId=${impressionId}`,
		companionClick: (companionId: number) =>
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
      <AdTitle>${ad.description || `Ad ${ad.id}`}</AdTitle>
      <Impression><![CDATA[${tracker.impression}]]></Impression>
      <Creatives>
        <Creative id="${ad.id}">
          <Linear>
            <Duration>${ad.duration || '00:00:15'}</Duration>
            <MediaFiles>
              <MediaFile delivery="progressive" type="${
								ad.mimeType || 'application/octet-stream'
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
								companion.mimeType || 'image/jpeg'
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
app.get('/click', async (c) => {
	const adId = Number.parseInt(c.req.query('adId') || '')
	const adSlotId = Number.parseInt(c.req.query('adSlotId') || '')
	const mediaId = Number.parseInt(c.req.query('mediaId') || '')
	const isCompanion = c.req.query('isCompanion') === 'true'
	const companionId = Number.parseInt(c.req.query('companionId') || '0')
	const impressionId = c.req.query('impressionId')
	const ipAddress = c.req.header('CF-Connecting-IP')
	const userAgent = c.req.header('User-Agent')
	const db: D1Database = c.env.DB

	if (!adId || !adSlotId || !mediaId || !impressionId) {
		return c.text('Missing required parameters', 400)
	}

	// クリックを記録
	await db
		.prepare(
			`
      INSERT INTO clicks (ad_id, ad_slot_id, media_id, timestamp, ip_address, user_agent, is_companion, impression_id)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?)
    `,
		)
		.bind(
			adId,
			adSlotId,
			mediaId,
			ipAddress ?? '',
			userAgent ?? '',
			isCompanion ? 1 : 0,
			impressionId,
		)
		.run()

	// リダイレクト先を取得
	let redirectUrl: string | undefined
	if (isCompanion && companionId) {
		const companion = await db
			.prepare('SELECT clickThroughURL FROM companion_banners WHERE id = ?')
			.bind(companionId)
			.first<{ clickThroughURL: string }>()
		redirectUrl = companion?.clickThroughURL
	} else {
		const ad = await db
			.prepare('SELECT clickThroughURL FROM ads WHERE id = ?')
			.bind(adId)
			.first<{ clickThroughURL: string }>()
		redirectUrl = ad?.clickThroughURL
	}

	return redirectUrl
		? c.redirect(redirectUrl)
		: c.text('Redirect URL not found', 404)
})

export default app
