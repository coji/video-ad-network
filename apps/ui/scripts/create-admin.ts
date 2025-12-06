import { config } from 'dotenv'
import { createId } from '@paralleldrive/cuid2'
import { getDB } from '@video-ad-network/db'
import { hashPassword } from 'better-auth/crypto'

// .dev.vars ファイルから環境変数を読み込む
config({ path: '.dev.vars' })

async function createAdmin() {
  const email = process.argv[2] || 'admin@example.com'
  const password = process.argv[3] || 'password123'
  const name = process.argv[4] || 'Admin User'

  // 環境変数のチェック
  const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL

  if (!TURSO_DATABASE_URL) {
    console.error('Error: TURSO_DATABASE_URL is required in .dev.vars')
    process.exit(1)
  }

  const db = getDB(TURSO_DATABASE_URL, process.env.TURSO_AUTH_TOKEN)

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
    console.log(`  Password: ${password}`)
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
