import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 项目站：https://clairewong86.github.io/CV/
  base: process.env.GITHUB_PAGES === 'true' ? '/CV/' : '/',
  server: {
    port: 5180,
    strictPort: true,
  },
  preview: {
    port: 5180,
    strictPort: true,
  },
})
