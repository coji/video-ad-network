# Video Ad Network Project

## 目次

1. [概要](#概要)
2. [プロジェクト構造](#プロジェクト構造)
3. [必要条件](#必要条件)
4. [開発環境の設定](#開発環境の設定)
5. [開発](#開発)
6. [ビルド](#ビルド)
7. [リンティングとフォーマット](#リンティングとフォーマット)
8. [テスト](#テスト)
9. [デプロイ](#デプロイ)
10. [貢献](#貢献)
11. [ライセンス](#ライセンス)

## 概要

このプロジェクトは、動画・音声広告ネットワークのためのマイクロサービスアーキテクチャを採用したシステムです。広告配信サーバー、管理用UI、SDKなどの機能を提供します。主要コンポーネントには、Cloudflare Workers上で動作する広告配信サーバー、React Router v7製の管理用UI、そしてクライアント側で使用する広告SDKが含まれます。

![システム構成概要](docs/video-ad-network.png)

## プロジェクト構造

```txt
video-ad-network/
├── apps/
│   └── ad-server/      # Cloudflare Workers 上の広告配信サーバー
│   └── ui/             # 管理用UI
├── packages/
│   └── ad-sdk/         # クライアント側の広告 SDK
│   └── db/             # データベース関連
└── README.md           # このファイル
```

## 必要条件

- Node.js (バージョン 20 以上) [mise](https://zenn.dev/light_planck/articles/mise-node-20240603) を使ってインストールするのをオススメします。
- pnpm (バージョン 9.11.0 以上) Node.js インストール後に `npm i -g pnpm` でインストールしてください。
- [Atlas CLI](https://atlasgo.io/getting-started#installation) データベースマイグレーション管理ツール。`brew install ariga/tap/atlas` でインストールできます。
- [Cloudflare](https://www.cloudflare.com/ja-jp/) アカウント (広告配信サーバー, 管理UI用)
- [Turso](https://turso.tech/) アカウント (データベース)

## 開発環境の設定

### クイックスタート

1. リポジトリをクローンし、依存関係をインストールします:

   ```sh
   git clone https://github.com/coji/video-ad-network.git
   cd video-ad-network
   pnpm install
   ```

2. 開発環境をセットアップします:

   ```sh
   pnpm run setup
   ```

   これにより以下が自動で行われます:
   - `data/` ディレクトリの作成
   - `apps/ad-server/.dev.vars` の作成
   - `apps/ui/.dev.vars` の作成
   - データベースのスキーマ適用と seed データの投入

3. 開発サーバーを起動します:

   ```sh
   pnpm run dev
   ```

   これにより、ローカル DB サーバー（Turso dev）と全アプリケーションの開発サーバーが同時に起動します。

4. 動作確認:
   - 広告配信サーバー: http://localhost:5173/index.html
   - 管理 UI: http://localhost:5175/

### 環境変数の設定（手動で行う場合）

`pnpm run setup` を使わずに手動で設定する場合は、以下を参照してください。

#### ad-server の環境変数

`apps/ad-server/.dev.vars` を作成:

```sh
TRACKER_ORIGIN=http://localhost:5173
TURSO_DATABASE_URL=http://127.0.0.1:8080
```

#### ui の環境変数

`apps/ui/.dev.vars` を作成:

```sh
TURSO_DATABASE_URL=http://127.0.0.1:8080
BETTER_AUTH_URL=http://localhost:5175
BETTER_AUTH_SECRET="ランダムな秘密鍵（openssl rand -base64 32 で生成）"
```

### データベースの手動セットアップ

```sh
# スキーマの適用と seed データの投入
pnpm db:reset

# または個別に
pnpm db:push        # スキーマの適用のみ
pnpm db:generate    # Kysely 型定義の生成
```

### データベースコマンド一覧

| コマンド                    | 説明                                 |
| --------------------------- | ------------------------------------ |
| `pnpm db:reset`             | DB削除→スキーマ適用→seed投入         |
| `pnpm db:push`              | スキーマを直接適用（開発用）         |
| `pnpm db:seed`              | seedデータを投入                     |
| `pnpm db:diff <name>`       | スキーマ変更からマイグレーション作成 |
| `pnpm db:apply`             | マイグレーション適用                 |
| `pnpm db:status`            | マイグレーション状態確認             |
| `pnpm db:generate`          | DBからKysely型定義を生成             |
| `pnpm db:apply:production`  | 本番DBにマイグレーション適用         |
| `pnpm db:status:production` | 本番DBのマイグレーション状態確認     |
| `pnpm db:seed:production`   | 本番DBにseedデータを投入（確認付き） |

### 管理者ユーザーの作成

開発環境で管理者ユーザーを作成するには:

```sh
pnpm auth:create-admin <email> <password> <name>
```

例:

```sh
pnpm auth:create-admin admin@example.com mypassword123 "Admin User"
```

## 開発

### 全体の起動

```sh
pnpm run dev
```

これにより以下が同時に起動します:

- **db**: ローカル SQLite DB サーバー（Turso dev、ポート 8080）
- **ad-server**: 広告配信サーバー（ポート 5173）
- **ui**: 管理 UI（ポート 5175）

### 個別の起動

```sh
# DB サーバーのみ
pnpm run dev:db

# アプリのみ（DB は別途起動が必要）
pnpm run dev:apps
```

### 各アプリケーションの個別起動

### ad-server

```sh
pnpm --filter @video-ad-network/ad-server run dev
```

### ui

```sh
pnpm --filter @video-ad-network/ui run dev
```

### ad-sdk

```sh
pnpm --filter @video-ad-network/ad-sdk run dev
```

## ビルド

プロジェクト全体をビルドするには、以下のコマンドを実行します:

```sh
pnpm run build
```

これにより、Turboを使用して全てのアプリケーションがビルドされます。

各アプリケーションを個別にビルドする場合は、以下のコマンドを使用します:

### ビルド: ad-server

```sh
pnpm --filter @video-ad-network/ad-server run build
```

### ビルド: ui

```sh
pnpm --filter @video-ad-network/ui run build
```

### ビルド: ad-sdk

```sh
pnpm --filter @video-ad-network/ad-sdk run build
```

## リンティングとフォーマット

コードのリンティングとフォーマットを行うには、以下のコマンドを実行します:

### リンティング

```sh
pnpm run lint
```

### フォーマット

```sh
pnpm run format
```

これらのコマンドは、Turboを使用してすべてのパッケージとアプリケーションに対してリンティングとフォーマットを実行します。

## テスト

プロジェクト全体のテストを実行するには、以下のコマンドを使用します:

```sh
pnpm run test
```

これにより、Turboを使用して全てのアプリケーションのテストが実行されます。

各アプリケーションのテストを個別に実行する場合は、以下のコマンドを使用します:

### テスト: ad-server

```sh
pnpm --filter @video-ad-network/ad-server run test
```

### テスト: ui

```sh
pnpm --filter @video-ad-network/ui run test
```

### テスト: ad-sdk

```sh
pnpm --filter @video-ad-network/ad-sdk run test
```

## デプロイ

### 初回セットアップ（Turso データベース）

1. Turso CLI をインストール:

   ```sh
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

2. Turso にログイン:

   ```sh
   turso auth login
   ```

3. データベースを作成:

   ```sh
   turso db create video-ad-network
   ```

4. `.env.production` を設定:

   ```sh
   cp .env.production.example .env.production
   ```

   `.env.production` に本番の Turso 接続情報を設定:

   ```sh
   # turso db show video-ad-network --url でURLを取得
   # turso db tokens create video-ad-network でトークンを取得
   TURSO_DATABASE_URL="libsql://your-db.turso.io?authToken=your-token"
   ```

5. 本番 DB にマイグレーションを適用:

   ```sh
   pnpm db:apply:production
   ```

6. 管理者ユーザーを作成:

   ```sh
   pnpm auth:create-admin:production admin@example.com your-secure-password "Admin User"
   ```

### アプリケーションのデプロイ

プロジェクト全体をデプロイ:

```sh
pnpm run deploy
```

これにより、`ad-server`と`ui`の両方が順番にデプロイされます。

個別にデプロイする場合:

```sh
# ad-server のみ
pnpm run deploy:ad-server

# ui のみ
pnpm run deploy:ui
```

注意: デプロイ前に Cloudflare の認証情報が正しく設定されていることを確認してください。

### 本番 DB コマンド一覧

| コマンド                            | 説明                           |
| ----------------------------------- | ------------------------------ |
| `pnpm db:status:production`         | マイグレーション状態確認       |
| `pnpm db:apply:production`          | マイグレーション適用           |
| `pnpm db:seed:production`           | seed データ投入（確認付き）    |
| `pnpm auth:create-admin:production` | 管理者ユーザー作成（確認付き） |

**注意**: `:production` サフィックスのコマンドは実行前に確認プロンプトが表示されます。

## 貢献

プロジェクトへの貢献は大歓迎です。以下の手順に従ってください:

1. このリポジトリをフォークします。
2. 新しいブランチを作成します（`git checkout -b feature/AmazingFeature`）。
3. 変更をコミットします（`git commit -m 'Add some AmazingFeature'`）。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細はLICENSEファイルを参照してください。
