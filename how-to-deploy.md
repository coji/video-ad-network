# Turso データベースの作成とアクセストークン発行

video-ad-network は データベースとして Turso を使用しています。

以下の操作において、turso を組織(team)で利用する場合は turso cli で先に `turso org switch <organization-slug>`で組織のコンテキストを設定しておく必要があります。
turso をパーソナルアカウントで利用する場合はそのままで構いません。

## Turso データベースの作成

以下のコマンドで作成します。(video-ad-network というデータベース名で作成する場合)

```sh
turso db create video-ad-network
```

出力

```sh
Created database admel at group default in 6.487s.

Start an interactive SQL shell with:

   turso db shell video-ad-network

To see information about the database, including a connection URL, run:

   turso db show video-ad-network

To get an authentication token for the database, run:

   turso db tokens create video-ad-network
```

### Turso データベースURLの確認

コマンド

```sh
turso db show video-ad-network
```

出力

```sh
Name:           video-ad-network
URL:            libsql://video-ad-network-mizoguchicoji.turso.io
ID:             5d79dc26-57f3-4964-8ada-fcbc0eab0db7
Group:          default
Version:        0.24.30
Locations:      hkg
Size:           4.1 kB
Archived:       No
Bytes Synced:   0 B
Is Schema:      No

Database Instances:
NAME     TYPE        LOCATION 
hkg      primary     hkg 
```

### Turso データベースアクセストークンの発行

コマンド

```sh
turso db tokens create video-ad-network
```

出力

```sh
aB3-dE5fG7hI9jK1lM2nO4pQ6rS8tU0vW1xY.3zA5bC7dE9-fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA0bC2dE4fG6hI8jK0lM2nO4pQ6rS8tU0vW1xY3zA5.bC7dE9-fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA0bC2dE4fG6hI8jK0lM2
```

# Cloudflare Workers の環境設定設定

Cloudflare Workers で使う secret や環境変数を設定します。

secret はWorkers アプリでサーバ側環境変数として取得できる内容ですが、内容が暗号化され Cloudflare 側に保存されるものです。admel-server では、Turso の DB アクセス情報や、Clerk のキーを secret で定義して使います。

環境変数は secret と似ていますが、公開される情報です。admel-server は TRACKER_ORIGIN というトラッキングのためのオリジンURLを環境変数で設定するようになっています。

以下、リポジトリルートディレクトリで、ターミナルを使って作業します。

## Cloudflare CLI でのログイン

まず、Cloudflare Workers の CLI である wrangler コマンドで Cloudflare にログインしておきます。

```sh
pnpm -C apps/ad-server exec wrangler login
```

ブラウザが立ち上がり "Allow Wrangler to make changes to your Cloudflare account?" という確認が表示されるので、"Allow" をクリックし、ターミナルに戻ります。

## ad-server の secret 設定

ad-server の secret として以下を設定します。

1. DATABASE_URL
2. TURSO_AUTH_TOKEN

```sh
pnpm -C apps/ad-server exec wrangler secret put TURSO_DATABASE_URL
```

`? Enter a secret value:` と表示されるので、Turso のデータベースURLを入力します。

```sh
? Enter a secret value: libsql://admel-mizoguchicoji.turso.io
```

※ 実際に入力した値は *** でマスクされます。
Worker が作成されていない状態なので、"ad-server" Worker を作成するか確認が入るので、`y` を入力します。

```sh
🌀 Creating the secret for the Worker "ad-server" 
✔ There doesn't seem to be a Worker called "ad-server". Do you want to create a new Worker with that name and add secrets to it? … 
```

以下のように Worker が新しく作成され、secret がアップロードされた旨表示されれば成功です。

```sh
🌀 Creating new Worker "ad-server"...
✨ Success! Uploaded secret TURSO_DATABASE_URL
```

以下、同様に TURSO_AUTH_TOKEN も設定します。

```sh
pnpm -C apps/ad-server exec wrangler secret put TURSO_AUTH_TOKEN
```

```sh

 ⛅️ wrangler 3.99.0 (update available 3.101.0)
--------------------------------------------------------

✔ Enter a secret value: … ***************************************************************************************************************************************************************************************************************
🌀 Creating the secret for the Worker "ad-server" 
✨ Success! Uploaded secret TURSO_AUTH_TOKEN
```

## ad-server の環境変数変更

`apps/ad-server/wrangler.toml` ファイル内に、公開情報としての環境変数で `TRACKER_ORIGIN` というものが定義されています。これを ad-server の公開URLに変更する必要があります。

```toml
[vars]
TRACKER_ORIGIN = "https://ad-server.mizoguchi-coji.workers.dev"
```

上記のホスト名は実際にデプロイしたあとで、Workers でサーバ用に独自ドメインを割り当てたあと更新し、デプロイすることで反映されます。

## ui の secret 設定

ad-server 同様に必要な以下の secret を設定していきます。

1. TURSO_DATABASE_URL
2. TURSO_AUTH_TOKEN
3. VITE_CLERK_PUBLISHABLE_KEY
4. CLERK_SECRET_KEY
5. CLERK_WEBHOOK_SECRET

```sh
pnpm -C apps/ui exec wrangler secret put TURSO_DATABASE_URL
```

```sh
pnpm -C apps/ui exec wrangler secret put TURSO_AUTH_TOKEN
```

以下は UI の認証に使う Clerk 関連のものです。
Clerk で Production 環境を追加した上でキーを発行した内容を使いますが、
Clerk の Production 環境の作成は一度デプロイして URL を決める必要がありますので、
あとから設定することになります。

```sh
pnpm -C apps/ui exec wrangler secret put VITE_CLERK_PUBLISHABLE_KEY
```

```sh
pnpm -C apps/ui exec wrangler secret put CLERK_SECRET_KEY
```

以下は Clerk からの Webhook を検証するためのキーになります。Clerk Production 環境にて Webhook の設定をすると発行されますが、まずは ui をデプロイして Webhook を受ける URL を準備する必要があるので、あとから設定することになります。

```sh
pnpm -C apps/ad-server exec wrangler secret put CLERK_WEBHOOK_SECRET
```

# デプロイ

以下のコマンドで ad-server と ui をまとめてビルド・デプロイします。

```sh
pnpm run deploy
```

以下のように出力されて、デプロイ後のURLが表示されます。

```sh
 ⛅️ wrangler 3.99.0 (update available 3.101.0)
--------------------------------------------------------

🌀 Building list of assets...
🌀 Starting asset upload...
🌀 Found 11 new or modified static assets to upload. Proceeding with upload...
+ /index.html
+ /example/media1.html
+ /example/ads/example_companion_banner2.png
+ /example/ads/example_video2.mp4
+ /example/media2.html
+ /js/ad-sdk.js
+ /example/ads/example_companion_banner1.png
+ /example/ads/example_video1.mp4
+ /example/media3.html
+ /example/ads/example_companion_banner3.png
+ /example/ads/example_audio1.m4a
Uploaded 3 of 11 assets
Uploaded 7 of 11 assets
Uploaded 11 of 11 assets
✨ Success! Uploaded 11 files (15.32 sec)

Total Upload: 285.91 KiB / gzip: 70.82 KiB
Worker Startup Time: 14 ms
Your worker has access to the following bindings:
- Vars:
  - TRACKER_ORIGIN: "https://ad-server.mizoguchi-coji.work..."
Uploaded ad-server (21.05 sec)
Deployed ad-server triggers (0.72 sec)
  https://ad-server.mizoguchi-coji.workers.dev
Current Version ID: 7bf13859-3b01-4e07-9635-9be9181a72c4

> video-ad-network@1.0.0 deploy:ui /Users/coji/tmp/video-ad-network
> pnpm run --filter @video-ad-network/ui deploy


> @video-ad-network/ui@ deploy /Users/coji/tmp/video-ad-network/apps/ui
> NODE_ENV=production wrangler deploy


 ⛅️ wrangler 3.99.0 (update available 3.101.0)
--------------------------------------------------------

Running custom build: pnpm run build

> @video-ad-network/ui@ build /Users/coji/tmp/video-ad-network/apps/ui
> react-router build

Using vars defined in .dev.vars
Using vars defined in .dev.vars
Using vars defined in .dev.vars
Using vars defined in .dev.vars
vite v5.4.11 building for production...
✓ 2100 modules transformed.
Generated an empty chunk: "route".
Generated an empty chunk: "index".
build/client/.vite/manifest.json                  7.09 kB │ gzip:  0.88 kB
build/client/assets/root-CSXic_Zd.css             0.83 kB │ gzip:  0.40 kB
build/client/assets/tailwind-BauXAnYH.css        46.37 kB │ gzip:  8.40 kB
build/client/assets/route-l0sNRNKZ.js             0.00 kB │ gzip:  0.02 kB
build/client/assets/index-l0sNRNKZ.js             0.00 kB │ gzip:  0.02 kB
build/client/assets/stack-mg25pkm6.js             0.14 kB │ gzip:  0.13 kB
build/client/assets/route-CRO0z4l8.js             0.20 kB │ gzip:  0.20 kB
build/client/assets/with-props-BgFykSm7.js        0.22 kB │ gzip:  0.19 kB
build/client/assets/logout-C2koZtBr.js            0.23 kB │ gzip:  0.19 kB
build/client/assets/_layout-ClMr415h.js           0.25 kB │ gzip:  0.22 kB
build/client/assets/badge-Cz45HORn.js             0.76 kB │ gzip:  0.41 kB
build/client/assets/route-DtfIso0t.js             0.85 kB │ gzip:  0.47 kB
build/client/assets/login-CQ1GoomT.js             0.89 kB │ gzip:  0.48 kB
build/client/assets/route-DGmbCHZK.js             1.01 kB │ gzip:  0.55 kB
build/client/assets/route-Czibsv0v.js             1.24 kB │ gzip:  0.67 kB
build/client/assets/table-D1SAjBjY.js             2.53 kB │ gzip:  0.75 kB
build/client/assets/index-CZChTeMa.js             3.83 kB │ gzip:  1.51 kB
build/client/assets/route-C6XympGS.js             4.00 kB │ gzip:  1.51 kB
build/client/assets/route-DINPQ_O9.js             7.52 kB │ gzip:  2.91 kB
build/client/assets/root-DUiFdwPU.js             10.08 kB │ gzip:  4.25 kB
build/client/assets/route-DJxWhODh.js            25.73 kB │ gzip:  7.56 kB
build/client/assets/index-DJBJEWsN.js            70.94 kB │ gzip: 19.54 kB
build/client/assets/chunk-K6AXKMTT-BpMCkAfG.js  105.99 kB │ gzip: 35.83 kB
build/client/assets/sidebar-BjR9icb8.js         109.14 kB │ gzip: 35.98 kB
build/client/assets/entry.client-C9x4Xeh1.js    175.05 kB │ gzip: 55.88 kB
✓ built in 2.09s
Using vars defined in .dev.vars
Using vars defined in .dev.vars
vite v5.4.11 building SSR bundle for production...
✓ 357 modules transformed.
build/server/.vite/manifest.json                 0.47 kB
build/server/assets/server-build-CSXic_Zd.css    0.83 kB
build/server/assets/tailwind-BauXAnYH.css       46.37 kB
build/server/index.js                          268.90 kB
✓ built in 505ms
🌀 Building list of assets...
🌀 Starting asset upload...
🌀 Found 28 new or modified static assets to upload. Proceeding with upload...
+ /assets/index-l0sNRNKZ.js
+ /assets/route-CRO0z4l8.js
+ /assets/_layout-ClMr415h.js
+ /assets/login-CQ1GoomT.js
+ /assets/route-Czibsv0v.js
+ /assets/route-C6XympGS.js
+ /assets/route-DINPQ_O9.js
+ /assets/route-DJxWhODh.js
+ /logo-dark.png
+ /assets/entry.client-C9x4Xeh1.js
+ /assets/index-l0sNRNKZ.js
+ /assets/with-props-BgFykSm7.js
+ /assets/badge-Cz45HORn.js
+ /assets/route-DtfIso0t.js
+ /assets/table-D1SAjBjY.js
+ /assets/manifest-4fe0b9cf.js
+ /assets/root-DUiFdwPU.js
+ /assets/tailwind-BauXAnYH.css
+ /assets/chunk-K6AXKMTT-BpMCkAfG.js
+ /assets/stack-mg25pkm6.js
+ /assets/logout-C2koZtBr.js
+ /assets/root-CSXic_Zd.css
+ /assets/route-DGmbCHZK.js
+ /assets/index-CZChTeMa.js
+ /logo-light.png
+ /favicon.ico
+ /assets/index-DJBJEWsN.js
+ /assets/sidebar-BjR9icb8.js
Uploaded 9 of 28 assets
Uploaded 18 of 28 assets
Uploaded 28 of 28 assets
✨ Success! Uploaded 28 files (1.78 sec)

Total Upload: 3393.79 KiB / gzip: 439.19 KiB
Worker Startup Time: 60 ms
Uploaded ui (8.96 sec)
Deployed ui triggers (0.67 sec)
  https://ui.mizoguchi-coji.workers.dev
Current Version ID: 73aa3311-ad75-48dc-87e3-96bde4e01c34
```
