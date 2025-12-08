import { createId } from '@paralleldrive/cuid2'
import { getDB } from '@video-ad-network/db'
import { hashPassword } from 'better-auth/crypto'
import { config } from 'dotenv'
import * as path from 'node:path'
import * as readline from 'node:readline'

// プロジェクトルートを取得 (apps/ui/scripts から ../../..)
const projectRoot = path.resolve(import.meta.dirname, '../../..')

// --production フラグで開発/本番を切り替え
const isProduction = process.argv.includes('--production')
if (isProduction) {
  // 本番: プロジェクトルートの .env.production から読み込む
  config({ path: path.join(projectRoot, '.env.production') })
} else {
  // 開発: .dev.vars から読み込む
  config({ path: '.dev.vars' })
}

async function confirm(message: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close()
      resolve(answer.toLowerCase() === 'y')
    })
  })
}

async function createAdmin() {
  // --production フラグを除外した引数を取得
  const args = process.argv.slice(2).filter((arg) => arg !== '--production')
  const email = args[0] || 'admin@example.com'
  const password = args[1] || 'password123'
  const name = args[2] || 'Admin User'

  // 環境変数のチェック
  const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL

  if (!TURSO_DATABASE_URL) {
    console.error('Error: TURSO_DATABASE_URL is required')
    if (isProduction) {
      console.error('Create .env.production from .env.production.example')
    } else {
      console.error('Set it in .dev.vars file')
    }
    process.exit(1)
  }

  console.log(
    `Database: ${isProduction ? 'Turso (production)' : 'Local (.dev.vars)'}`,
  )

  // 本番DBの場合は確認プロンプトを表示
  if (isProduction) {
    console.log(
      '\n⚠️  WARNING: You are about to modify the PRODUCTION database!',
    )
    const confirmed = await confirm('Continue? (y/N): ')
    if (!confirmed) {
      console.log('Aborted.')
      process.exit(0)
    }
  }

  const db = getDB(TURSO_DATABASE_URL)

  console.log(`Creating admin user: ${email}`)

  try {
    const userId = createId()
    const now = new Date().toISOString()

    // Check if user already exists
    const existingUser = await db
      .selectFrom('user')
      .select('id')
      .where('email', '=', email)
      .executeTakeFirst()

    if (existingUser) {
      console.log(`User already exists: ${email}`)
      console.log('Updating role to admin...')

      await db
        .updateTable('user')
        .set({ role: 'admin', updatedAt: now })
        .where('id', '=', existingUser.id)
        .execute()

      console.log('User role updated to admin!')
      process.exit(0)
    }

    // Create user
    await db
      .insertInto('user')
      .values({
        id: userId,
        email,
        name,
        role: 'admin',
        emailVerified: 1,
        createdAt: now,
        updatedAt: now,
      })
      .execute()

    // Create account with credential provider
    const hashedPassword = await hashPassword(password)

    await db
      .insertInto('account')
      .values({
        id: createId(),
        userId: userId,
        accountId: userId,
        providerId: 'credential',
        password: hashedPassword,
        createdAt: now,
        updatedAt: now,
      })
      .execute()

    console.log('\nAdmin account created successfully!')
    console.log(`  User ID: ${userId}`)
    console.log(`  Email: ${email}`)
    console.log(`  Role: admin`)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
      console.error(error.stack)
    } else {
      console.error('Error:', error)
    }
    process.exit(1)
  }
}

createAdmin()
