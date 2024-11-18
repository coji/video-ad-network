import { getDB } from '../src'
import { sql } from 'kysely'
import fs from 'node:fs/promises'
import path from 'node:path'
import { $ } from 'zx'

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

const migrate = async () => {
	const baseDir = path.resolve(__dirname, '..', 'prisma/migrations')
	const dirs = await fs.readdir(baseDir, {
		withFileTypes: true,
		encoding: 'utf-8',
	})
	for (const dir of dirs) {
		if (!dir.isDirectory()) {
			continue
		}

		const files = await fs.readdir(path.resolve(baseDir, dir.name), {
			withFileTypes: true,
			encoding: 'utf-8',
		})
		for (const file of files) {
			if (!file.isFile()) {
				continue
			}

			console.log(file.parentPath, file.name)
			$`turso db shell http://localhost:8080 < ${path.join(file.parentPath, file.name)}`
		}
	}
}

await migrate()
