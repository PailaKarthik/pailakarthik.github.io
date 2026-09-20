import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// User GitHub Pages site (pailakarthik.github.io) serves from root.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
