import { getDB } from '../src'
import { sql } from 'kysely'
import fs from 'node:fs/promises'

const reset = async () => {
	const db = getDB({
		TURSO_DATABASE_URL: 'http://localhost:8080',
		TURSO_AUTH_TOKEN: '',
	})
	const tables = await db.introspection.getTables({
		withInternalKyselyTables: true,
	})
	await sql`PRAGMA foreign_keys=off`.execute(db)
	for (const table of tables) {
		console.log(table.name)
		const query = `DROP TABLE IF EXISTS ${table.name}`
		await sql.raw(query).execute(db)
	}
	await sql`PRAGMA foreign_keys=on`.execute(db)
}

await reset()
