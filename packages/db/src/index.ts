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
export { Kysely, sql }
export type { DB, Insertable, Selectable, Updateable }

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
