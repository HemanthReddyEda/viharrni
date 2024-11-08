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
      external: ['lodash-es'],
    },
  }, 
});
