# 管理者向けテナント・メンバー管理機能 仕様書

## 概要

システム管理者がテナント（Organization）とそのメンバーを管理するための機能。

## ロール体系

このシステムには **2種類のロール** が存在する：

### 1. システムロール（User.role）

ユーザー単位で設定される、システム全体に対する権限。

| ロール  | 説明           | 権限                                       |
| ------- | -------------- | ------------------------------------------ |
| `admin` | システム管理者 | 全テナント・全ユーザーの管理、システム設定 |
| `user`  | 一般ユーザー   | 所属テナント内の操作のみ                   |
| (null)  | 未設定         | `user` と同等                              |

**格納場所:** `user.role` カラム

### 2. テナントロール（Member.role）

テナント（Organization）ごとに設定される、テナント内での権限。

| ロール   | 説明             | 権限                                   |
| -------- | ---------------- | -------------------------------------- |
| `owner`  | テナントオーナー | テナント設定変更、メンバー管理、全操作 |
| `admin`  | テナント管理者   | メンバー招待、一部設定変更             |
| `member` | 一般メンバー     | 広告・メディア関連の操作のみ           |

**格納場所:** `member.role` カラム

### ロールの関係図

```
┌─────────────────────────────────────────────────────────┐
│                    システム全体                          │
│  ┌─────────────────────────────────────────────────────┐│
│  │ システム管理者 (User.role = "admin")                 ││
│  │ - 全テナントの作成・編集・削除                       ││
│  │ - 全ユーザーの管理                                   ││
│  │ - /admin/* へのアクセス                              ││
│  └─────────────────────────────────────────────────────┘│
│                                                         │
│  ┌─────────────────┐    ┌─────────────────┐            │
│  │ テナントA        │    │ テナントB        │            │
│  │ ┌─────────────┐ │    │ ┌─────────────┐ │            │
│  │ │owner: 田中  │ │    │ │owner: 鈴木  │ │            │
│  │ │admin: 佐藤  │ │    │ │member: 高橋 │ │            │
│  │ │member: 山田 │ │    │ └─────────────┘ │            │
│  │ └─────────────┘ │    └─────────────────┘            │
│  └─────────────────┘                                   │
└─────────────────────────────────────────────────────────┘
```

## 用語定義

| 用語             | 説明                                                 |
| ---------------- | ---------------------------------------------------- |
| テナント         | Organization。広告主やメディアが所属する組織単位     |
| メンバー         | テナントに所属するユーザー（Member経由で紐づく）     |
| システム管理者   | User.role = "admin" のユーザー。全テナントを管理可能 |
| テナントオーナー | Member.role = "owner"。テナント内の最高権限          |

## アクセス制御

### /admin/\* へのアクセス

- `User.role = "admin"` のユーザーのみがアクセス可能
- サイドバーに「Admin」セクションを追加し、システム管理者のみ表示

### テナント内操作

- テナントロール（owner/admin/member）に応じた権限制御
- システム管理者は全テナントに対してowner相当の操作が可能

## 機能一覧

### 1. テナント管理

#### 1.1 テナント一覧 (`/admin/tenants`)

**表示項目:**

- テナント名 (name)
- スラッグ (slug)
- タイプ (metadata.isAdvertiser / metadata.isMedia)
- メンバー数
- 作成日時 (createdAt)

**操作:**

- 新規作成ボタン
- 各行: 編集、削除ボタン
- 検索（名前、スラッグで絞り込み）

#### 1.2 テナント作成 (`/admin/tenants/new`)

**入力項目:**
| フィールド | 必須 | バリデーション |
|-----------|------|----------------|
| 名前 | ○ | 1文字以上 |
| スラッグ | ○ | 英数字・ハイフンのみ、ユニーク |
| ロゴURL | - | URL形式 |
| 広告主フラグ | - | boolean |
| メディアフラグ | - | boolean |

**処理:**

- better-auth の organization API を使用して作成
- metadata に `{ isAdvertiser, isMedia }` を JSON で保存

#### 1.3 テナント編集 (`/admin/tenants/:id/edit`)

**編集可能項目:**

- 名前
- スラッグ（変更時はユニークチェック）
- ロゴURL
- 広告主フラグ
- メディアフラグ

#### 1.4 テナント削除

**確認事項:**

- 削除前に確認ダイアログ表示
- 関連データ（メンバー、招待、メディア、広告主）がある場合は警告表示
- カスケード削除される旨を明示

---

### 2. メンバー管理

#### 2.1 メンバー一覧 (`/admin/tenants/:id/members`)

**表示項目:**

- ユーザー名 (user.name)
- メールアドレス (user.email)
- ロール (role: owner / admin / member)
- 参加日時 (createdAt)

**操作:**

- メンバー招待ボタン
- 各行: ロール変更、削除ボタン

#### 2.2 メンバー招待 (`/admin/tenants/:id/members/invite`)

**入力項目:**
| フィールド | 必須 | バリデーション |
|-----------|------|----------------|
| メールアドレス | ○ | メール形式 |
| ロール | ○ | owner / admin / member |

**処理:**

- better-auth の invitation API を使用
- 招待メール送信（既存ユーザーの場合は直接追加も検討）

#### 2.3 メンバーロール変更

**ロール種別:**

- `owner`: テナントオーナー（全権限）
- `admin`: テナント管理者（メンバー管理可能）
- `member`: 一般メンバー

**制約:**

- オーナーは最低1人必要
- 自分自身のロールは変更不可

#### 2.4 メンバー削除

**確認事項:**

- 削除前に確認ダイアログ表示
- オーナーが1人の場合は削除不可
- 自分自身は削除不可

---

### 3. 招待管理

#### 3.1 招待一覧 (`/admin/tenants/:id/invitations`)

**表示項目:**

- 招待先メールアドレス (email)
- ロール (role)
- ステータス (status: pending / accepted / canceled)
- 有効期限 (expiresAt)
- 招待者 (inviter.name)
- 招待日時 (createdAt)

**操作:**

- 招待キャンセル（pending のみ）
- 招待再送信（pending のみ）

---

## 画面遷移

```
/admin
  └── /admin/tenants              # テナント一覧
        ├── /admin/tenants/new    # テナント作成
        └── /admin/tenants/:id
              ├── /edit           # テナント編集
              ├── /members        # メンバー一覧
              │     └── /invite   # メンバー招待
              └── /invitations    # 招待一覧
```

## API設計

### テナント関連

| メソッド | パス                 | 説明                       |
| -------- | -------------------- | -------------------------- |
| GET      | `/admin/tenants`     | テナント一覧取得（loader） |
| POST     | `/admin/tenants`     | テナント作成（action）     |
| GET      | `/admin/tenants/:id` | テナント詳細取得（loader） |
| PATCH    | `/admin/tenants/:id` | テナント更新（action）     |
| DELETE   | `/admin/tenants/:id` | テナント削除（action）     |

### メンバー関連

| メソッド | パス                                   | 説明                       |
| -------- | -------------------------------------- | -------------------------- |
| GET      | `/admin/tenants/:id/members`           | メンバー一覧取得（loader） |
| POST     | `/admin/tenants/:id/members/invite`    | メンバー招待（action）     |
| PATCH    | `/admin/tenants/:id/members/:memberId` | ロール変更（action）       |
| DELETE   | `/admin/tenants/:id/members/:memberId` | メンバー削除（action）     |

### 招待関連

| メソッド | パス                                                  | 説明                     |
| -------- | ----------------------------------------------------- | ------------------------ |
| GET      | `/admin/tenants/:id/invitations`                      | 招待一覧取得（loader）   |
| POST     | `/admin/tenants/:id/invitations/:invitationId/cancel` | 招待キャンセル（action） |
| POST     | `/admin/tenants/:id/invitations/:invitationId/resend` | 招待再送信（action）     |

## UI コンポーネント

### 使用コンポーネント（既存）

- `Card`, `CardHeader`, `CardContent`
- `Button`
- `Input`, `Label`
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`
- `DropdownMenu`
- `Badge`（ステータス表示用）
- `AlertDialog`（削除確認用）

### 新規作成が必要なコンポーネント

- `AdminGuard`: 管理者権限チェック用ラッパー
- `TenantTypeSelect`: 広告主/メディア選択用
- `RoleSelect`: ロール選択用ドロップダウン

## 実装順序

1. **Phase 1: 基盤**
   - AdminGuard コンポーネント作成
   - サイドバーに Admin セクション追加
   - `/admin` レイアウト作成

2. **Phase 2: テナント管理**
   - テナント一覧ページ
   - テナント作成ページ
   - テナント編集ページ
   - テナント削除機能

3. **Phase 3: メンバー管理**
   - メンバー一覧ページ
   - メンバー招待機能
   - ロール変更機能
   - メンバー削除機能

4. **Phase 4: 招待管理**
   - 招待一覧ページ
   - 招待キャンセル機能
   - 招待再送信機能

## データ構造

### Organization.metadata

```json
{
  "isAdvertiser": true,
  "isMedia": false
}
```

### Member.role

- `owner`: テナントオーナー
- `admin`: テナント管理者
- `member`: 一般メンバー

### Invitation.status

- `pending`: 招待中
- `accepted`: 承認済み
- `canceled`: キャンセル済み

## 技術実装詳細

### better-auth API の使用

| 機能           | API                             | 備考                                                |
| -------------- | ------------------------------- | --------------------------------------------------- |
| テナント一覧   | DB直接クエリ                    | organization plugin に全テナント取得 API がないため |
| テナント作成   | `auth.api.createOrganization()` | サーバーサイドで実行                                |
| テナント更新   | `auth.api.updateOrganization()` | サーバーサイドで実行                                |
| テナント削除   | `auth.api.deleteOrganization()` | サーバーサイドで実行                                |
| メンバー一覧   | `auth.api.listMembers()`        | organizationId 指定                                 |
| メンバー追加   | `auth.api.addMember()`          | 既存ユーザーを追加                                  |
| メンバー招待   | `auth.api.createInvitation()`   | メール送信付き                                      |
| ロール変更     | `auth.api.updateMemberRole()`   | -                                                   |
| メンバー削除   | `auth.api.removeMember()`       | -                                                   |
| 招待一覧       | `auth.api.listInvitations()`    | organizationId 指定                                 |
| 招待キャンセル | `auth.api.cancelInvitation()`   | -                                                   |

### loader/action パターン

```typescript
// テナント一覧（loader）- DB直接クエリ
export const loader = async (args: Route.LoaderArgs) => {
  await requireAdmin(args)
  const tenants = await db
    .selectFrom('organization')
    .leftJoin('member', 'member.organization_id', 'organization.id')
    .select([
      'organization.id',
      'organization.name',
      'organization.slug',
      'organization.metadata',
      'organization.created_at',
      sql<number>`count(member.id)`.as('memberCount'),
    ])
    .groupBy('organization.id')
    .execute()
  return { tenants }
}

// テナント作成（action）
export const action = async (args: Route.ActionArgs) => {
  await requireAdmin(args)
  const formData = await args.request.formData()
  // バリデーション後、auth.api.createOrganization() を呼び出し
}
```

## 注意事項

- システム管理者向け機能は `requireAdmin()` で保護
- テナント一覧は DB 直接クエリ（better-auth に全組織取得 API がないため）
- メンバー管理は better-auth の organization plugin API を使用
- 管理者操作のログ記録を検討（将来的な監査対応）
- メール送信機能は Resend を使用（better-auth 設定済み想定）
