import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '.csb.app',
      '.stackblitz.io',
      /^.*-\d+\.csb\.app$/, // regex pattern for CodeSandbox URLs
      'localhost'
    ],
    host: true
  }
})