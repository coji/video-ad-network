import { LibsqlDialect } from '@libsql/kysely-libsql'
import {
  CamelCasePlugin,
  DeduplicateJoinsPlugin,
  Kysely,
  ParseJSONResultsPlugin,
  sql,
  type Insertable,
  type Selectable,
  type Updateable,
} from 'kysely'
import type { DB } from './database-schema'
export { CamelCasePlugin, Kysely, LibsqlDialect, sql }
export type { DB, Insertable, Selectable, Updateable }

// Create dialect with CamelCasePlugin for use with better-auth
export const createDialect = (databaseUrl: string) => {
  return new LibsqlDialect({
    url: databaseUrl,
  })
}

export const getDB = (databaseUrl: string) => {
  const kysely = new Kysely<DB>({
    dialect: createDialect(databaseUrl),
    plugins: [
      new CamelCasePlugin(),
      new ParseJSONResultsPlugin(),
      new DeduplicateJoinsPlugin(),
    ],
  })
  return kysely
}
