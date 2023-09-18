import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  watch: {
    usePolling: true,
  },
});
