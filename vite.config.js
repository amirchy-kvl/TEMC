import { defineConfig } from 'vite'

export default defineConfig({
  base: '/TEMC/',
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
