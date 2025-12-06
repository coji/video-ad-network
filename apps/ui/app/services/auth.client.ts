import { createAuthClient } from 'better-auth/react'
import { organizationClient, adminClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  plugins: [organizationClient(), adminClient()],
})

export type Session = typeof authClient.$Infer.Session
