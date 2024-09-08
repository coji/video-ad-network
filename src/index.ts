import { Hono } from 'hono';
import { setCookie, getCookie } from 'hono/cookie';
import type { D1Database } from '@cloudflare/workers-types';

interface Bindings {
  DB: D1Database;
}
const app = new Hono<{ Bindings: Bindings }>();

interface Ad {
  id: number;
  advertiser_id: number;
  type: 'video' | 'audio';
  url: string;
  duration: number;
  width: number;
  height: number;
  bid_amount: number;
}

interface CompanionBanner {
  id: number;
  ad_id: number;
  url: string;
  width: number;
  height: number;
}

interface FrequencyData {
  [adId: string]: {
    count: number;
    lastSeen: number;
  };
}

const FREQUENCY_CAP = 3;
const FREQUENCY_PERIOD = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function parseFrequencyData(cookieValue: string | undefined): FrequencyData {
  if (!cookieValue) return {};
  try {
    return JSON.parse(cookieValue);
  } catch {
    return {};
  }
}

function stringifyFrequencyData(data: FrequencyData): string {
  return JSON.stringify(data);
}

async function selectAd(
  db: D1Database,
  adSlotId: number,
  frequencyData: FrequencyData
): Promise<Ad | null> {
  const ads = await db
    .prepare(
      `
    SELECT a.*, ast.bid_amount
    FROM ads a
    JOIN ad_slot_targeting ast ON a.id = ast.ad_id
    WHERE ast.ad_slot_id = ?
    ORDER BY ast.bid_amount DESC
  `
    )
    .bind(adSlotId)
    .all<Ad>();

  if (!ads.results) return null;

  const now = Date.now();
  for (const ad of ads.results) {
    const adFreq = frequencyData[ad.id] || { count: 0, lastSeen: 0 };
    if (now - adFreq.lastSeen > FREQUENCY_PERIOD) {
      // Reset if the frequency period has passed
      return ad;
    }
    if (adFreq.count < FREQUENCY_CAP) {
      return ad;
    }
  }

  return null; // No suitable ad found
}

async function getCompanionBanners(
  db: D1Database,
  adId: number
): Promise<CompanionBanner[]> {
  const companions = await db
    .prepare(
      `
    SELECT * FROM companion_banners WHERE ad_id = ?
  `
    )
    .bind(adId)
    .all<CompanionBanner>();

  return companions.results || [];
}

app.get('/vast', async (c) => {
  const adSlotId = Number.parseInt(c.req.query('adSlotId') || '');
  const mediaId = Number.parseInt(c.req.query('mediaId') || '');
  const db: D1Database = c.env.DB;

  if (!adSlotId || !mediaId) {
    return c.text('Missing required parameters', 400);
  }

  const url = new URL(c.req.url);
  const origin = url.origin;

  const frequencyDataCookie = getCookie(c, 'ad_frequency');
  const frequencyData = parseFrequencyData(frequencyDataCookie);

  const ad = await selectAd(db, adSlotId, frequencyData);
  if (!ad) {
    return c.text('No suitable ad available', 204);
  }

  const companionBanners = await getCompanionBanners(db, ad.id);

  // Update frequency data
  const now = Date.now();
  frequencyData[ad.id] = frequencyData[ad.id] || { count: 0, lastSeen: now };
  frequencyData[ad.id].count += 1;
  frequencyData[ad.id].lastSeen = now;

  // Set updated cookie
  setCookie(c, 'ad_frequency', stringifyFrequencyData(frequencyData), {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });

  const vastXml = `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="4.1">
  <Ad id="${ad.id}" adType="${ad.type}">
    <InLine>
      <AdSystem>Custom Ad Network</AdSystem>
      <AdTitle>Ad ${ad.id}</AdTitle>
      <Impression><![CDATA[${origin}/impression?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}]]></Impression>
      <Creatives>
        <Creative id="${ad.id}">
          <${ad.type === 'video' ? 'Linear' : 'NonLinearAds'}>
            <Duration>${ad.duration || '00:00:15'}</Duration>
            <MediaFiles>
              <MediaFile delivery="progressive" type="${ad.type}/${
    ad.type === 'video' ? 'mp4' : 'mpeg'
  }" width="${ad.width}" height="${ad.height}">
                <![CDATA[${ad.url}]]>
              </MediaFile>
            </MediaFiles>
            <VideoClicks>
              <ClickThrough><![CDATA[${origin}/click?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}&isCompanion=false]]></ClickThrough>
            </VideoClicks>
            <TrackingEvents>
              <Tracking event="progress" offset="25%"><![CDATA[${origin}/progress?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}&progress=25]]></Tracking>
              <Tracking event="progress" offset="50%"><![CDATA[${origin}/progress?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}&progress=50]]></Tracking>
              <Tracking event="progress" offset="75%"><![CDATA[${origin}/progress?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}&progress=75]]></Tracking>
              <Tracking event="complete"><![CDATA[${origin}/progress?adId=${
    ad.id
  }&adSlotId=${adSlotId}&mediaId=${mediaId}&progress=100]]></Tracking>
            </TrackingEvents>
          </${ad.type === 'video' ? 'Linear' : 'NonLinearAds'}>
        </Creative>
        ${companionBanners
          .map(
            (companion) => `
        <Creative>
          <CompanionAds>
            <Companion width="${companion.width}" height="${companion.height}">
              <StaticResource creativeType="image/jpeg">
                <![CDATA[${companion.url}]]>
              </StaticResource>
              <CompanionClickThrough>
                <![CDATA[${origin}/click?adId=${ad.id}&adSlotId=${adSlotId}&mediaId=${mediaId}&isCompanion=true&companionId=${companion.id}]]>
              </CompanionClickThrough>
            </Companion>
          </CompanionAds>
        </Creative>
        `
          )
          .join('')}
      </Creatives>
    </InLine>
  </Ad>
</VAST>`;

  return new Response(vastXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
});

app.get('/impression', async (c) => {
  const adId = Number.parseInt(c.req.query('adId') || '');
  const adSlotId = Number.parseInt(c.req.query('adSlotId') || '');
  const mediaId = Number.parseInt(c.req.query('mediaId') || '');
  const db: D1Database = c.env.DB;

  if (!adId || !adSlotId || !mediaId) {
    return c.text('Missing required parameters', 400);
  }

  // インプレッションを記録
  await db
    .prepare(
      `
    INSERT INTO impressions (ad_id, ad_slot_id, media_id, ip_address, user_agent)
    VALUES (?, ?, ?, ?, ?)
  `
    )
    .bind(
      adId,
      adSlotId,
      mediaId,
      c.req.header('CF-Connecting-IP'),
      c.req.header('User-Agent')
    )
    .run();

  return c.text('Impression recorded', 200);
});

app.get('/click', async (c) => {
  const adId = Number.parseInt(c.req.query('adId') || '');
  const adSlotId = Number.parseInt(c.req.query('adSlotId') || '');
  const mediaId = Number.parseInt(c.req.query('mediaId') || '');
  const isCompanion = c.req.query('isCompanion') === 'true';
  const companionId = Number.parseInt(c.req.query('companionId') || '0');
  const db: D1Database = c.env.DB;

  if (!adId || !adSlotId || !mediaId) {
    return c.text('Missing required parameters', 400);
  }

  // クリックを記録
  await db
    .prepare(
      `
    INSERT INTO clicks (ad_id, ad_slot_id, media_id, ip_address, user_agent, is_companion)
    VALUES (?, ?, ?, ?, ?, ?)
  `
    )
    .bind(
      adId,
      adSlotId,
      mediaId,
      c.req.header('CF-Connecting-IP'),
      c.req.header('User-Agent'),
      isCompanion ? 1 : 0
    )
    .run();

  // 広告のランディングページにリダイレクト
  let redirectUrl: string | undefined;
  if (isCompanion && companionId) {
    const companion = await db
      .prepare('SELECT url FROM companion_banners WHERE id = ?')
      .bind(companionId)
      .first<{ url: string }>();
    redirectUrl = companion?.url;
  } else {
    const ad = await db
      .prepare('SELECT url FROM ads WHERE id = ?')
      .bind(adId)
      .first<{ url: string }>();
    redirectUrl = ad?.url;
  }

  return redirectUrl
    ? c.redirect(redirectUrl)
    : c.text('Redirect URL not found', 404);
});

app.get('/progress', async (c) => {
  const adId = Number.parseInt(c.req.query('adId') || '');
  const adSlotId = Number.parseInt(c.req.query('adSlotId') || '');
  const mediaId = Number.parseInt(c.req.query('mediaId') || '');
  const progress = Number.parseInt(c.req.query('progress') || '');
  const db: D1Database = c.env.DB;

  if (!adId || !adSlotId || !mediaId || !progress) {
    return c.text('Missing required parameters', 400);
  }

  // 視聴進捗を記録
  await db
    .prepare(
      `
    INSERT INTO view_progress (ad_id, ad_slot_id, media_id, progress)
    VALUES (?, ?, ?, ?)
  `
    )
    .bind(adId, adSlotId, mediaId, progress)
    .run();

  return c.text('Progress recorded', 200);
});

export default app;
