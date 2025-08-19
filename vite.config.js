import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optional: dev proxy to API
  // server: { proxy: { '/api': 'http://localhost:3000' } },
})
