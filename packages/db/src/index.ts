import {
	CamelCasePlugin,
	Kysely,
	ParseJSONResultsPlugin,
	DeduplicateJoinsPlugin,
	type sql,
} from 'kysely'
import { LibsqlDialect } from '@libsql/kysely-libsql'
import type { DB } from './database-schema'
export { Kysely, type sql, type DB }

export const getDB = (env: {
	TURSO_DATABASE_URL: string
	TURSO_AUTH_TOKEN: string
}) => {
	const kysely = new Kysely<DB>({
		dialect: new LibsqlDialect({
			url: env.TURSO_DATABASE_URL,
			authToken: env.TURSO_AUTH_TOKEN,
		}),
		plugins: [
			new CamelCasePlugin(),
			new ParseJSONResultsPlugin(),
			new DeduplicateJoinsPlugin(),
		],
	})
	return kysely
}
