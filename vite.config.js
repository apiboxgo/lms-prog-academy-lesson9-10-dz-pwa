import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/pwa/admin/',
    plugins: [react()],
    root: './admin',
    server: {
        host: '0.0.0.0',
        port: 5173,
        cors: true,
        origin: 'http://localhost:8080',
        strictPort: true,
        watch: {
            usePolling: true,
            interval: 300,
            ignored: ['**/vendor/**', '**/.git/**', '**/node_modules/**']
        }
    }
})
