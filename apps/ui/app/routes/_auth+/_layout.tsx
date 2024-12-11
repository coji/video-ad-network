import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className="grid min-h-dvh grid-cols-1 place-items-center">
      <Outlet />
    </div>
  )
}
