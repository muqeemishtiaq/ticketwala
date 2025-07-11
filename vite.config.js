// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ticketwala/', // 👈 THIS IS CRITICAL
  plugins: [react(), tailwindcss()],
})
