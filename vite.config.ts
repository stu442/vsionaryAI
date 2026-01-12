import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwind from "tailwindcss";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && screenGraphPlugin(), storybookTest()],
  publicDir: "./public",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  test: {
    setupFiles: ["./.storybook/vitest.setup.ts"],
  },
}));
