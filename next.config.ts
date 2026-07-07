import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// This site is fully static (SSG), which rules out nonce-based CSP: Next.js
// only injects a per-request nonce into its own scripts when pages are
// dynamically rendered, and doing that here would disable static
// optimization/CDN caching for a marketing site that doesn't need it.
//
// Without a nonce, Next.js App Router itself requires 'unsafe-inline' on
// script-src (it streams RSC hydration data via inline `<script>` tags with
// no `src`) and on style-src (React's `style` prop and injected font CSS
// resolve to inline styles). Both are scoped to exactly those two
// directives, nothing broader. 'unsafe-eval' is only added in development,
// where React needs it to reconstruct server error stacks; it is never
// present in the production policy.
const cspDirectives = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data:`,
  // next/font self-hosts Google Fonts at build time, so no
  // fonts.googleapis.com / fonts.gstatic.com origins are required here.
  `font-src 'self'`,
  // The contact form posts to our own /api/contact route; Formspree is
  // only called server-to-server from there, so the browser never needs
  // an external connect-src allowance for it.
  `connect-src 'self'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: cspDirectives },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
