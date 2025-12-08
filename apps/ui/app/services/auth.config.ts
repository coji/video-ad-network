import { createDialect } from '@video-ad-network/db'
import { betterAuth } from 'better-auth'
import { admin } from 'better-auth/plugins/admin'
import { organization } from 'better-auth/plugins/organization'

export type AuthEnv = {
  TURSO_DATABASE_URL: string
  BETTER_AUTH_URL: string
  BETTER_AUTH_SECRET: string
}

export const createAuth = (env: AuthEnv) => {
  const dialect = createDialect(env.TURSO_DATABASE_URL)

  return betterAuth({
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    database: { dialect, type: 'sqlite' },
    emailAndPassword: {
      enabled: true,
    },
    user: {
      fields: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        emailVerified: 'email_verified',
      },
    },
    session: {
      fields: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        expiresAt: 'expires_at',
        ipAddress: 'ip_address',
        userAgent: 'user_agent',
        userId: 'user_id',
      },
    },
    account: {
      fields: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        accessToken: 'access_token',
        accessTokenExpiresAt: 'access_token_expires_at',
        refreshTokenExpiresAt: 'refresh_token_expires_at',
        accountId: 'account_id',
        idToken: 'id_token',
        providerId: 'provider_id',
        refreshToken: 'refresh_token',
        userId: 'user_id',
      },
    },
    verification: {
      fields: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        expiresAt: 'expires_at',
      },
    },
    plugins: [
      admin({
        schema: {
          session: {
            fields: {
              impersonatedBy: 'impersonated_by',
            },
          },
          user: {
            fields: {
              banExpires: 'ban_expires',
              banReason: 'ban_reason',
            },
          },
        },
      }),
      organization({
        schema: {
          session: {
            fields: {
              activeOrganizationId: 'active_organization_id',
            },
          },
          organization: {
            fields: {
              createdAt: 'created_at',
            },
          },
          member: {
            fields: {
              organizationId: 'organization_id',
              userId: 'user_id',
              createdAt: 'created_at',
            },
          },
          invitation: {
            fields: {
              organizationId: 'organization_id',
              expiresAt: 'expires_at',
              inviterId: 'inviter_id',
            },
          },
        },
        async sendInvitationEmail(_data) {
          // TODO: Implement email sending
          // In production, integrate with an email service (e.g., SendGrid, Resend)
        },
      }),
    ],
  })
}

export type Auth = ReturnType<typeof createAuth>
