import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: 'lodash-es',
    },
  },
  build: {
    outDir: 'dist', // Ensure output directory is 'dist'
    rollupOptions: {
      external: ['lodash-es'],
    },
  },
});
