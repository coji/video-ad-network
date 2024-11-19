import { getDB } from '~/index'
import { TZDate } from '@date-fns/tz'
import dotenv from 'dotenv'
dotenv.config()
const tz = 'Asia/Tokyo'

const seed = async () => {
	const db = getDB({
		TURSO_DATABASE_URL: process.env.DATABASE_URL ?? '',
		TURSO_AUTH_TOKEN: '',
	})

	const now = TZDate.tz('UTC').toISOString() // 2024-11-18T08:59:20.605+00:00
	// users
	const users = await db
		.insertInto('users')
		.values([
			{
				id: 'user_2p0icGPI17aD9h3NkSOE7S1NQXv',
				email: 'user1@example.com',
				createdAt: now,
				updatedAt: now,
			},
		])
		.returningAll()
		.execute()

	// organizations
	const orgs = await db
		.insertInto('organizations')
		.values([
			{
				id: 'org_2p0ig9GEwwaSUAeYtXRQXecp8iB',
				name: 'Tech Corp',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'org_2p0uzBZsCLmDvjPXbHQ0aHYqPfO',
				name: 'News Ltd',
				createdAt: now,
				updatedAt: now,
			},
		])
		.returningAll()
		.execute()

	// organization memberships
	await db
		.insertInto('organizationMemberships')
		.values([
			{
				id: 'mem1',
				userId: users[0].id,
				organizationId: orgs[0].id,
				role: 'admin',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'mem2',
				userId: users[0].id,
				organizationId: orgs[1].id,
				role: 'member',
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	// medias
	await db
		.insertInto('medias')
		.values([
			{
				id: 'media1',
				organizationId: orgs[0].id,
				name: 'Tech Blog 1',
				categories: JSON.stringify(['tech', 'blog']),
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'media2',
				organizationId: orgs[1].id,
				name: 'News',
				categories: JSON.stringify(['entertainment']),
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	// ad slots
	await db
		.insertInto('adSlots')
		.values([
			{
				id: 'slot1',
				mediaId: 'media1',
				name: 'Tech Blog Video Slot',
				type: 'video',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'slot2',
				mediaId: 'media2',
				name: 'News Site Audio Slot',
				type: 'audio',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'slot3',
				mediaId: 'media1',
				name: 'Tech Blog Video Slot 2',
				type: 'video',
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	// companion slots
	await db
		.insertInto('companionSlots')
		.values([
			{
				id: 'compslot1',
				adSlotId: 'slot1',
				name: 'Companion Slot 1',
				width: 300,
				height: 250,
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'compslot2',
				adSlotId: 'slot2',
				name: 'Companion Slot 2',
				width: 300,
				height: 250,
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'compslot3',
				adSlotId: 'slot3',
				name: 'Companion Slot 3',
				width: 728,
				height: 90,
				createdAt: now,
				updatedAt: now,
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
				organizationId: orgs[0].id,
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'adv2',
				name: 'News Ltd',
				organizationId: orgs[1].id,
				createdAt: now,
				updatedAt: now,
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
				startAt: new TZDate('2023-10-01 00:00', tz)
					.withTimeZone('UTC')
					.toISOString(),
				endAt: new TZDate('2030-12-31 23:59', tz)
					.withTimeZone('UTC')
					.toISOString(),
				budget: 50000,
				budgetType: 'CPM',
				deliveryPace: 'EVENLY',
				spentBudget: 0,
				remainingBudget: 50000,
				status: 'ACTIVE',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'camp2',
				name: 'Campaign Two',
				advertiserId: 'adv2',
				startAt: new TZDate('2023-11-01 00:00', tz)
					.withTimeZone('UTC')
					.toISOString(),
				endAt: new TZDate('2030-01-31 23:59', tz)
					.withTimeZone('UTC')
					.toISOString(),
				budget: 75000,
				budgetType: 'CPM',
				deliveryPace: 'AS_MUCH_AS_POSSIBLE',
				spentBudget: 0,
				remainingBudget: 75000,
				status: 'ACTIVE',
				createdAt: now,
				updatedAt: now,
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
				frequencyCapWindow: 7,
				frequencyCapUnit: 'DAY',
				advertiserId: 'adv1',
				campaignId: 'camp1',
				createdAt: now,
				updatedAt: now,
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
				createdAt: now,
				updatedAt: now,
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
				createdAt: now,
				updatedAt: now,
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
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_video1.mp4',
				duration: 15,
				mimeType: 'video/mp4',
				clickThroughUrl: 'https://example.com/ad/1',
				description: 'Beach',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'ad2',
				advertiserId: 'adv2',
				adGroupId: 'ag2',
				type: 'audio',
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_audio1.m4a',
				duration: 37,
				mimeType: 'audio/x-m4a',
				clickThroughUrl: 'https://example.com/ad/2',
				description: 'Zen Boost',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'ad3',
				advertiserId: 'adv1',
				adGroupId: 'ag1',
				type: 'video',
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_video2.mp4',
				duration: 14,
				mimeType: 'video/mp4',
				clickThroughUrl: 'https://example.com/ad/3',
				description: 'Mountain',
				createdAt: now,
				updatedAt: now,
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
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_companion_banner1.png',
				width: 300,
				height: 250,
				mimeType: 'image/png',
				clickThroughUrl: 'https://example.com/ad/1/banner',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'cb2',
				adId: 'ad2',
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_companion_banner2.png',
				width: 300,
				height: 250,
				mimeType: 'image/png',
				clickThroughUrl: 'https://example.com/ad/2/banner',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'cb3',
				adId: 'ad3',
				url: 'https://pub-0bf554d65e60408bb58720ed5b08a665.r2.dev/example/ads/example_companion_banner3.png',
				width: 728,
				height: 90,
				mimeType: 'image/png',
				clickThroughUrl: 'https://example.com/ad/3/banner',
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	// Insert clicks
	await db
		.insertInto('clicks')
		.values([
			{
				id: 'click1',
				adId: 'ad1',
				adSlotId: 'adslot1',
				mediaId: 'media1',
				ipAddress: '192.168.1.1',
				userAgent:
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
				isCompanion: 0,
				impressionId: '550e8400-e29b-41d4-a716-446655440000',
				uid: 'uid1',
				clickThroughUrl: 'https://example.com/ad/1',
				createdAt: now,
				updatedAt: now,
			},
			{
				id: 'click2',
				adId: 'ad2',
				adSlotId: 'adslot2',
				mediaId: 'media2',
				ipAddress: '192.168.1.3',
				userAgent:
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
				isCompanion: 1,
				impressionId: '550e8400-e29b-41d4-a716-446655440002',
				uid: 'uid2',
				clickThroughUrl: 'https://example.com/ad/2',
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	// adEvents
	await db
		.insertInto('adEvents')
		.values([
			{
				id: 'ae1',
				eventTimestamp: '2023-10-10 10:00:00',
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
				eventTimestamp: '2023-10-10 10:05:00',
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
				createdAt: now,
				updatedAt: now,
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
				createdAt: now,
				updatedAt: now,
			},
		])
		.execute()

	console.log('Seeded database successfully 🌱')
}

await seed()
