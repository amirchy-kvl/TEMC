import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        products: 'products-services.html',
        history: 'history.html',
        recognition: 'recognition.html',
        gallery: 'gallery.html',
      },
    },
  },
})
