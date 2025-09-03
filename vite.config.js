import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'mlhcq7-5173.csb.app',
      '.csb.app',
      '.stackblitz.io',
      'localhost'
    ],
    host: true
  }
})