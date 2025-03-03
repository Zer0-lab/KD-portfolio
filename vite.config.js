import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Zer0-lab.github.io/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        index: "./index.html",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    jsx: "automatic",
  },
});