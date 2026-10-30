import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages can't set response headers, so the production build ships a CSP <meta> tag.
// Dev is left alone because Vite's HMR client relies on inline scripts.
const csp = [
  "default-src 'self'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

const cspPlugin = (): Plugin => ({
  name: "inject-csp",
  apply: "build",
  transformIndexHtml: () => [
    { tag: "meta", attrs: { "http-equiv": "Content-Security-Policy", content: csp }, injectTo: "head" },
  ],
});

// Served from /docs at vincentvtran.github.io/home/
export default defineConfig({
  base: "./",
  plugins: [react(), cspPlugin()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
