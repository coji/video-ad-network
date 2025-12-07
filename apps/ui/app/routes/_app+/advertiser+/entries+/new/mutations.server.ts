import { createId } from '@paralleldrive/cuid2'
import type { DB, Kysely, Selectable } from '@video-ad-network/db'
import { env } from 'cloudflare:workers'
import dayjs from 'dayjs'
import type { z } from 'zod/v4'
import { serializeDateTime } from '~/lib/datetime'
import type { schema } from './route'

export const submitEntries = async (
  db: Kysely<DB>,
  advertiserId: string,
  value: z.infer<typeof schema>,
) => {
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
          dayjs(value.campaignEndAt)
            .add(1, 'day')
            .subtract(1, 'second')
            .toDate(), // 終了日の 23:59:59 にする
          value.tzOffset,
        ),
        budget: String(value.campaignBudget),
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
        bidPriceCpm: String(value.adGroupBidPriceCpm),
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
      .executeTakeFirstOrThrow()

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
          clickThroughUrl: value.adClickThroughUrl, // 広告のクリックスルー URL をそのまま使う
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
