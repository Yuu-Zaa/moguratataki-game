import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const html404 = resolve(__dirname, 'public/404.html')
        const distHtml404 = resolve(__dirname, 'dist/404.html')
        writeFileSync(distHtml404, readFileSync(html404))
      }
    }
  ],
  base: '/moguratataki-game/'
})
