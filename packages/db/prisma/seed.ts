import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import dotenv from 'dotenv'
import { getDB } from '~/index'

dayjs.extend(utc)
dayjs.extend(timezone)
dotenv.config()
const tz = 'Asia/Tokyo'

const seed = async () => {
  const db = getDB(process.env.DATABASE_URL ?? '')

  // Create users
  const now = new Date().toISOString()
  await db
    .insertInto('user')
    .values([
      {
        id: 'user1',
        name: 'Admin User',
        email: 'admin@example.com',
        emailVerified: 1,
        createdAt: now,
        updatedAt: now,
        role: 'admin',
      },
      {
        id: 'user2',
        name: 'Test User',
        email: 'test@example.com',
        emailVerified: 1,
        createdAt: now,
        updatedAt: now,
      },
    ])
    .execute()

  // Create accounts (password: "password123")
  // Note: In production, use better-auth's password hashing
  await db
    .insertInto('account')
    .values([
      {
        id: 'account1',
        accountId: 'user1',
        providerId: 'credential',
        userId: 'user1',
        password:
          '$2a$10$abcdefghijklmnopqrstuv', // placeholder - use better-auth to create real accounts
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'account2',
        accountId: 'user2',
        providerId: 'credential',
        userId: 'user2',
        password:
          '$2a$10$abcdefghijklmnopqrstuv', // placeholder - use better-auth to create real accounts
        createdAt: now,
        updatedAt: now,
      },
    ])
    .execute()

  // Create organizations
  await db
    .insertInto('organization')
    .values([
      {
        id: 'org1',
        name: 'Tech Corp',
        slug: 'tech-corp',
        createdAt: now,
        metadata: JSON.stringify({ isAdvertiser: true, isMedia: true }),
      },
      {
        id: 'org2',
        name: 'News Ltd',
        slug: 'news-ltd',
        createdAt: now,
        metadata: JSON.stringify({ isAdvertiser: true, isMedia: true }),
      },
    ])
    .execute()

  // Create members
  await db
    .insertInto('member')
    .values([
      {
        id: 'member1',
        organizationId: 'org1',
        userId: 'user1',
        role: 'owner',
        createdAt: now,
      },
      {
        id: 'member2',
        organizationId: 'org2',
        userId: 'user2',
        role: 'owner',
        createdAt: now,
      },
    ])
    .execute()

  // media
  await db
    .insertInto('media')
    .values([
      {
        id: 'media1',
        organizationId: 'org1',
        name: 'Tech Blog 1',
        categories: JSON.stringify(['tech', 'blog']),
      },
      {
        id: 'media2',
        organizationId: 'org2',
        name: 'News',
        categories: JSON.stringify(['entertainment']),
      },
    ])
    .execute()

  // ad slots
  await db
    .insertInto('adSlots')
    .values([
      {
        id: 'adslot1',
        mediaId: 'media1',
        name: 'Tech Blog Video Slot',
        type: 'video',
      },
      {
        id: 'adslot2',
        mediaId: 'media2',
        name: 'News Site Audio Slot',
        type: 'audio',
      },
      {
        id: 'adslot3',
        mediaId: 'media1',
        name: 'Tech Blog Video Slot 2',
        type: 'video',
      },
    ])
    .execute()

  // companion slots
  await db
    .insertInto('companionSlots')
    .values([
      {
        id: 'compslot1',
        adSlotId: 'adslot1',
        name: 'Companion Slot 1',
        width: 300,
        height: 250,
      },
      {
        id: 'compslot2',
        adSlotId: 'adslot2',
        name: 'Companion Slot 2',
        width: 300,
        height: 250,
      },
      {
        id: 'compslot3',
        adSlotId: 'adslot3',
        name: 'Companion Slot 3',
        width: 728,
        height: 90,
      },
    ])
    .execute()

  // advertisers
  await db
    .insertInto('advertisers')
    .values([
      {
        id: 'adv1',
        name: 'Tech Corp',
        organizationId: 'org1',
      },
      {
        id: 'adv2',
        name: 'News Ltd',
        organizationId: 'org2',
      },
    ])
    .execute()

  // campaigns
  await db
    .insertInto('campaigns')
    .values([
      {
        id: 'camp1',
        name: 'Campaign One',
        advertiserId: 'adv1',
        startAt: dayjs.tz('2023-10-01 00:00', tz).utc().format('YYYY-MM-DD HH:mm:ss'),
        endAt: dayjs.tz('2030-12-31 23:59', tz).utc().format('YYYY-MM-DD HH:mm:ss'),
        budget: 50000,
        budgetType: 'CPM',
        deliveryPace: 'EVENLY',
        spentBudget: 0,
        remainingBudget: 50000,
        status: 'ACTIVE',
      },
      {
        id: 'camp2',
        name: 'Campaign Two',
        advertiserId: 'adv2',
        startAt: dayjs.tz('2023-11-01 00:00', tz).utc().format('YYYY-MM-DD HH:mm:ss'),
        endAt: dayjs.tz('2030-01-31 23:59', tz).utc().format('YYYY-MM-DD HH:mm:ss'),
        budget: 75000,
        budgetType: 'CPM',
        deliveryPace: 'AS_MUCH_AS_POSSIBLE',
        spentBudget: 0,
        remainingBudget: 75000,
        status: 'ACTIVE',
      },
    ])
    .execute()

  // ad groups
  await db
    .insertInto('adGroups')
    .values([
      {
        id: 'ag1',
        name: 'AdGroup One',
        categories: null,
        bidPriceCpm: 2000,
        frequencyCapImpressions: 10,
        frequencyCapWindow: 1,
        frequencyCapUnit: 'MINUTE',
        advertiserId: 'adv1',
        campaignId: 'camp1',
      },
      {
        id: 'ag2',
        name: 'AdGroup Two',
        categories: JSON.stringify(['news']),
        bidPriceCpm: 1000,
        frequencyCapImpressions: 15,
        frequencyCapWindow: 1,
        frequencyCapUnit: 'HOUR',
        advertiserId: 'adv2',
        campaignId: 'camp2',
      },
      {
        id: 'ag3',
        name: 'AdGroup Three',
        categories: JSON.stringify(['entertainment']),
        bidPriceCpm: 1000,
        frequencyCapImpressions: 15,
        frequencyCapWindow: 1,
        frequencyCapUnit: 'HOUR',
        advertiserId: 'adv2',
        campaignId: 'camp2',
      },
    ])
    .execute()

  // ads
  await db
    .insertInto('ads')
    .values([
      {
        id: 'ad1',
        advertiserId: 'adv1',
        adGroupId: 'ag1',
        type: 'video',
        url: 'http://localhost:5173/example/ads/example_video1.mp4',
        duration: 15,
        mimeType: 'video/mp4',
        clickThroughUrl: 'https://example.com/ad/1',
        description: 'Beach',
      },
      {
        id: 'ad2',
        advertiserId: 'adv2',
        adGroupId: 'ag2',
        type: 'audio',
        url: 'http://localhost:5173/example/ads/example_audio1.m4a',
        duration: 37,
        mimeType: 'audio/x-m4a',
        clickThroughUrl: 'https://example.com/ad/2',
        description: 'Zen Boost',
      },
      {
        id: 'ad3',
        advertiserId: 'adv1',
        adGroupId: 'ag1',
        type: 'video',
        url: 'http://localhost:5173/example/ads/example_video2.mp4',
        duration: 14,
        mimeType: 'video/mp4',
        clickThroughUrl: 'https://example.com/ad/3',
        description: 'Mountain',
      },
    ])
    .execute()

  // companionBanners
  await db
    .insertInto('companionBanners')
    .values([
      {
        id: 'cb1',
        adId: 'ad1',
        url: 'http://localhost:5173/example/ads/example_companion_banner1.png',
        width: 300,
        height: 250,
        mimeType: 'image/png',
        clickThroughUrl: 'https://example.com/ad/1/banner',
      },
      {
        id: 'cb2',
        adId: 'ad2',
        url: 'http://localhost:5173/example/ads/example_companion_banner2.png',
        width: 300,
        height: 250,
        mimeType: 'image/png',
        clickThroughUrl: 'https://example.com/ad/2/banner',
      },
      {
        id: 'cb3',
        adId: 'ad3',
        url: 'http://localhost:5173/example/ads/example_companion_banner3.png',
        width: 728,
        height: 90,
        mimeType: 'image/png',
        clickThroughUrl: 'https://example.com/ad/3/banner',
      },
    ])
    .execute()

  // Insert clicks
  await db
    .insertInto('clicks')
    .values([
      {
        id: 'click1',
        adSlotId: 'adslot1',
        mediaId: 'media1',
        advertiserId: 'adv1',
        campaignId: 'camp1',
        adGroupId: 'ag1',
        adId: 'ad1',
        ipAddress: '192.168.1.1',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        isCompanion: 0,
        impressionId: '550e8400-e29b-41d4-a716-446655440000',
        uid: 'uid1',
        clickThroughUrl: 'https://example.com/ad/1',
      },
      {
        id: 'click2',
        adSlotId: 'adslot2',
        mediaId: 'media2',
        advertiserId: 'adv2',
        campaignId: 'camp2',
        adGroupId: 'ag2',
        adId: 'ad2',
        ipAddress: '192.168.1.3',
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        isCompanion: 1,
        impressionId: '550e8400-e29b-41d4-a716-446655440002',
        uid: 'uid2',
        clickThroughUrl: 'https://example.com/ad/2',
      },
    ])
    .execute()

  // adEvents
  await db
    .insertInto('adEvents')
    .values([
      {
        id: 'ae1',
        eventType: 'impression',
        adId: 'ad1',
        adSlotId: 'slot1',
        mediaId: 'media1',
        impressionId: 'imp1',
        progress: null,
        ipAddress: '192.168.1.4',
        userAgent: 'Mozilla/5.0',
        uid: 'uid1',
      },
      {
        id: 'ae2',
        eventType: 'progress',
        adId: 'ad2',
        adSlotId: 'slot2',
        mediaId: 'media2',
        impressionId: 'imp2',
        progress: 50,
        ipAddress: '192.168.1.5',
        userAgent: 'Chrome/91.0',
        uid: 'uid2',
      },
    ])
    .execute()

  // Insert dailyReports
  await db
    .insertInto('dailyReports')
    .values([
      {
        date: '2023-10-10',
        mediaId: 'media1',
        adSlotId: 'slot1',
        advertiserId: 'adv1',
        campaignId: 'camp1',
        adGroupId: 'ag1',
        adId: 'ad1',
        impressions: 1000,
        clicks: 50,
        reach: 750,
      },
      {
        date: '2023-10-10',
        mediaId: 'media2',
        adSlotId: 'slot2',
        advertiserId: 'adv2',
        campaignId: 'camp2',
        adGroupId: 'ag2',
        adId: 'ad2',
        impressions: 2000,
        clicks: 100,
        reach: 1500,
      },
    ])
    .execute()

  console.log('Seeded database successfully 🌱')
}

await seed()
