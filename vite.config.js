import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Zer0-lab.github.io/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  esbuild: {
    loader: "jsx",
    jsx: "automatic",
  },
  optimizeDeps: {
    include: ["./src/main.jsx"],
  },
});