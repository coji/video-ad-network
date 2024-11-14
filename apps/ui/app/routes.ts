import type { RouteConfig } from '@remix-run/route-config'
import { remixRoutesOptionAdapter } from '@remix-run/routes-option-adapter'
import { flatRoutes } from 'remix-flat-routes'

export const routes: RouteConfig = remixRoutesOptionAdapter((defineRoutes) =>
	flatRoutes('routes', defineRoutes, {
		ignoredRouteFiles: ['**/index.ts'],
	}),
)
