import type { Selectable } from 'kysely'
import type { getDB, DB } from '~/services/db'

export type CompanionBanner = Selectable<DB['companionBanners']>

export async function getCompanionBanners(
	db: ReturnType<typeof getDB>,
	adId: string,
): Promise<CompanionBanner[]> {
	return await db
		.selectFrom('companionBanners')
		.selectAll()
		.where('adId', '==', adId)
		.execute()
}
