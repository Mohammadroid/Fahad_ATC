import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// `base` matches the GitHub Pages subpath; for local dev it just means assets
// resolve relative to the page. Override with FAHAD_BASE if deploying elsewhere.
const base = process.env.FAHAD_BASE ?? '/Fahad_ATC/';

export default defineConfig({
  base,
  plugins: [mkcert()],
  build: {
    target: 'es2022', // top-level await; Quest 3 browser is modern Chromium
  },
  server: {
    https: true,
    host: true,
    port: 5173,
  },
});
