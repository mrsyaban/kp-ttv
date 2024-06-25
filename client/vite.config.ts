import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // This makes the Vite server accessible from outside the container
    port: 5173, // You can specify the port, default is 5173
  }
})
