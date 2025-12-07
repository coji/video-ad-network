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
export { Kysely, sql, LibsqlDialect, CamelCasePlugin }
export type { DB, Insertable, Selectable, Updateable }

// Create dialect with CamelCasePlugin for use with better-auth
export const createDialect = (databaseUrl: string, authToken?: string) => {
  return new LibsqlDialect({
    url: databaseUrl,
    authToken,
  })
}

export const getDB = (databaseUrl: string, authToken?: string) => {
  const kysely = new Kysely<DB>({
    dialect: createDialect(databaseUrl, authToken),
    plugins: [
      new CamelCasePlugin(),
      new ParseJSONResultsPlugin(),
      new DeduplicateJoinsPlugin(),
    ],
  })
  return kysely
}
