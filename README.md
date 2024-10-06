# Video Ad Network Project

## 目次

1. [概要](#概要)
2. [プロジェクト構造](#プロジェクト構造)
3. [必要条件](#必要条件)
4. [セットアップ](#セットアップ)
5. [D1データベースの設定（ad-server）](#d1データベースの設定ad-server)
6. [BigQuery の初期設定（tracker）](#bigquery-の初期設定tracker)
7. [Fly.io での tracker アプリケーションのセットアップ](#flyio-での-tracker-アプリケーションのセットアップ)
8. [開発](#開発)
9. [ビルド](#ビルド)
10. [リンティングとフォーマット](#リンティングとフォーマット)
11. [テスト](#テスト)
12. [デプロイ](#デプロイ)
13. [貢献](#貢献)
14. [ライセンス](#ライセンス)

## 概要

このプロジェクトは、ビデオ広告ネットワークのためのマイクロサービスアーキテクチャを採用したシステムです。広告配信、トラッキング、SDKなどの機能を提供します。主要コンポーネントには、Cloudflare Workers上で動作する広告配信サーバー、Fly.io上でホストされるトラッキングサーバー、そしてクライアント側で使用する広告SDKが含まれます。

## プロジェクト構造

```txt
video-ad-network/
├── apps/
│   ├── ad-server/      # Cloudflare Workers 上の広告配信サーバー
│   └── tracker/        # Fly.io 上のトラッキングサーバー
├── packages/
│   └── ad-sdk/         # クライアント側の広告 SDK
├── infra/
│   └── flyio/
│       └── tracker/    # Fly.io 関連の設定ファイル
└── README.md           # このファイル
```

## 必要条件

- Node.js (バージョン 20 以上)
- pnpm (バージョン 9.11.0 以上)
- Cloudflare アカウント (ad-server 用)
- Google Cloud アカウント (BigQuery 用)
- Fly.io アカウント (tracker 用)

## セットアップ

1. リポジトリをクローンします:

   ```sh
   git clone https://github.com/your-organization/video-ad-network.git
   cd video-ad-network
   ```

2. 依存関係をインストールします:

   ```sh
   pnpm install
   ```

3. 各コンポーネントの設定を行います（以下のセクションを参照）。

## D1データベースの設定（ad-server）

ad-serverアプリケーションでは、Cloudflare D1データベースを使用しています。ローカル開発環境でD1データベースを設定するには、以下の手順に従ってください：

1. Cloudflare アカウントをお持ちでない場合は、作成してください。

2. Wrangler CLI をインストールしていない場合は、以下のコマンドでインストールします:

   ```sh
   pnpm add -g wrangler
   ```

3. Wrangler で Cloudflare にログインします:

   ```sh
   wrangler login
   ```

4. プロジェクトのルートディレクトリにいることを確認します。

5. ローカルD1データベースを作成します:

   ```sh
   pnpm --filter @video-ad-network/ad-server exec wrangler d1 create video-ad-network
   ```

6. `apps/ad-server/wrangler.toml`ファイルにD1データベースの設定を追加します:

   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "video-ad-network"
   database_id = "<your_database_id>"
   ```

   `<your_database_id>` は、データベース作成時に表示された ID に置き換えてください。

7. マイグレーションを実行します:

   ```sh
   pnpm --filter @video-ad-network/ad-server run db:migration:local
   ```

8. シードデータを挿入します:

   ```sh
   pnpm --filter @video-ad-network/ad-server run db:seed:local
   ```

注意: 本番環境にデプロイする際は、以下のコマンドを使用してください：

```sh
pnpm --filter @video-ad-network/ad-server run db:migration:remote
pnpm --filter @video-ad-network/ad-server run db:seed:remote
```

## BigQuery の初期設定（tracker）

tracker アプリケーションは BigQuery を使用してデータを保存します。以下の手順で BigQuery の初期設定を行ってください：

1. Google Cloud Console (https://console.cloud.google.com/) にアクセスし、新しいプロジェクトを作成するか、既存のプロジェクトを選択します。

2. 左側のメニューから「APIとサービス」>「ライブラリ」に移動し、"BigQuery API" を検索して有効にします。

3. 左側のメニューから「IAMと管理」>「サービスアカウント」に移動し、新しいサービスアカウントを作成します。

4. サービスアカウントに「BigQuery 管理者」ロールを付与します。

5. サービスアカウントの詳細ページで「鍵を作成」をクリックし、JSONキーをダウンロードします。

6. プロジェクトのルートディレクトリに `.env` ファイルを作成し、以下の環境変数を設定します：

   ```sh
   BQ_SERVICE_ACCOUNT_CREDENTIALS=<one-line-json-content>
   ```

   `<one-line-json-content>` は、ダウンロードしたJSONキーファイルの内容を1行にしたものです。以下の手順で作成できます：

   a. JSONファイルの内容をテキストエディタで開きます。

   b. 全ての改行を削除し、内容を1行にします。

   c. ダブルクォーテーション（"）の前にバックスラッシュ（\）を追加してエスケープします。

   d. 結果として得られた1行のJSONを `BQ_SERVICE_ACCOUNT_CREDENTIALS` の値として使用します。

   例：

   ```sh
   BQ_SERVICE_ACCOUNT_CREDENTIALS={"type":"service_account","project_id":"xxxxxx","private_key_id":"xxxxxxxxxxxxxxxxxxx","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIE\\n-----END PRIVATE KEY-----\\n","client_email":"xxxxxxxxxxxxxxxxxxxxx@xxxxxxxxxxxxxxxxxxxxx.iam.gserviceaccount.com","client_id":"xxxxxxxxxxxxxxxxxxxxx","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/xxxxxxxxxx%40xxxxxxxxxx.iam.gserviceaccount.com","universe_domain":"googleapis.com"}
   ```

7. Google Cloud SDK をインストールしていない場合は、公式ドキュメント (https://cloud.google.com/sdk/docs/install) に従ってインストールしてください。

8. BigQuery でデータセットを作成します。データセット名とプロジェクトIDは、アプリケーションのコードで指定されているものを使用してください。例：

   ```sh
   bq mk --dataset your-project-id:your-dataset-name
   ```

   `your-project-id` と `your-dataset-name` は、実際の値に置き換えてください。

注意: プロジェクトIDとデータセット名がアプリケーションコード内で正しく設定されていることを確認してください。これらの値は環境変数ではなく、直接コード内で指定される場合があります。

## Fly.io での tracker アプリケーションのセットアップ

tracker アプリケーションを Fly.io にデプロイするには、以下の手順を実行してください：

1. Fly.io アカウントをお持ちでない場合は、https://fly.io/ で作成してください。

2. Fly CLI をインストールします。インストール方法は、オペレーティングシステムによって異なります。詳細は公式ドキュメント (https://fly.io/docs/hands-on/install-flyctl/) を参照してください。

3. Fly.io にログインします：

   ```sh
   fly auth login
   ```

4. プロジェクトのルートディレクトリに移動します。

5. tracker アプリケーション用の新しい Fly.io アプリを作成します：

   ```sh
   fly apps create video-ad-network-tracker
   ```

6. 必要なシークレットを設定します：

   ```sh
   fly secrets set BQ_SERVICE_ACCOUNT_CREDENTIALS="$(cat path/to/your/service-account-key.json)"
   ```

   `path/to/your/service-account-key.json` は、実際のサービスアカウントキーファイルのパスに置き換えてください。

7. `infra/flyio/tracker/fly.toml` ファイルを確認し、必要に応じて設定を調整します。特に、アプリ名が正しいことを確認してください：

   ```toml
   app = "video-ad-network-tracker"
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

### tracker

```sh
pnpm --filter @video-ad-network/tracker run dev
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

### tracker

```sh
pnpm --filter @video-ad-network/tracker run build
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

### tracker

```sh
pnpm --filter @video-ad-network/tracker run test
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

これにより、`ad-server`と`tracker`の両方が順番にデプロイされます。

個別のアプリケーションをデプロイする場合は、以下のコマンドを使用します：

### ad-server のデプロイ

```sh
pnpm run deploy:ad-server
```

このコマンドは、Cloudflare Workers に ad-server をデプロイします。デプロイ前に、Cloudflare の認証情報が正しく設定されていることを確認してください。

### tracker のデプロイ

```sh
pnpm run deploy:tracker
```

このコマンドは、Fly.io に tracker をデプロイします。デプロイ前に、Fly.io の設定とシークレットが正しく設定されていることを確認してください。

注意: 初回デプロイ時や設定変更時には、追加の手順や確認が必要な場合があります。各プラットフォーム（Cloudflare Workers, Fly.io）のドキュメントを参照してください。

## 貢献

プロジェクトへの貢献は大歓迎です。以下の手順に従ってください：

1. このリポジトリをフォークします。
2. 新しいブランチを作成します（`git checkout -b feature/AmazingFeature`）。
3. 変更をコミットします（`git commit -m 'Add some AmazingFeature'`）。

## [ライセンス](#ライセンス)

このプロジェクトは[ライセンス名]のもとで公開されています。詳細はLICENSEファイルを参照してください。
