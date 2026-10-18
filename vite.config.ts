/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served at https://<user>.github.io/rumahsoftware-id-portfolio/ by the
  // GitHub Pages workflow (.github/workflows/deploy.yml) -- every asset
  // path must be relative to that subpath, which `base` handles for us.
  base: '/rumahsoftware-id-portfolio/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
