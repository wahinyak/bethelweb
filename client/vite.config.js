import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: '/bethelweb/',  // Ensure this is set to the correct base path
});
