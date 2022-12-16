import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
    environment: "jsdom",
    include: [
      "src/**/*.test.ts",
      "src/**/*.test.tsx",
      "src/**/*.spec.ts",
      "src/**/*.spec.tsx",
    ],
    setupFiles: ["./test/setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@*": path.resolve(__dirname, "./src/*"),
      "@assets": path.resolve(__dirname, "./src/assets/*"),
      "@assets/*": path.resolve(__dirname, "./src/assets/*"),
      "@presentation/*": path.resolve(__dirname, "./src/presentation/*"),
      "@presentation": path.resolve(__dirname, "./src/presentation/"),
      "@data/*": path.resolve(__dirname, "./src/data/*"),
      "@data": path.resolve(__dirname, "./src/data/"),
      "@main/*": path.resolve(__dirname, "./src/main/*"),
      "@main": path.resolve(__dirname, "./src/main/"),
      "@infra/*": path.resolve(__dirname, "./src/infra/*"),
      "@infra": path.resolve(__dirname, "./src/infra/"),
      "@test/*": path.resolve(__dirname, "./test/*"),
      "@test": path.resolve(__dirname, "./test/"),
      "@pages/*": path.resolve(__dirname, "./src/presentation/pages/*"),
      "@layout": path.resolve(__dirname, "./src/main/factories/pages/layout"),
      "@types/*": path.resolve(__dirname, "./src/@types/*"),
      "@contracts": path.resolve(__dirname, "./src/@types/contracts/*"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@utils/": path.resolve(__dirname, "./src/utils/*"),
      "@Callbacks": path.resolve(__dirname, "./src/infra/callbacks/"),
      "@Callbacks/": path.resolve(__dirname, "./src/infra/callbacks/*"),
    },
  },
});
