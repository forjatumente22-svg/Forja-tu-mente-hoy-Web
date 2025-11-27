import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Use '.' instead of process.cwd() to resolve TS error with Process type
  const env = loadEnv(mode, '.', '');
  return {
    base: './', // CRITICAL: Allows the app to run in subfolders or buckets
    plugins: [react()],
    define: {
      // Vital: Inject the variable into the code at build time
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})