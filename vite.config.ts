import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Fiscal Code Search Application",
        short_name: "FiscalCode Search",
        description: "Search and validate Italian fiscal codes",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#0f172a",
        icons: [
          {
            src: "/pwa-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/pwa-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/pwa-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/pwa-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/pwa-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
