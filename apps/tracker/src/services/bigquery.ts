import { BigQuery } from '@google-cloud/bigquery'

const credentials = JSON.parse(
	import.meta.env.VITE_BQ_SERVICE_ACCOUNT_CREDENTIALS || '{}',
)
export const bigquery = new BigQuery({
	credentials: {
		...credentials,
		private_key: credentials.private_key?.replace(/\\n/g, '\n'),
	},
})
