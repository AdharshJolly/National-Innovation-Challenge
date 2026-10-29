/// <reference types="vitest/config" />
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { SEO_END, SEO_START, headFor, pages, robotsTxt, sitemapXml } from "./src/seo/meta";

const seoBlock = new RegExp(`${SEO_START}[\\s\\S]*?${SEO_END}`);
const withHead = (html: string, i: number) => html.replace(seoBlock, () => headFor(pages[i]));

/** Fills the home page's <head> from src/seo/meta.ts in dev and build. */
function seoHead(): Plugin {
  return { name: "seo-head", transformIndexHtml: (html) => withHead(html, 0) };
}

/** Writes each route as a real file with its own head (hosts with no SPA fallback still serve it), plus 404.html, robots.txt and sitemap.xml. */
function staticRoutes(): Plugin {
  let outDir = "dist";
  return {
    name: "static-routes",
    apply: "build",
    configResolved: (c) => { outDir = c.build.outDir; },
    closeBundle() {
      const html = readFileSync(`${outDir}/index.html`, "utf8");
      pages.forEach((p, i) => {
        if (p.path === "/") return;
        mkdirSync(`${outDir}${p.path}`, { recursive: true });
        writeFileSync(`${outDir}${p.path}/index.html`, withHead(html, i));
      });
      writeFileSync(`${outDir}/404.html`, html);
      writeFileSync(`${outDir}/robots.txt`, robotsTxt);
      writeFileSync(`${outDir}/sitemap.xml`, sitemapXml());
    },
  };
}

export default defineConfig({
  plugins: [react(), seoHead(), staticRoutes()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
