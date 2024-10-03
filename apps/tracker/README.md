
# tracker

動画広告を視聴した impression や progress イベントを BigQuery に記録するための API です。

## 起動方法

```sh
pnpm install
pnpm run dev
```

```sh
open http://localhost:5173
```

## BigQuery設定手順

### 1. GCPでサービスアカウントを作成

Google Cloud Consoleで新しいサービスアカウントを作成し、必要な権限（BigQuery JobUser、BigQuery DataEditor など）を付与

### 2. サービスアカウントキー（JSON）をダウンロード

### 3. JSONキーの内容をFly.ioの秘密として設定

fly secrets set GOOGLE_APPLICATION_CREDENTIALS_JSON="$(cat path/to/your-service-account-key.json)"

### 4. Fly.ioアプリケーションの再デプロイ

fly deploy
