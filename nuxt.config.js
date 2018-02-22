module.exports = {
  head: {
    title: "Toko Diba",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      {
        name: "http-equiv",
        content: "default-src 'self'; font-src 'self' data: fonts.gstatic.com;"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,400|Shadows+Into+Light"
      },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
        crossorigin: "anonymous",
        body: true
      },
      {
        src: "https://unpkg.com/popper.js/dist/umd/popper.min.js",
        body: true
      },
      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity:
          "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossorigin: "anonymous",
        body: true
      },
      {
        src:
          "/tawkto.js"
      }
    ]
  },
  loading: { color: "#e91e63" },
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-90535731-4"
      }
    ]
  ],
  css: [
    "aos/dist/aos.css",
    "~/assets/css/global.css",
    "~/assets/css/custom-bootstrap.css"
  ],
  plugins: [{ src: "~/plugins/aos.js", ssr: false }],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ["aos"]
  }
};
