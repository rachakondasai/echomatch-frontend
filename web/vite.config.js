// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // <-- THIS IS CRUCIAL FOR RENDER
  build: {
    outDir: 'dist'
  }
})