import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  return {
    root: fileURLToPath(new URL('./', import.meta.url)),
    base: '/',
    plugins: [
      vue(),
      ...(isDev ? [vueDevTools()] : []),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          target: "https://api-blue-archive.vercel.app",
          changeOrigin: true
        }
      }
    }
  }
})

