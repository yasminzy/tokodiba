const webpack = require("webpack");

module.exports = {
  head: {
    title: "Toko Diba Samarinda | Chat, transfer, beres.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sedia tiket, pulsa, dan voucher game murah. Bayar tagihan, pesan website, dan topup saldo dengan mudah disini."
      },
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
          "https://fonts.googleapis.com/css?family=Kaushan+Script|Roboto:100,400"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css"
      }
    ],
    script: [
      {
        src: "/tawkto.js"
      }
    ]
  },
  css: ["aos/dist/aos.css"],
  loading: { color: "#009688" },
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
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    vendor: ["aos", "jquery", "bootstrap", "vue-lazyload"]
  },
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-90535731-4"
      }
    ]
  ],
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    "~plugins/bootstrap.js",
    "~/plugins/vue-lazyload"
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
