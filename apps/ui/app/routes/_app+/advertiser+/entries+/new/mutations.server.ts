import type { DB, Kysely } from '@video-ad-network/db'
import type { z } from 'zod'
import type { schema } from './route'

export const submitEntries = async (
  db: Kysely<DB>,
  advertiserId: string,
  value: z.infer<typeof schema>,
) => {
  return db.transaction().execute(async (tx) => {
    // campaignName: z.string().max(200),
    // campaignStartAt: z.string({ required_error: '開始日は必須です' }).date(),
    // campaignEndAt: z.string({ required_error: '終了日は必須です' }).date(),
    // campaignBudget: z.number().int().min(0),
    // campaignBudgetType: z.union([z.literal('UNLIMITED'), z.literal('TOTAL')]),
    // campaignDeliveryPace: z.literal('ASMUCHASPOSSIBLE'),
    const campaign = await tx
      .insertInto('campaigns')
      .values({
        advertiserId,
        id: crypto.randomUUID(),
        name: value.campaignName,
        startAt: value.campaignStartAt,
        endAt: value.campaignEndAt,
        budget: value.campaignBudget,
        budgetType: value.campaignBudgetType,
        deliveryPace: value.campaignDeliveryPace,
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    // adGroupName: z.string().max(200),
    // adGroupBidPriceCpm: z.number().int().positive(),
    // adGroupFrequencyCapImpression: z.number().int().positive(),
    // adGroupFrequencyCapWindow: z.number().int().min(1).max(100),
    // adGroupFrequencyCapUnit: z.union([
    //   z.literal('DAY'),
    //   z.literal('HOUR'),
    //   z.literal('MINUTE'),
    // ]),

    const adGroup = await tx
      .insertInto('adGroups')
      .values({
        advertiserId,
        campaignId: campaign.id,
        id: crypto.randomUUID(),
        name: value.adGroupName,
        bidPriceCpm: value.adGroupBidPriceCpm,
        frequencyCapImpressions: value.adGroupFrequencyCapImpression,
        frequencyCapWindow: value.adGroupFrequencyCapWindow,
        frequencyCapUnit: value.adGroupFrequencyCapUnit,
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    const ad = await tx
      .insertInto('ads')
      .values({
        advertiserId,
        adGroupId: adGroup.id,
        id: crypto.randomUUID(),
        type: value.adType,
        url: '',
        duration: value.adDuration,
        mimeType: value.adMimeType,
        description: value.adDescription,
        clickThroughUrl: value.adClickThroughUrl,
      })
      .executeTakeFirst()

    return { campaign, adGroup }
  })
}
