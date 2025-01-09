import type { DB, Kysely } from '@video-ad-network/db'

export const getAdSlot = async (
  db: Kysely<DB>,
  mediaId: string,
  adSlotId: string,
) => {
  const adSlot = await db
    .selectFrom('adSlots')
    .innerJoin('media', 'adSlots.mediaId', 'media.id')
    .select([
      'adSlots.id',
      'adSlots.mediaId',
      'adSlots.name',
      'adSlots.type',
      'media.categories as categories',
    ])
    .where('adSlots.id', '==', adSlotId)
    .where('adSlots.mediaId', '==', mediaId)
    .executeTakeFirst()

  if (!adSlot) {
    return null
  }

  const companionSlots = await db
    .selectFrom('companionSlots')
    .select(['id', 'width', 'height'])
    .where('adSlotId', '==', adSlotId)
    .execute()

  return {
    adSlot,
    companionSlots,
    categories: adSlot.categories as string[] | null,
    mediaType: adSlot.type,
    companionSizes: companionSlots.map((cs) => ({
      width: cs.width,
      height: cs.height,
    })),
  }
}
