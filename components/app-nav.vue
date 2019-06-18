<template>
  <nav
    class="bg-white navbar fixed-top navbar-expand-lg navbar-light w-100"
    data-aos="fade"
  >
    <nuxt-link class="navbar-brand" to="/">
      <img
        class="d-inline-block align-top"
        src="~assets/img/logo.png"
        alt="Logo"
        width="30"
        height="30"
      />
      <span class="font-weight-bold">Toko Diba</span>
    </nuxt-link>

    <button
      class="border-0 navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto w-auto">
        <li v-for="(item, index) in menu" :key="index" class="nav-item">
          <a class="nav-link" :href="item.to">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { to: "#tiket", label: "Beli Tiket" },
        { to: "#pulsa", label: "Isi Pulsa" },
        { to: "#ppob", label: "Bayar Tagihan" },
        { to: "#topup", label: "Topup Saldo" }
      ]
    };
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>
