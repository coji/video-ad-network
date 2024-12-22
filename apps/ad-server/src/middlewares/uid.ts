import type { MiddlewareHandler } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'

// UID 管理のミドルウェア
export const uidMiddleware: MiddlewareHandler = async (c, next) => {
  // リクエストから 'uid' Cookie を取得
  let uid = getCookie(c, 'uid')

  if (!uid) {
    // UID が存在しない場合、新規発行
    uid = crypto.randomUUID()
  }

  // Cookie オプションの設定
  const cookieOptions = {
    httpOnly: true, // JavaScript からのアクセスを防止
    secure: true, // HTTPS のみ送信
    sameSite: 'None' as const, // 3rd パーティー Cookie のため 'None' を設定
    path: '/', // Cookie の有効パス
    maxAge: 60 * 60 * 24 * 365, // 1 年間有効
  }

  // レスポンスに 'uid' Cookie を設定
  setCookie(c, 'uid', uid, cookieOptions)

  // 次のハンドラーに制御を移す
  await next()
}
