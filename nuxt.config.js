const webpack = require("webpack");

export default {
  mode: "universal",
  head: {
    title: "Toko Diba",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sedia tiket, pulsa, dan voucher game murah. Bayar tagihan, dan topup saldo dengan mudah disini."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Kaushan+Script|Roboto:100,400"
      }
    ],
    script: [
      {
        src: "/tawkto.js"
      },
      {
        src: "~jquery/dist/jquery.min.js",
        body: true
      },
      { src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }
    ]
  },
  loading: { color: "#009688" },
  css: ["aos/dist/aos.css"],
  plugins: [
    "~/plugins/bootstrap",
    "~/plugins/vue-lazyload",
    { src: "~/plugins/aos", ssr: false }
  ],
  modules: [["@nuxtjs/google-analytics", { id: "UA-90535731-4" }]],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
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
    ]
  },
  router: {
    scrollBehavior: function() {
      return { x: 0, y: 0 };
    }
  }
};
