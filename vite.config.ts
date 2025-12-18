import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
];

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    // DEV usa "/" | BUILD (GitHub Pages) usa "/clt-rustico-site/"
    base: isDev ? "/" : "/clt-rustico-site/",

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    envDir: path.resolve(import.meta.dirname),

    // frontend está em /client
    root: path.resolve(import.meta.dirname, "client"),

    build: {
      // build sai em /dist na raiz
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },

    server: {
      port: 3000,
      strictPort: false,
      host: true,
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        ".github.dev",
        ".app.github.dev",
        ".manuspre.computer",
        ".manus.computer",
        ".manus-asia.computer",
        ".manuscomputer.ai",
        ".manusvm.computer",
      ],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
