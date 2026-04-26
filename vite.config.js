import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import path from 'path'

export default defineConfig({
  plugins: [injectHTML()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [path.resolve(__dirname, 'node_modules')],
      },
    },
  },
})