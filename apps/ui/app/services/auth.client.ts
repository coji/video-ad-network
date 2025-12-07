import { adminClient, organizationClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  plugins: [organizationClient(), adminClient()],
})

export type Session = typeof authClient.$Infer.Session
