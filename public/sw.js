if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (s[c]) return
    let t = {}
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r }
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t))
  }
}
define(["./workbox-588899ac"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/187-2fa198741a83f67b.js",
          revision: "2fa198741a83f67b",
        },
        {
          url: "/_next/static/chunks/345-deee77e96219d751.js",
          revision: "deee77e96219d751",
        },
        {
          url: "/_next/static/chunks/377-5daf032e11598eff.js",
          revision: "5daf032e11598eff",
        },
        {
          url: "/_next/static/chunks/664-bd157c0c144b8096.js",
          revision: "bd157c0c144b8096",
        },
        {
          url: "/_next/static/chunks/framework-5429a50ba5373c56.js",
          revision: "5429a50ba5373c56",
        },
        {
          url: "/_next/static/chunks/main-30e599d213ca4d73.js",
          revision: "30e599d213ca4d73",
        },
        {
          url: "/_next/static/chunks/pages/_app-ce884ff7591cce9f.js",
          revision: "ce884ff7591cce9f",
        },
        {
          url: "/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",
          revision: "5a00309fd5f4b49e",
        },
        {
          url: "/_next/static/chunks/pages/about-d751033358b5a11f.js",
          revision: "d751033358b5a11f",
        },
        {
          url: "/_next/static/chunks/pages/blog-abd7ec00008576ee.js",
          revision: "abd7ec00008576ee",
        },
        {
          url: "/_next/static/chunks/pages/blog/build-you-a-tweetbot-2d474302f571c917.js",
          revision: "2d474302f571c917",
        },
        {
          url: "/_next/static/chunks/pages/blog/data-mashups-8b8c526f36fe3ba7.js",
          revision: "8b8c526f36fe3ba7",
        },
        {
          url: "/_next/static/chunks/pages/blog/electric-pentameter-175a6467929ef12f.js",
          revision: "175a6467929ef12f",
        },
        {
          url: "/_next/static/chunks/pages/blog/haskell-snacks-yesod-morpheus-graphql-bf07eb087a6efda6.js",
          revision: "bf07eb087a6efda6",
        },
        {
          url: "/_next/static/chunks/pages/blog/linux-on-windows-f14cffb6f3d80ef8.js",
          revision: "f14cffb6f3d80ef8",
        },
        {
          url: "/_next/static/chunks/pages/blog/robot-brain-scala-485a74e6bbc48082.js",
          revision: "485a74e6bbc48082",
        },
        {
          url: "/_next/static/chunks/pages/index-d558176ebf115a69.js",
          revision: "d558176ebf115a69",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-2d6c20b89449f43d.js",
          revision: "2d6c20b89449f43d",
        },
        {
          url: "/_next/static/media/avatar.ac7ffb9d.jpg",
          revision: "57e6ee88ab1af4586ba0c6d88736ffce",
        },
        {
          url: "/_next/static/media/tweepy-example.5ca123aa.png",
          revision: "a30f33890307a51568bf4f7c6e0d38b9",
        },
        {
          url: "/_next/static/media/wsl-color-probs.d19e0a16.png",
          revision: "57594359b41dc32ac49de146788e6710",
        },
        {
          url: "/_next/static/media/wsl-tmux.3fcddd25.png",
          revision: "d0e77dbacf00dd3ff2f268a448b0ba9a",
        },
        {
          url: "/_next/static/wN4Hg7_Z_nEDckJUy7Pw9/_buildManifest.js",
          revision: "a64c4b75861a93621f24b9ef425174f0",
        },
        {
          url: "/_next/static/wN4Hg7_Z_nEDckJUy7Pw9/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "1124dc5af9952ac66ab63d6dd0cf32f7",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "b05579df76c473a4fa302f9b6eaf36d0",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "f824353716b412e0bb4f0d0192039677",
        },
        {
          url: "/browserconfig.xml",
          revision: "a493ba0aa0b8ec8068d786d7248bb92c",
        },
        {
          url: "/favicon-16x16.png",
          revision: "fc14d88bc2a565afaab3a69d396eecc7",
        },
        {
          url: "/favicon-32x32.png",
          revision: "c21e0215b25078edee627634fb5c002d",
        },
        { url: "/favicon.ico", revision: "33c2c3b749d14e677feb28e13fa5665d" },
        { url: "/favicon.svg", revision: "3e2fba7ed6537dc2144da9e703e438ec" },
        { url: "/manifest.json", revision: "6eaa89f070250bd821b4d09e3bc9895c" },
        {
          url: "/mstile-144x144.png",
          revision: "2fc7509134a15dfd8bb59d4de3142b8b",
        },
        {
          url: "/mstile-150x150.png",
          revision: "b8c4b04210f76bfbf7e6c5a0e437a9fa",
        },
        {
          url: "/mstile-310x150.png",
          revision: "bb52803406c90db89bcdc969c82f82bc",
        },
        {
          url: "/mstile-310x310.png",
          revision: "a63cf9414b086bcd9c1d1cb299ea28ba",
        },
        {
          url: "/mstile-70x70.png",
          revision: "eeddf0ae47d29f78e196db27a4afe769",
        },
        {
          url: "/safari-pinned-tab.svg",
          revision: "af588a17000bcc64cc52ff86e9ec6449",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    )
})
