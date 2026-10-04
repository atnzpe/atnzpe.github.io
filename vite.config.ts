import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Publicado em https://atnzpe.github.io/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
