import { Outlet } from '@remix-run/react'

export default function AuthLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-1 place-items-center">
      <Outlet />
    </div>
  )
}
