/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'globalThis',
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3001,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@store': '/src/store',
    },
  },
})
