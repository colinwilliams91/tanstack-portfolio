import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig(({ command }) => ({
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
    // Only enable Netlify plugin during build for CI/CD
    // This avoids local Netlify environment simulation during development
    ...(command === 'build' ? [netlify()] : []),
  ],
}));
