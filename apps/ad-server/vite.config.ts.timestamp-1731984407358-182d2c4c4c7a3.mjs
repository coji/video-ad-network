// vite.config.ts
import build from "file:///Users/coji/progs/video-ad-network/node_modules/.pnpm/@hono+vite-build@1.1.0_hono@4.6.10/node_modules/@hono/vite-build/dist/adapter/cloudflare-workers/index.js";
import devServer from "file:///Users/coji/progs/video-ad-network/node_modules/.pnpm/@hono+vite-dev-server@0.17.0_hono@4.6.10_miniflare@3.20241106.0_wrangler@3.87.0_@cloudflare+workers-types@4.20241112.0_/node_modules/@hono/vite-dev-server/dist/index.js";
import adapter from "file:///Users/coji/progs/video-ad-network/node_modules/.pnpm/@hono+vite-dev-server@0.17.0_hono@4.6.10_miniflare@3.20241106.0_wrangler@3.87.0_@cloudflare+workers-types@4.20241112.0_/node_modules/@hono/vite-dev-server/dist/adapter/cloudflare.js";
import { defineConfig } from "file:///Users/coji/progs/video-ad-network/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.0/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/coji/progs/video-ad-network/node_modules/.pnpm/vite-tsconfig-paths@5.1.2_typescript@5.6.3_vite@5.4.11_@types+node@22.9.0_/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: "src/index.ts"
    }),
    tsconfigPaths()
  ],
  server: {
    port: 5173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY29qaS9wcm9ncy92aWRlby1hZC1uZXR3b3JrL2FwcHMvYWQtc2VydmVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY29qaS9wcm9ncy92aWRlby1hZC1uZXR3b3JrL2FwcHMvYWQtc2VydmVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jb2ppL3Byb2dzL3ZpZGVvLWFkLW5ldHdvcmsvYXBwcy9hZC1zZXJ2ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgYnVpbGQgZnJvbSAnQGhvbm8vdml0ZS1idWlsZC9jbG91ZGZsYXJlLXdvcmtlcnMnXG5pbXBvcnQgZGV2U2VydmVyIGZyb20gJ0Bob25vL3ZpdGUtZGV2LXNlcnZlcidcbmltcG9ydCBhZGFwdGVyIGZyb20gJ0Bob25vL3ZpdGUtZGV2LXNlcnZlci9jbG91ZGZsYXJlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRidWlsZCgpLFxuXHRcdGRldlNlcnZlcih7XG5cdFx0XHRhZGFwdGVyLFxuXHRcdFx0ZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuXHRcdH0pLFxuXHRcdHRzY29uZmlnUGF0aHMoKSxcblx0XSxcblx0c2VydmVyOiB7XG5cdFx0cG9ydDogNTE3Myxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLE9BQU8sV0FBVztBQUN2VixPQUFPLGVBQWU7QUFDdEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNUO0FBQUEsTUFDQSxPQUFPO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1A7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
