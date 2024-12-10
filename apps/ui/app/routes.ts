import { remixRoutesOptionAdapter } from '@remix-run/routes-option-adapter'
import { flatRoutes } from 'remix-flat-routes'

export default remixRoutesOptionAdapter((defineRotue) =>
	flatRoutes('routes', defineRotue),
)
