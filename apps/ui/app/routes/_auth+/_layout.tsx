import { Outlet } from '@remix-run/react'

export default function AuthLayout() {
	return (
		<div className="grid grid-cols-1 min-h-dvh place-items-center">
			<Outlet />
		</div>
	)
}
