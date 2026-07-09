import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_PUBLIC_SITE_ORIGIN = "https://jamesbhoops.com";

/** Top-level: allow Payment Request / wallets in Square + nested Google Pay frames. */
const PERMISSIONS_POLICY_PAYMENT = "payment=*";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const publicSiteOrigin = (
    env.VITE_PUBLIC_SITE_ORIGIN || DEFAULT_PUBLIC_SITE_ORIGIN
  ).replace(/\/$/, "");

  return {
    plugins: [
      react(),
      {
        name: "html-public-site-origin",
        transformIndexHtml(html) {
          return html.replaceAll("__PUBLIC_SITE_ORIGIN__", publicSiteOrigin);
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 5173,
      headers: {
        "Permissions-Policy": PERMISSIONS_POLICY_PAYMENT,
      },
      proxy: {
        "/api": {
          target: "http://localhost:4000",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      headers: {
        "Permissions-Policy": PERMISSIONS_POLICY_PAYMENT,
      },
    },
  };
});
