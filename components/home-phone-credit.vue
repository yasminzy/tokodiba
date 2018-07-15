<template>
<div class="anchor container-fluid mh-50 mx-auto px-0 row" id="pulsa">
  <div class="bg-dark container col-md-6 d-flex flex-column justify-content-between align-items-center py-5 text-center text-white">
    <div data-aos="fade">
      <h2 class="text-uppercase">Beli Pulsa</h2>
      <i class="h2 icon ion-md-arrow-dropdown mb-0 text-muted"></i>
    </div>

    <ul class="d-flex list-unstyled my-5" data-aos="fade-left">
      <li class="mx-2" v-for="(item, index) in providers" v-bind:key="index">
        <img class="img-fluid rounded-circle" v-lazy="'img/' + item.toLowerCase()  + '-logo.jpg'" v-bind:alt="item">
      </li>
    </ul>

    <div data-aos="fade-right">
      <h3>Semua Operator</h3>
      <hr class="bg-primary w-25">
      <ol class="list-unstyled small">
        <li>Chat nomor HP dan nominal pulsa.</li>
        <li>Tunggu Admin mengecek harga.</li>
        <li>Transfer ke nomor rekening yang diberikan.</li>
      </ol>
    </div>
  </div>

  <div class="bg container col-md-6 py-5" data-aos="fade">
  </div>
</div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { providers } from "@/assets/js/data";

export default {
  data() {
    return {
      providers
    };
  },
  methods: {
    lower(input) {
      return input.toLowerCase();
    }
  }
};
</script>

<style scoped>
hr {
  border-top-width: 0.125rem;
}

img {
  max-height: 2rem;
}

.bg {
  background: url("~/assets/img/pulsa.jpg") center center no-repeat;
  background-size: cover;
}
</style>
