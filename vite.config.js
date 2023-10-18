/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
      config: `${path.resolve(__dirname, "./src/config/")}`,
      container: `${path.resolve(__dirname, "./src/containers/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      constant: `${path.resolve(__dirname, "./src/constant")}`,
      stores: `${path.resolve(__dirname, "./src/stores")}`,
    },
  },
});
