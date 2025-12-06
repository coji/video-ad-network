import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [cloudflare(), tsconfigPaths()],
  server: {
    port: 5173,
  },
})
