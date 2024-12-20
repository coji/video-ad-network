
# Video Ad Network Project

## 目次

1. [概要](#概要)
2. [プロジェクト構造](#プロジェクト構造)
3. [必要条件](#必要条件)
4. [セットアップ](#セットアップ)
5. [データベースの設定（ad-server）](#データベースの設定ad-server)
6. [Clerk の初期設定 (ui)](#clerk-の初期設定-ui)
7. [開発](#開発)
8. [ビルド](#ビルド)
9. [リンティングとフォーマット](#リンティングとフォーマット)
10. [テスト](#テスト)
11. [デプロイ](#デプロイ)
12. [貢献](#貢献)
13. [ライセンス](#ライセンス)

## 概要

このプロジェクトは、ビデオ広告ネットワークのためのマイクロサービスアーキテクチャを採用したシステムです。広告配信サーバー、管理用UI、SDKなどの機能を提供します。主要コンポーネントには、Cloudflare Workers上で動作する広告配信サーバー、Remix製の管理用UI、そしてクライアント側で使用する広告SDKが含まれます。

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

- Node.js (バージョン 20 以上)
- pnpm (バージョン 9.11.0 以上)
- Cloudflare アカウント (ad-server, ui用)
- Turso アカウント (データベース用)
- Clerk アカウント (認証用)

## セットアップ

1. リポジトリをクローンします:

   ```sh
   git clone https://github.com/coji/video-ad-network.git
   cd video-ad-network
   ```

2. 依存関係をインストールします:

   ```sh
   pnpm install
   ```

3. 各コンポーネントの設定を行います（以下のセクションを参照）。

## データベースの設定（ad-server）

ad-serverアプリケーションでは、Tursoデータベースを使用しています。

1. Turso CLI をインストールします:

   ```sh
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

2. Tursoにログインします:

   ```sh
   turso auth login
   ```

3. データベースを作成します:

   ```sh
   turso db create video-ad-network
   ```

4. データベースのURLとトークンを取得します:

   ```sh
   turso db show video-ad-network --url
   turso db tokens create video-ad-network
   ```

5. `apps/ad-server/.dev.vars.example` を `apps/ad-server/.dev.vars` にリネームし、取得したURLとトークンを設定します:

   ```sh
   TURSO_DATABASE_URL = "取得したURL"
   TURSO_AUTH_TOKEN = "取得したトークン"
   ```

6. 本番環境用のデータベースを作成します。(本番環境用は別のリージョンのデータベースにするのがお勧めです)

    ```sh
   turso db create video-ad-network-prod --region nrt
   ```

7. 本番環境用のデータベースのURLとトークンを取得します。

    ```sh
   turso db show video-ad-network-prod --url
   turso db tokens create video-ad-network-prod
   ```

8. 取得したURLとトークンを`apps/ad-server/wrangler.toml`に設定します。

    ```sh
    [vars]
    TRACKER_ORIGIN = "https://ad-server.van.techtalk.jp"
    TURSO_DATABASE_URL = "<your_production_database_url>" # ここ
    TURSO_AUTH_TOKEN = "<your_production_auth_token>" # ここ
    ```

9. マイグレーションを実行します:

   ```sh
   pnpm --filter @video-ad-network/ad-server run db:migration:local
   ```

10. シードデータを挿入します:

    ```sh
    pnpm --filter @video-ad-network/ad-server run db:seed:local
    ```

注意: 本番環境にデプロイする際は、以下のコマンドを使用してください：

```sh
pnpm --filter @video-ad-network/ad-server run db:migration:remote
pnpm --filter @video-ad-network/ad-server run db:seed:remote
```

## Clerk の初期設定 (ui)

uiアプリケーションでは、認証にClerkを使用しています。以下の手順でClerkの初期設定を行ってください：

1. Clerkのアカウントを作成し、アプリケーションを作成します。
2. アプリケーションダッシュボードから、`Publishable Key` と `Secret Key` を取得します。
3. `apps/ui/.dev.vars.example`を`apps/ui/.dev.vars`にリネームし、取得したキーを設定します。

    ```sh
    CLERK_PUBLISHABLE_KEY="取得したPublishable Key"
    CLERK_SECRET_KEY="取得したSecret Key"
    ```

4. `apps/ui/wrangler.toml`に本番用のキーを設定します。

    ```sh
    [vars]
    TRACKER_ORIGIN = "https://ad-server.van.techtalk.jp"
    CLERK_PUBLISHABLE_KEY = "<your_production_publishable_key>" # ここ
    CLERK_SECRET_KEY = "<your_production_secret_key>" # ここ
    TURSO_DATABASE_URL = "<your_production_database_url>"
    TURSO_AUTH_TOKEN = "<your_production_auth_token>"
    ```

## 開発

プロジェクト全体の開発サーバーを起動するには、以下のコマンドを実行します：

```sh
pnpm run dev
```

これにより、Turboを使用して全てのアプリケーションの開発サーバーが並行して起動されます。

各アプリケーションの開発サーバーを個別に起動する場合は、以下のコマンドを使用します：

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

プロジェクト全体をビルドするには、以下のコマンドを実行します：

```sh
pnpm run build
```

これにより、Turboを使用して全てのアプリケーションがビルドされます。

各アプリケーションを個別にビルドする場合は、以下のコマンドを使用します：

### ad-server

```sh
pnpm --filter @video-ad-network/ad-server run build
```

### ui

```sh
pnpm --filter @video-ad-network/ui run build
```

### ad-sdk

```sh
pnpm --filter @video-ad-network/ad-sdk run build
```

## リンティングとフォーマット

コードのリンティングとフォーマットを行うには、以下のコマンドを実行します：

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

プロジェクト全体のテストを実行するには、以下のコマンドを使用します：

```sh
pnpm run test
```

これにより、Turboを使用して全てのアプリケーションのテストが実行されます。

各アプリケーションのテストを個別に実行する場合は、以下のコマンドを使用します：

### ad-server

```sh
pnpm --filter @video-ad-network/ad-server run test
```

### ui

```sh
pnpm --filter @video-ad-network/ui run test
```

### ad-sdk

```sh
pnpm --filter @video-ad-network/ad-sdk run test
```

## デプロイ

プロジェクト全体をデプロイするには、以下のコマンドを実行します：

```sh
pnpm run deploy
```

これにより、`ad-server`と`ui`の両方が順番にデプロイされます。

個別のアプリケーションをデプロイする場合は、以下のコマンドを使用します：

### ad-server のデプロイ

```sh
pnpm run deploy:ad-server
```

このコマンドは、Cloudflare Workers に ad-server をデプロイします。デプロイ前に、Cloudflare の認証情報が正しく設定されていることを確認してください。

### ui のデプロイ

```sh
pnpm run deploy:ui
```

このコマンドは、Cloudflare Workers に ui をデプロイします。デプロイ前に、Cloudflare の認証情報が正しく設定されていることを確認してください。

注意: 初回デプロイ時や設定変更時には、追加の手順や確認が必要な場合があります。各プラットフォーム（Cloudflare Workers）のドキュメントを参照してください。

## 貢献

プロジェクトへの貢献は大歓迎です。以下の手順に従ってください：

1. このリポジトリをフォークします。
2. 新しいブランチを作成します（`git checkout -b feature/AmazingFeature`）。
3. 変更をコミットします（`git commit -m 'Add some AmazingFeature'`）。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細はLICENSEファイルを参照してください。
