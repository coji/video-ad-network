import type { Selectable } from 'kysely'
import type { getDB, DB } from '../services/db'

export async function getCompanionBanners(
	db: ReturnType<typeof getDB>,
	adId: string,
): Promise<Selectable<DB['companionBanners']>[]> {
	return await db
		.selectFrom('companionBanners')
		.selectAll()
		.where('adId', '==', adId)
		.execute()
}
