import { createId } from '@paralleldrive/cuid2'
import dayjs from 'dayjs'
import { config } from 'dotenv'
import { getDB } from './src/index.js'

// .env ファイルから環境変数を読み込む
config()

async function seed() {
  const DATABASE_URL = process.env.DATABASE_URL || '../../data/dev.db'
  const db = getDB(`file:${DATABASE_URL}`)

  console.log('Seeding database...')

  const now = dayjs().toISOString()

  // Create sample users (without passwords - use auth:create-admin script to set passwords)
  // Run: pnpm -C apps/ui run auth:create-admin <email> <password> <name>
  const userId1 = createId()
  const userId2 = createId()

  await db
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

  await db
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
  await db
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

  // Create media (use fixed ID for example HTML)
  const mediaId = 'media1'

  await db
    .insertInto('media')
    .values({
      id: mediaId,
      name: 'Example Media Site',
      categories: JSON.stringify(['entertainment', 'news']),
      organizationId: org2Id,
      createdAt: now,
      updatedAt: now,
    })
    .execute()

  console.log('Created media')

  // Create ad slot (use fixed ID for example HTML)
  const adSlotId = 'adslot1'

  await db
    .insertInto('adSlots')
    .values({
      id: adSlotId,
      name: 'Main Video Player',
      mediaId: mediaId,
      type: 'video',
      createdAt: now,
      updatedAt: now,
    })
    .execute()

  console.log('Created ad slot')

  // Create advertiser
  const advertiserId = createId()

  await db
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

  await db
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

  await db
    .insertInto('adGroups')
    .values({
      id: adGroupId,
      name: 'Example Ad Group',
      categories: JSON.stringify(['entertainment']),
      bidPriceCpm: '500',
      frequencyCapImpressions: 3,
      frequencyCapWindow: 24,
      frequencyCapUnit: 'HOUR',
      advertiserId: advertiserId,
      campaignId: campaignId,
      createdAt: now,
      updatedAt: now,
    })
    .execute()

  console.log('Created ad group')

  // Create ad
  await db
    .insertInto('ads')
    .values({
      id: createId(),
      advertiserId: advertiserId,
      adGroupId: adGroupId,
      type: 'video',
      url: 'https://example.com/video-ad.mp4',
      duration: 30,
      width: 1920,
      height: 1080,
      mimeType: 'video/mp4',
      clickThroughUrl: 'https://example.com/landing',
      description: 'Example video ad',
      createdAt: now,
      updatedAt: now,
    })
    .execute()

  console.log('Created ad')

  console.log('Seeding completed!')
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
