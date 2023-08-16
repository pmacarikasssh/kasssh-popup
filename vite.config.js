import path from "path";
import { defineConfig } from "vite";
import cssPurge from "vite-plugin-purgecss";
import markdownRawPlugin from 'vite-raw-plugin';

export default defineConfig({
  base: "./",
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hmr: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: "popup.js",
        chunkFileNames: "[name].js",
        assetFileNames: "popup.[ext]",
      },
    },
  },
  plugins: [
    cssPurge({
      content: ["./src/content.js"],
    }),
    markdownRawPlugin({
      fileRegex: /content\.html$/
    }),
  ],
});
