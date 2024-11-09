import {
	CamelCasePlugin,
	Kysely,
	ParseJSONResultsPlugin,
	DeduplicateJoinsPlugin,
	type sql,
} from 'kysely'
import { D1Dialect } from 'kysely-d1'
import type { DB } from './database-schema'
export { Kysely, type sql, type DB }

export const getDB = (db: D1Database) => {
	const kysely = new Kysely<DB>({
		dialect: new D1Dialect({
			database: db,
		}),
		plugins: [
			new CamelCasePlugin(),
			new ParseJSONResultsPlugin(),
			new DeduplicateJoinsPlugin(),
		],
		log: (event) => console.log(event),
	})
	return kysely
}
