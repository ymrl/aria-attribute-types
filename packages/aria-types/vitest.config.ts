import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    typecheck: {
      include: ["src/**/*.{js,ts}"],
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
