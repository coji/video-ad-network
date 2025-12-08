import * as path from 'node:path'
import * as readline from 'node:readline'
import { createId } from '@paralleldrive/cuid2'
import dayjs from 'dayjs'
import { config } from 'dotenv'
import { getDB } from './src/index.js'

// プロジェクトルートを取得 (packages/db から ../..)
const projectRoot = path.resolve(import.meta.dirname, '../..')

// --production フラグで開発/本番を切り替え
const isProduction = process.argv.includes('--production')
if (isProduction) {
  // 本番: プロジェクトルートの .env.production から読み込む
  config({ path: path.join(projectRoot, '.env.production') })
} else {
  // 開発: デフォルトの .env
  config()
}

async function confirm(message: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close()
      resolve(answer.toLowerCase() === 'y')
    })
  })
}

async function seed() {
  // Support both file paths and Turso URLs
  const rawUrl =
    process.env.DATABASE_URL ??
    process.env.TURSO_DATABASE_URL ??
    'file:../../data/dev.db'
  // Add file: prefix only if it's a relative path without protocol
  const dbUrl = rawUrl.includes(':') ? rawUrl : `file:${rawUrl}`

  console.log(`Database: ${isProduction ? 'Turso (production)' : 'Local'}`)

  // 本番DBの場合は確認プロンプトを表示
  if (isProduction) {
    console.log('\n⚠️  WARNING: You are about to seed the PRODUCTION database!')
    const confirmed = await confirm('Continue? (y/N): ')
    if (!confirmed) {
      console.log('Aborted.')
      process.exit(0)
    }
  }

  const db = getDB(dbUrl)

  console.log('Seeding database...')

  await db.transaction().execute(async (tx) => {
    const now = dayjs().toISOString()

    // Create sample users (without passwords - use auth:create-admin script to set passwords)
    // Run: pnpm -C apps/ui run auth:create-admin <email> <password> <name>
    const userId1 = createId()
    const userId2 = createId()

    await tx
      .insertInto('user')
      .values([
        {
          id: userId1,
          email: 'admin@example.com',
          name: 'Admin User',
          emailVerified: 1,
          role: 'admin',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: userId2,
          email: 'user@example.com',
          name: 'Test User',
          emailVerified: 1,
          role: 'user',
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created users')

    // Create organizations
    const org1Id = createId()
    const org2Id = createId()

    await tx
      .insertInto('organization')
      .values([
        {
          id: org1Id,
          name: 'Example Advertiser Org',
          slug: 'example-advertiser',
          createdAt: now,
          metadata: JSON.stringify({ isAdvertiser: true }),
        },
        {
          id: org2Id,
          name: 'Example Media Org',
          slug: 'example-media',
          createdAt: now,
          metadata: JSON.stringify({ isMedia: true }),
        },
      ])
      .execute()

    console.log('Created organizations')

    // Create members
    await tx
      .insertInto('member')
      .values([
        {
          id: createId(),
          organizationId: org1Id,
          userId: userId1,
          role: 'owner',
          createdAt: now,
        },
        {
          id: createId(),
          organizationId: org2Id,
          userId: userId2,
          role: 'owner',
          createdAt: now,
        },
      ])
      .execute()

    console.log('Created members')

    // Create media (use fixed IDs for example HTML)
    const media1Id = 'media1'
    const media2Id = 'media2'

    await tx
      .insertInto('media')
      .values([
        {
          id: media1Id,
          name: 'Example Media Site 1',
          categories: JSON.stringify(['entertainment', 'news']),
          organizationId: org2Id,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: media2Id,
          name: 'Example Media Site 2',
          categories: JSON.stringify(['music', 'podcast']),
          organizationId: org2Id,
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created media')

    // Create ad slots (use fixed IDs for example HTML)
    // adslot1: media1 video (300x250 companion)
    // adslot2: media2 audio (300x250 companion)
    // adslot3: media1 video (728x90 companion)
    await tx
      .insertInto('adSlots')
      .values([
        {
          id: 'adslot1',
          name: 'Main Video Player',
          mediaId: media1Id,
          type: 'video',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: 'adslot2',
          name: 'Audio Player',
          mediaId: media2Id,
          type: 'audio',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: 'adslot3',
          name: 'Secondary Video Player',
          mediaId: media1Id,
          type: 'video',
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created ad slots')

    // Create advertiser
    const advertiserId = createId()

    await tx
      .insertInto('advertisers')
      .values({
        id: advertiserId,
        name: 'Example Advertiser',
        organizationId: org1Id,
        createdAt: now,
        updatedAt: now,
      })
      .execute()

    console.log('Created advertiser')

    // Create campaign
    const campaignId = createId()
    const startAt = dayjs().startOf('day').toISOString()
    const endAt = dayjs().add(30, 'days').endOf('day').toISOString()

    await tx
      .insertInto('campaigns')
      .values({
        id: campaignId,
        name: 'Example Campaign',
        advertiserId: advertiserId,
        startAt: startAt,
        endAt: endAt,
        budget: '10000',
        budgetType: 'CPM',
        deliveryPace: 'EVENLY',
        spentBudget: '0',
        remainingBudget: '10000',
        status: 'ACTIVE',
        createdAt: now,
        updatedAt: now,
      })
      .execute()

    console.log('Created campaign')

    // Create ad group
    const adGroupId = createId()

    await tx
      .insertInto('adGroups')
      .values({
        id: adGroupId,
        name: 'Example Ad Group',
        categories: JSON.stringify(['entertainment']),
        bidPriceCpm: '500',
        frequencyCapImpressions: 10,
        frequencyCapWindow: 24,
        frequencyCapUnit: 'HOUR',
        advertiserId: advertiserId,
        campaignId: campaignId,
        createdAt: now,
        updatedAt: now,
      })
      .execute()

    console.log('Created ad group')

    // Create ads (video1 Beach, video2 Mountain, audio)
    const videoAd1Id = createId() // Beach video
    const videoAd2Id = createId() // Mountain video
    const audioAdId = createId()

    await tx
      .insertInto('ads')
      .values([
        {
          id: videoAd1Id,
          advertiserId: advertiserId,
          adGroupId: adGroupId,
          type: 'video',
          url: '/example/ads/example_video1.mp4',
          duration: 30,
          width: 1920,
          height: 1080,
          mimeType: 'video/mp4',
          clickThroughUrl: 'https://example.com/landing',
          description: 'Beach video ad',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: videoAd2Id,
          advertiserId: advertiserId,
          adGroupId: adGroupId,
          type: 'video',
          url: '/example/ads/example_video2.mp4',
          duration: 30,
          width: 1920,
          height: 1080,
          mimeType: 'video/mp4',
          clickThroughUrl: 'https://example.com/landing',
          description: 'Mountain video ad',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: audioAdId,
          advertiserId: advertiserId,
          adGroupId: adGroupId,
          type: 'audio',
          url: '/example/ads/example_audio1.m4a',
          duration: 30,
          width: null,
          height: null,
          mimeType: 'audio/mp4',
          clickThroughUrl: 'https://example.com/landing',
          description: 'Example audio ad',
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created ads')

    // Create companion slots for each ad slot
    // adslot1: 300x250, adslot2: 300x250, adslot3: 728x90
    await tx
      .insertInto('companionSlots')
      .values([
        {
          id: createId(),
          name: 'Sidebar Banner',
          adSlotId: 'adslot1',
          width: 300,
          height: 250,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: createId(),
          name: 'Audio Companion',
          adSlotId: 'adslot2',
          width: 300,
          height: 250,
          createdAt: now,
          updatedAt: now,
        },
        {
          id: createId(),
          name: 'Leaderboard Banner',
          adSlotId: 'adslot3',
          width: 728,
          height: 90,
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created companion slots')

    // Create companion banners for ads
    // Actual file sizes:
    //   banner1: 300x250 (Beach), banner2: 728x90 (Mountain Peak), banner3: 300x250 (Zenboost)
    // Beach video (videoAd1): 300x250 (banner1) - for adslot1
    // Mountain video (videoAd2): 728x90 (banner2) - for adslot3
    // Audio ad: 300x250 (banner3) - for adslot2
    await tx
      .insertInto('companionBanners')
      .values([
        {
          id: createId(),
          adId: videoAd1Id,
          url: '/example/ads/example_companion_banner1.png',
          width: 300,
          height: 250,
          mimeType: 'image/png',
          clickThroughUrl: 'https://example.com/landing',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: createId(),
          adId: videoAd2Id,
          url: '/example/ads/example_companion_banner2.png',
          width: 728,
          height: 90,
          mimeType: 'image/png',
          clickThroughUrl: 'https://example.com/landing',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: createId(),
          adId: audioAdId,
          url: '/example/ads/example_companion_banner3.png',
          width: 300,
          height: 250,
          mimeType: 'image/png',
          clickThroughUrl: 'https://example.com/landing',
          createdAt: now,
          updatedAt: now,
        },
      ])
      .execute()

    console.log('Created companion banners')
  })

  console.log('Seeding completed!')
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
