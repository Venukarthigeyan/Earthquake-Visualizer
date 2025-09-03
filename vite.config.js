import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '.csb.app',           // allow CodeSandbox previews
      '.stackblitz.io',     // allow StackBlitz previews
      'mlhcq7-5173.csb.app' // your specific CodeSandbox URL
    ],
    host: true              // ensures it binds to 0.0.0.0
  }
})