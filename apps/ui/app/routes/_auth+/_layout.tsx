import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-muted/50 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Video Ad Network</h1>
        <p className="text-sm text-muted-foreground">広告配信管理システム</p>
      </div>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
