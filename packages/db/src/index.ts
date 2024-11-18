import {
	CamelCasePlugin,
	Kysely,
	ParseJSONResultsPlugin,
	DeduplicateJoinsPlugin,
	sql,
	type Selectable,
	type Insertable,
	type Updateable,
} from 'kysely'
import { LibsqlDialect } from '@libsql/kysely-libsql'
import type { DB } from './database-schema'
export { Kysely, sql }
export type { DB, Selectable, Insertable, Updateable }

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
