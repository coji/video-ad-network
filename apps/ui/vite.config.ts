import {
  cloudflareDevProxyVitePlugin,
  vitePlugin as remix,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getLoadContext } from './load-context'

declare module '@remix-run/cloudflare' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  plugins: [
    cloudflareDevProxyVitePlugin({
      getLoadContext,
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
        v3_routeConfig: true,
        unstable_optimizeDeps: true,
      },
    }),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      conditions: ['workerd', 'worker', 'browser'],
    },
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  build: {
    minify: true,
  },
  server: {
    port: 5175,
  },
})
