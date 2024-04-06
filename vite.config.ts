import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // el entry point es el punto de entrada
      // de la app. Y a partir de el va armando un grafo de dependencias
      name: "utils-lib",
      fileName: "utils-lib",
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
  plugins: [dts({ outDir: "dist", include: ["src/"] })],
  // @ts-expect-error test types are not defined
  test: {
    globals: true,
    coverage: {
      exclude: ["src/**/index.ts", ".eslintrc.cjs", "vite.config.ts", "commitlint.config.js", "src/vite-env.d.ts"],
    }
  },
});
