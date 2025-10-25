import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update base to your repo path for GitHub Pages
// Example: '/themechanic78.github.io-jm-autodiagnostic/'
export default defineConfig({
  base: '/themechanic78.github.io-jm-autodiagnostic/',
  plugins: [react()],
});