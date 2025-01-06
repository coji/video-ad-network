
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
- [Cloudflare](https://www.cloudflare.com/ja-jp/) アカウント (広告配信サーバー, 管理UI用)
- [Turso](https://turso.tech/) アカウント (データベース)
- [Clerk](https://clerk.com/) アカウント (管理UI認証用)

## 開発環境の設定

### コードベースの準備

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

### Clerk Development 環境の準備 (開発チームごとに、初回のみ必要)

Clerk でアカウントを作成し、今回のアプリケーションを新たに作成します。
ローカル開発環境での初期 organization / user を作成するために、Clerk アプリケーション作成直後に準備されている "Development" インスタンスで以下の設定を行います。

1. Users で開発者全員のユーザアカウントを招待/作成します。
2. Enable Organizations (Default ability to delete, Allow users to create organizations を無効に)
3. 開発環境での seed データとして使うため、Organization を適当な名前で２つ作成します。slug は空欄で構いません。
4. 作成した２つの Organization それぞれの設定にて、 public organization metadata に以下を設定することで、管理UIでの広告主メニュー・媒体社メニューそれぞれを有効にします。

    ```json
    {
      "isMedia": true,
      "isAdvertiser": true
    }
    ```

5. 作成した Organization それぞれで、1. で作成した開発者個人のユーザアカウントを member として追加します。role は Admin にしてください。

### 開発時環境変数を設定

ad-serverアプリケーションでは、本番環境では分散SQLiteデータベースである Turso を使用しますが、ローカル開発環境では SQLite を使用します。ここではローカル開発環境での準備を行います。

1. ad-server アプリのローカル開発環境での環境変数設定を行います。 `apps/ad-server/.dev.vars.example` を `apps/ad-server/.dev.vars` にコピーします。

   ```sh
   TRACKER_ORIGIN = "http://localhost:5173"
   TURSO_DATABASE_URL=file:../../data/dev.db
   TURSO_AUTH_TOKEN=your_auth_token_here
   ```

2. ui アプリのローカル開発環境での環境変数設定を行います。`apps/ui/.dev.vars.example` を `apps/ui/.dev.vars` にコピーし、取得した clerk のキーを設定します。Clerk webhook secret は組織やユーザの追加・削除を動作テストするときに必要になりますが、ここを設定しなくてもその部分以外は動作はします。

    ```sh
    TURSO_DATABASE_URL=file:../../data/dev.db
    TURSO_AUTH_TOKEN=your_turso_auth_token

    CLERK_SECRET_KEY="取得したSecret Key"
    CLERK_WEBHOOK_SECRET="取得した Webhook Secret Key"
    ```

3. データベースモジュールのローカル開発環境での環境変数設定を行います。`packages/db/.env.example` を `packages/db/.env` にコピーし、取得した Clerk のキーを設定します。seed データの作成のために Clerk のキーが必要になります。

    ```sh
    DATABASE_URL=file:../../data/dev.db
    CLERK_SECRET_KEY="取得したSecret Key"
    ```

### ローカル開発用データベースの準備

ローカル開発用の SQLite データベースの準備するには、以下のコマンドを実行します:

```sh
pnpm -C packages/db exec prisma migrate reset
```

## 開発

プロジェクト全体の開発サーバーを起動するには、以下のコマンドを実行します:

```sh
pnpm run dev
```

これにより、ローカルにて、すべてのアプリケーションの開発サーバーが並行して起動されます。

起動したら以下のURLをブラウザで開いて動作確認をしてください。

http://localhost:5173/index.html

各アプリケーションの開発サーバーを個別に起動する場合は、以下のコマンドを使用します:

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

## 本番環境の設定

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

## デプロイ

プロジェクト全体をデプロイするには、以下のコマンドを実行します:

```sh
pnpm run deploy
```

これにより、`ad-server`と`ui`の両方が順番にデプロイされます。

個別のアプリケーションをデプロイする場合は、以下のコマンドを使用します:

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

プロジェクトへの貢献は大歓迎です。以下の手順に従ってください:

1. このリポジトリをフォークします。
2. 新しいブランチを作成します（`git checkout -b feature/AmazingFeature`）。
3. 変更をコミットします（`git commit -m 'Add some AmazingFeature'`）。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細はLICENSEファイルを参照してください。
