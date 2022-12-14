import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@components",replacement: path.resolve(__dirname, "src/components")},
      {find: "@setup",replacement: path.resolve(__dirname, "src/setup")},
    ],
  },
});
