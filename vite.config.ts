import { defineConfig, type Plugin } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const contentSecurityPolicy = [
  // Production policy. 'unsafe-inline' styles stay because motion sets inline styles.
  // formspree.io is the only host allowed to receive the contact form.
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'none'",
  "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  // data: allows the small SVG logos that Vite inlines into the page.
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  "connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "upgrade-insecure-requests",
].join("; ");

const baselineHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
};

function productionCsp(): Plugin {
  return {
    name: "production-csp",
    transformIndexHtml: {
      order: "pre",
      handler(_html, ctx) {
        if (ctx.server) return [];
        return [
          {
            tag: "meta",
            attrs: { "http-equiv": "Content-Security-Policy", content: contentSecurityPolicy },
            injectTo: "head",
          },
        ];
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), productionCsp()],
  build: { sourcemap: false },
  server: { headers: baselineHeaders },
  preview: {
    headers: {
      ...baselineHeaders,
      "Content-Security-Policy": contentSecurityPolicy,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
