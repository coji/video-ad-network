import { createId } from '@paralleldrive/cuid2'
import type { DB, Kysely, Selectable } from '@video-ad-network/db'
import { addSeconds } from 'date-fns'
import type { z } from 'zod'
import { serializeDateTime } from '~/lib/datetime'
import type { schema } from './route'

export const submitEntries = async (
  db: Kysely<DB>,
  env: Env,
  advertiserId: string,
  value: z.infer<typeof schema>,
) => {
  addSeconds(value.campaignEndAt, 1 * 60 * 60 * 24 - 1)

  return db.transaction().execute(async (tx) => {
    // キャンペーンの作成
    const campaign = await tx
      .insertInto('campaigns')
      .values({
        id: createId(),
        advertiserId,
        name: value.campaignName,
        startAt: serializeDateTime(value.campaignStartAt, value.tzOffset),
        endAt: serializeDateTime(
          addSeconds(value.campaignEndAt, 1 * 60 * 60 * 24 - 1), // 終了日の 23:59:59 にするために 1 日加算
          value.tzOffset,
        ),
        budget: value.campaignBudget,
        budgetType: value.campaignBudgetType,
        deliveryPace: value.campaignDeliveryPace,
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    // 広告グループの作成
    const adGroup = await tx
      .insertInto('adGroups')
      .values({
        id: createId(),
        advertiserId,
        campaignId: campaign.id,
        name: value.adGroupName,
        bidPriceCpm: value.adGroupBidPriceCpm,
        frequencyCapImpressions: value.adGroupFrequencyCapImpression,
        frequencyCapWindow: value.adGroupFrequencyCapWindow,
        frequencyCapUnit: value.adGroupFrequencyCapUnit,
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    // 広告の作成
    const adId = createId()
    const adKey = `c/${campaign.id}/ag/${adGroup.id}/a/${adId}`
    // r2 にアップロード
    await env.R2.put(adKey, value.adMediaFile, {
      httpMetadata: { contentType: value.adMimeType },
    })
    const ad = await tx
      .insertInto('ads')
      .values({
        id: adId,
        advertiserId,
        adGroupId: adGroup.id,
        type: value.adType,
        url: `${env.CREATIVE_BASE_URL}${adKey}`,
        duration: value.adDuration,
        mimeType: value.adMimeType,
        description: value.adDescription,
        clickThroughUrl: value.adClickThroughUrl,
      })
      .executeTakeFirst()

    // コンパニオン・バナーの作成
    const companionBanners: Selectable<DB['companionBanners']>[] = []
    for (const cb of value.companionBanners) {
      const cbId = createId()
      const companionBannerKey = `c/${campaign.id}/ag/${adGroup.id}/a/${adId}/cb/${cbId}`
      // r2 にアップロード
      await env.R2.put(companionBannerKey, cb.mediaFile, {
        httpMetadata: { contentType: cb.mimeType },
      })
      const companionBanner = await tx
        .insertInto('companionBanners')
        .values({
          id: cbId,
          adId: adId,
          url: `${env.CREATIVE_BASE_URL}${companionBannerKey}`,
          mimeType: cb.mimeType,
          width: cb.width,
          height: cb.height,
        })
        .returningAll()
        .executeTakeFirstOrThrow()
      companionBanners.push(companionBanner)
    }

    return { campaign, adGroup, ad, companionBanners }
  })
}
