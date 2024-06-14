import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'es-ES',
        name: 'Restaurant Mery-Lou',
        short_name: 'Mery-Lou',
        description: 'Bar Restaurant Mery-lou en L\'Escala Girona',
        theme_color: '#19223c',
        background_color: '#d4d4d4',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ]
      }
    })
  ],
})
