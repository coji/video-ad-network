import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(import.meta.dirname, 'src/index.ts'),
			name: 'AdSDK',
			fileName: 'ad-sdk',
			formats: ['es'],
		},
	},
	server: {
		port: 3000,
		open: '/example/index.html', // 開発サーバー起動時に自動的にブラウザでオープン
	},
})
