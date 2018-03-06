<template>
<div class="anchor" id="website">
  <!-- <div class="container-fluid mh-75 py-5 text-center"> -->
  <div class="container-fluid mh-50 d-flex justify-content-center align-items-center py-5 text-center">
    <div data-aos="fade">
      <h2 class="text-uppercase">Buat Website</h2>
      <ol class="list-unstyled text-muted">
        <li>Chat jenis website</li>
        <li>Pilih alamat website.</li>
        <li>Transfer DP 50% ke nomor rekening yang diberikan.</li>
        <li>Kirim konten website.</li>
        <li>Tunggu ~1 minggu.</li>
        <li>Transfer sisa biaya.</li>
      </ol>

      <!-- <i class="h2 icon ion-chevron-down mb-0 text-light"></i> -->
    </div>

    <!-- <div class="d-flex justify-content-center my-5" data-aos="fade-down">
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'all'">Semua</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'profile'">Profil Usaha</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'ecommerce'">Toko Online</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'restaurant'">Rumah Makan</button>
    </div>

    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in filteredWebsites" v-bind:key="index">
        <div class="border-0 card mb-4 w-100">
          <a v-bind:href="item.link">
            <div class="img-wrapper" data-aos="fade">
              <img class="card-img-top hvr-grow" v-bind:src="'img/' + item.img" v-bind:alt="item.title">
            </div>
          </a>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
import { websites } from "@/assets/js/data";

const filters = {
  all(websites) {
    return websites;
  },
  profile(websites) {
    return websites.filter(item => item.type == "profile");
  },
  ecommerce(websites) {
    return websites.filter(item => item.type == "ecommerce");
  },
  restaurant(websites) {
    return websites.filter(item => item.type == "restaurant");
  }
};

export default {
  data() {
    return {
      visibility: "all",
      websites
    };
  },
  computed: {
    filteredWebsites() {
      return filters[this.visibility](websites);
    }
  }
};
</script>

<style scoped>

</style>
