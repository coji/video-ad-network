# Video Ad Network の技術スタック

---

## このプロジェクトについて

動画・音声広告を配信するアドネットワークをフルスクラッチで構築した。
広告サーバー、管理画面、クライアントSDK、データベース層をモノレポで一元管理している。

---

## 全体構成

4つのパッケージで構成している。

**apps/ad-server** は広告配信APIで、VAST XMLの生成とトラッキングを担当する。
Hono上で動作し、Cloudflare Workersにデプロイしている。

**apps/ui** は広告主とメディア向けの管理画面で、React Router v7で構築した。
キャンペーン管理、広告枠設定、レポート閲覧ができる。

**packages/ad-sdk** はメディアサイトに埋め込むJavaScript SDKで、VAST取得から動画再生、
トラッキング発火までを処理する。

**packages/db** はKyselyによる型安全なデータベース層で、スキーマ定義と
マイグレーションをAtlasで管理している。

---

## 広告配信の流れ

メディアサイトがSDKを読み込み、initializeAdSDKを呼び出す。
SDKは広告サーバーにVASTリクエストを送る。

広告サーバーは配信可能なキャンペーンから広告を選択する。
このときフリークエンシーキャップをCookieベースで判定し、
同じユーザーへの過剰な広告表示を防いでいる。

選択した広告のVAST XMLを生成して返却する。
XMLにはメディアファイルのURL、クリック先URL、各種トラッキングURLが含まれる。

SDKはVASTをパースしてvideo要素を生成し、再生を開始する。
再生開始時にインプレッショントラッカーを発火し、
25%、50%、75%、完了時点でそれぞれ進捗トラッカーを発火する。

---

## VAST XMLの構造

IAB標準のVAST 4.1に準拠している。

InLine要素の中にCreativesがあり、Linear要素で動画本体を定義する。
MediaFilesに動画URL、VideoClicksにクリック先、TrackingEventsに
各進捗ポイントのトラッカーURLを記述する。

CompanionAds要素で付属バナー広告も定義できる。
動画の横に300x250のバナーを表示するといった用途に使う。

---

## トラッキングの仕組み

広告サーバーは4種類のトラッキングエンドポイントを持つ。

/v1/impressionは広告表示完了時に呼ばれ、1x1の透明GIFを返す。
/v1/progressは再生進捗を記録し、progressパラメータで0/25/50/75/100を受け取る。
/v1/clickはクリックを記録した後、広告主のランディングページにリダイレクトする。

すべてのイベントはad_eventsテーブルに記録され、
ユーザー識別にはuid Cookieを使っている。

---

## フリークエンシーキャップ

同じユーザーに同じ広告を何度も見せないための仕組みをCookieで実装した。

ad_frequency Cookieに広告グループごとの表示回数とウィンドウ開始時刻をJSONで保存する。
VASTリクエスト時にこのCookieを読み取り、上限に達していれば別の広告を選択する。

ウィンドウ単位は分、時間、日から選べる。
1時間に3回までといった制御が可能になる。

---

## データベース構成

本番はTurso、開発はローカルのSQLiteを使っている。
TursoはlibSQLベースの分散SQLiteで、エッジからの低遅延アクセスが可能。

スキーマ管理にはAtlasを採用した。
schema.sqlに現在のスキーマを書き、atlas migrate diffで差分マイグレーションを生成する。
Prismaのような自動生成ではなく、SQLを直接書くスタイルになる。

クエリビルダーはKyselyを使い、kysely-codegenでスキーマから型を自動生成している。
CamelCasePluginでSQLのsnake_caseとTypeScriptのcamelCaseを自動変換する。

---

## 管理画面の構成

React Router v7をCloudflare Workers上で動かしている。
認証にはbetter-authを使い、組織ベースのマルチテナントを実現した。

広告主向け画面ではキャンペーン、広告グループ、広告クリエイティブを階層的に管理できる。
メディア向け画面では広告枠とコンパニオンスロットを設定する。

レポート画面ではdaily_reportsテーブルから集計データを表示する。

---

## 開発環境

pnpmワークスペースとTurborepoでモノレポを構成している。
pnpm devで全アプリが起動し、turso devでローカルのlibSQLサーバーが立ち上がる。

Biomeでリント、Prettierでフォーマットを統一している。
型チェックはtscで行い、pnpm validateで全検証を一括実行できる。

---

## デプロイ

GitHub Actionsでmainブランチへのプッシュ時にデプロイが走る。

まずAtlasでTursoにマイグレーションを適用する。
その後wranglerでad-serverとuiをCloudflare Workersにデプロイする。

環境変数はGitHub Secretsで管理し、
TURSO_DATABASE_URL、CLOUDFLARE_API_TOKEN、CLOUDFLARE_ACCOUNT_IDを設定している。

---

## 技術選定のポイント

エッジ実行を前提にした構成にした。
Cloudflare WorkersとTursoの組み合わせでグローバルに低遅延な配信が可能になる。

型安全性を重視した。
KyselyとTypeScriptで実行時エラーを減らし、スキーマ変更時のミスを防いでいる。

標準規格に準拠した。
VAST 4.1対応により、既存の動画プレイヤーやDSPとの連携が容易になる。

---

## まとめ

Cloudflare Workers、Turso、Hono、React Router v7という
モダンなエッジスタックで広告配信システムを構築した。

フリークエンシーキャップやVASTといった広告業界特有の要件も
Cookieとトラッキングエンドポイントで実装できた。

Atlasによる宣言的マイグレーションとKyselyによる型安全なクエリで
データベース周りの開発体験も良好になった。
