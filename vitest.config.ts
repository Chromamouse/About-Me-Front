import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/.react-router/**"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
