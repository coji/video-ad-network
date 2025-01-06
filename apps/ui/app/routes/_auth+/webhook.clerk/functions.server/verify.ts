import type { WebhookEvent } from '@clerk/react-router/ssr.server'
import type { AppLoadContext } from 'react-router'
import { Webhook } from 'svix'

/**
 * svix webhook の署名検証をして webhook payload を取り出す
 * エラーが発生したら 400 エラーを throw する
 * @param request
 * @returns
 */
export const verifyClerkWebhookOrThrow = async (
  request: Request,
  context: AppLoadContext,
): Promise<WebhookEvent> => {
  const payload = await request.json()
  const payloadString = JSON.stringify(payload)
  const headerPayload = request.headers

  const svixId = headerPayload.get('svix-id')
  const svixTimestamp = headerPayload.get('svix-timestamp')
  const svixSignature = headerPayload.get('svix-signature')
  if (!svixId || !svixTimestamp || !svixSignature) {
    throw Response.json({ error: 'Missing required headers' }, { status: 400 })
  }
  const svixHeaders = {
    'svix-id': svixId,
    'svix-timestamp': svixTimestamp,
    'svix-signature': svixSignature,
  }
  const wh = new Webhook(context.cloudflare.env.CLERK_WEBHOOK_SECRET)
  try {
    const event = wh.verify(payloadString, svixHeaders) as WebhookEvent
    return event
  } catch (e) {
    console.log('clerk webhook error', e)
    throw new Response('Invalid webhook signature', { status: 400 })
  }
}
