import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://openlibrary.org', // The API server
        changeOrigin: true, // Ensures the origin header is changed to match the target
        secure: true, // Ensures the request uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes the /api prefix
      },
    },
  },
})
