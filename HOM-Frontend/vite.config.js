import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: 'lodash-es',  // Optional: use the ES module version of lodash
    },
  },
  build: {
    rollupOptions: {
      external: ['lodash'],  // Optional: try adding lodash as external if you want to exclude it from the build
    },
  },
});
