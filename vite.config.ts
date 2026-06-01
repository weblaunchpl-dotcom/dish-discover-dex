// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Build target switch:
// - On Netlify (env DEPLOY_TARGET=netlify or NETLIFY=true) -> nitro "netlify" preset
// - Otherwise -> default (cloudflare) used by the Lovable preview
const isNetlify =
  process.env.DEPLOY_TARGET === "netlify" || process.env.NETLIFY === "true";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
      ...(isNetlify ? { preset: "netlify" } : {}),
    },
  },
});
