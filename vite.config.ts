import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';
import netlify from "@netlify/vite-plugin-tanstack-start";

const BUILD_VERSION = process.env.DEPLOY_ID?.slice(0, 7) || process.env.VITE_BUILD_VERSION || new Date().toISOString().replace(/[-]/g, '.')
const BUILD_COMMIT = (process.env.COMMIT_REF || process.env.GITHUB_SHA || '').slice(0, 7)

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    viteReact(),
    tailwindcss(),
    netlify(),
  ],
  define: {
    __BUILD_VERSION__: JSON.stringify(BUILD_VERSION),
    __BUILD_COMMIT__: JSON.stringify(BUILD_COMMIT),
  }
});
