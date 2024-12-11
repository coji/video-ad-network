import { ClerkProvider } from '@clerk/react-router'
import { rootAuthLoader } from '@clerk/react-router/ssr.server'
import type { LinksFunction } from 'react-router'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import { PageLoadingProgress } from './components/page-loading-progress'
import styles from './tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export const loader = (args: Route.LoaderArgs) => {
  return rootAuthLoader(args)
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageLoadingProgress />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App = ({ loaderData }: Route.ComponentProps) => {
  return (
    <ClerkProvider loaderData={loaderData}>
      <Outlet />
    </ClerkProvider>
  )
}

export default App
