import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "vite-plugin-pages";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      pagesDir: "src/pages",
      extensions: ["tsx"],
    }),
  ],
});
