import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: "/Todo-app/",
  plugins: [react(), tailwindcss()],
});

// https://github.com/Arpan-Saha-25/Todo-app