import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: 'lodash-es',
    },
  },
  build: {
    outDir: 'dist', // Ensures the build output is in the 'dist' folder
    rollupOptions: {
      external: ['lodash-es'],
    },
  },
});
