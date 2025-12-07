# Database Package

Atlas + Kysely を使用したデータベース管理パッケージです。

## スキーマの変更

1. `schema/schema.sql` を編集
1. マイグレーションファイルを作成:

```sh
pnpm db:diff <migration_name>
```

1. マイグレーションを適用:

```sh
pnpm db:apply
```

1. Kysely 型定義を再生成:

```sh
pnpm db:generate
```

## 開発時のクイック適用

開発中はマイグレーションを作成せずに直接スキーマを適用できます:

```sh
pnpm db:push
```

## 本番環境への適用

```sh
cd packages/db
TURSO_DATABASE_URL="libsql://your-db.turso.io?authToken=your-token" atlas migrate apply --env turso
```
