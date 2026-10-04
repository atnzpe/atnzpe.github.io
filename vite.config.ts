import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Publicado em https://atnzpe.github.io/my_portifolio/
export default defineConfig({
  base: '/my_portifolio/',
  plugins: [react(), tailwindcss()],
})
