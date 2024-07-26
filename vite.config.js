import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aesthetic-todo-deploy/",
  plugins: [react()],
})
