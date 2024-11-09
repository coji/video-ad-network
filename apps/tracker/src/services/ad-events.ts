import { bigquery } from './bigquery'

export interface AdEventImpression {
	event_timestamp: string
	event_type: 'impression'
	ad_id: string
	ad_slot_id: string
	media_id: string
	impression_id: string
	ip_address: string
	user_agent: string
}

export interface AdEventProgress {
	event_timestamp: string
	event_type: 'progress'
	ad_id: string
	ad_slot_id: string
	media_id: string
	impression_id: string
	progress: string
	ip_address: string
	user_agent: string
}

export type AdEvent = AdEventImpression | AdEventProgress

export async function recordAdEvents(table: string, rows: AdEvent[]) {
	try {
		await bigquery.dataset('tracker').table(table).insert(rows)
		console.log('Data inserted successfully')
	} catch (error) {
		console.error('Error inserting data:', error)
		// エラーの詳細をログに記録
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		if ((error as any).errors) {
			console.error(
				'Insertion errors:',
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				JSON.stringify((error as any).errors, null, 2),
			)
		}
	}
}
