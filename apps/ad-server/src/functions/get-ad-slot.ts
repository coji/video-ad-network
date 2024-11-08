import type { Kysely } from 'kysely'
import type { DB } from '../services/database-schema'

export const getAdSlot = async (
	db: Kysely<DB>,
	mediaId: string,
	adSlotId: string,
) => {
	const adSlot = await db
		.selectFrom('adSlots')
		.innerJoin('medias', 'adSlots.mediaId', 'medias.id')
		.select([
			'adSlots.id',
			'adSlots.mediaId',
			'adSlots.name',
			'adSlots.type',
			'medias.categories',
		])
		.where('adSlots.id', '==', adSlotId)
		.where('adSlots.mediaId', '==', mediaId)
		.executeTakeFirst()

	if (!adSlot) {
		return { adSlot: null, companionSlots: [] }
	}

	const companionSlots = await db
		.selectFrom('companionSlots')
		.select(['id', 'width', 'height'])
		.where('adSlotId', '==', adSlotId)
		.execute()

	return { adSlot, companionSlots }
}
