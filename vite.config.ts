/// <reference types="vitest/config" />
import { cpSync, mkdirSync } from "node:fs";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";

/** Real paths that render the app, so they load on hosts with no SPA fallback rule. */
const appRoutes = ["problems"];

/** Copies index.html to each route folder and 404.html after the build. */
function staticRoutes(): Plugin {
  let outDir = "dist";
  return {
    name: "static-routes",
    apply: "build",
    configResolved: (c) => { outDir = c.build.outDir; },
    closeBundle() {
      for (const r of appRoutes) {
        mkdirSync(`${outDir}/${r}`, { recursive: true });
        cpSync(`${outDir}/index.html`, `${outDir}/${r}/index.html`);
      }
      cpSync(`${outDir}/index.html`, `${outDir}/404.html`);
    },
  };
}

export default defineConfig({
  plugins: [react(), staticRoutes()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
