# Clerk → better-auth 移行計画

## 概要

現在の Clerk ベースの認証を better-auth に移行する。

### 移行理由

- セルフホスト可能
- より柔軟なカスタマイズ
- コスト削減

### 使用プラグイン

- `organization` - 組織管理（招待機能含む）
- `admin` - 管理者機能
- email/password - 標準認証

## 現状の Clerk 実装

### 依存パッケージ

- `@clerk/react-router` - React Router 統合
- `svix` - Webhook 署名検証

### 主要ファイル

```
apps/ui/
├── app/
│   ├── root.tsx                    # ClerkProvider, rootAuthLoader
│   ├── services/
│   │   └── auth.server.ts          # getUser, requireUser, requireOrgUser
│   └── routes/
│       ├── _auth+/
│       │   ├── login.tsx           # SignIn コンポーネント
│       │   ├── logout.tsx          # SignOutButton
│       │   └── webhook.clerk/      # Webhook ハンドラー
│       └── _app+/
│           └── _layout/
│               └── app-sidebar.tsx # OrganizationSwitcher, UserButton
```

### DB スキーマ（Clerk 同期用）

- `User` - Clerk ユーザー ID、メール
- `Organization` - Clerk 組織 ID、名前
- `OrganizationMembership` - ユーザーと組織の関連

### ロール管理

- `organization.publicMetadata.isAdvertiser` - 広告主フラグ
- `organization.publicMetadata.isMedia` - メディアフラグ
- `organizationMemberships.role` - org:admin, org:member

## better-auth 構成

### パッケージ

```json
{
  "dependencies": {
    "better-auth": "^1.2.x"
  }
}
```

### サーバー設定 (`apps/ui/app/lib/auth.server.ts`)

```typescript
import { betterAuth } from 'better-auth'
import { organization, admin } from 'better-auth/plugins'
import { kyselyAdapter } from 'better-auth/adapters/kysely'
import { db } from '~/services/db.server'

export const auth = betterAuth({
  database: kyselyAdapter(db, { provider: 'sqlite' }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    organization({
      // 招待メール送信
      async sendInvitationEmail(data) {
        // TODO: メール送信実装
        console.log('Invitation:', data.email, data.id)
      },
      // カスタムロール定義
      roles: {
        owner: { permissions: ['*'] },
        admin: {
          permissions: [
            'member:read',
            'member:write',
            'settings:read',
            'settings:write',
          ],
        },
        member: { permissions: ['member:read'] },
      },
    }),
    admin(),
  ],
})
```

### クライアント設定 (`apps/ui/app/lib/auth.client.ts`)

```typescript
import { createAuthClient } from 'better-auth/react'
import { organizationClient, adminClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_APP_URL,
  plugins: [organizationClient(), adminClient()],
})

export const { signIn, signUp, signOut, useSession } = authClient
```

### DB スキーマ戦略

**既存テーブル削除**（新規スタート）:

- `users` → 削除（better-auth の `user` に置換）
- `organizations` → 削除（better-auth の `organization` に置換）
- `organization_memberships` → 削除（better-auth の `member` に置換）

better-auth CLI で生成:

```bash
npx @better-auth/cli generate
```

生成されるテーブル:

- `user` - ユーザー（name, email, emailVerified, image, role, createdAt, updatedAt）
- `session` - セッション
- `account` - OAuth/認証アカウント
- `verification` - メール検証トークン
- `organization` - 組織（metadata で isAdvertiser/isMedia を管理）
- `member` - 組織メンバー
- `invitation` - 招待

### API ルート (`apps/ui/app/routes/api.auth.$.ts`)

```typescript
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router'
import { auth } from '~/lib/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
  return auth.handler(request)
}

export async function action({ request }: ActionFunctionArgs) {
  return auth.handler(request)
}
```

## 実装ステップ

### Phase 1: 基盤セットアップ

1. [ ] `better-auth` パッケージ追加
2. [ ] DB スキーマ生成・マイグレーション
3. [ ] `auth.server.ts` 作成（better-auth 初期化）
4. [ ] `auth.client.ts` 作成
5. [ ] `/api/auth/*` ルート作成

### Phase 2: 認証サービス更新

6. [ ] `services/auth.server.ts` を better-auth API に書き換え
   - `getUser()` → `auth.api.getSession()`
   - `requireUser()` → セッションチェック
   - `requireOrgUser()` → 組織コンテキストチェック
7. [ ] `root.tsx` の ClerkProvider 削除、セッション取得に変更

### Phase 3: UI コンポーネント置換

8. [ ] ログイン/サインアップページ作成（email/password）
9. [ ] ログアウト処理更新
10. [ ] `UserButton` 相当のコンポーネント作成
11. [ ] `OrganizationSwitcher` 相当のコンポーネント作成
12. [ ] サイドバーのロールベース表示更新

### Phase 4: クリーンアップ

13. [ ] Clerk 関連パッケージ削除（`@clerk/react-router`, `svix`）
14. [ ] Webhook ルート削除（`_auth+/webhook.clerk/`）
15. [ ] 環境変数更新
16. [ ] 古い DB テーブル削除（必要に応じて）

## 環境変数

### 削除

```
VITE_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET
```

### 追加

```bash
BETTER_AUTH_SECRET=<ランダムな秘密鍵>
BETTER_AUTH_URL=http://localhost:5175
```

## 初期管理者アカウントセットアップ

専用スクリプトで初期管理者を作成:

```bash
# 実行
pnpm tsx scripts/create-admin.ts
```

```typescript
// scripts/create-admin.ts
import { db } from '../packages/db/src'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

// better-auth の API を直接呼び出してユーザー作成
const response = await fetch('http://localhost:5175/api/auth/sign-up/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    name: 'Admin User',
  }),
})

const { user } = await response.json()

// admin ロールを付与
await db
  .updateTable('user')
  .set({ role: 'admin' })
  .where('id', '=', user.id)
  .execute()

console.log('Admin user created:', ADMIN_EMAIL)
```

環境変数:

```bash
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password
```

## 組織ロール設計

### 既存（Clerk）

- `publicMetadata.isAdvertiser` - 広告主機能アクセス
- `publicMetadata.isMedia` - メディア機能アクセス

### 新設計（better-auth）

組織タイプをメタデータで管理:

```typescript
// 組織作成時
await authClient.organization.create({
  name: 'My Company',
  metadata: {
    type: 'advertiser' | 'media' | 'both',
  },
})

// ロールベースアクセス
const org = await authClient.organization.getActive()
const isAdvertiser =
  org?.metadata?.type === 'advertiser' || org?.metadata?.type === 'both'
const isMedia =
  org?.metadata?.type === 'media' || org?.metadata?.type === 'both'
```

## 決定事項

- **データ移行**: 新規スタート（既存データは使用しない）
- **UI**: better-auth-ui を使用

## リスクと考慮事項

### 認証フロー変更

- Clerk の UI コンポーネントが使えなくなる
- カスタム UI の実装が必要

### テスト

- 全認証フローの動作確認
- 組織切り替えの動作確認
- ロールベースアクセスの動作確認

## 参考リンク

- [better-auth ドキュメント](https://www.better-auth.com/)
- [Organization プラグイン](https://www.better-auth.com/docs/plugins/organization)
- [Admin プラグイン](https://www.better-auth.com/docs/plugins/admin)
- [Kysely アダプター](https://www.better-auth.com/docs/adapters/kysely)
