import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Zer0-lab.github.io/",  // Ajoute cette ligne pour GitHub Pages
});