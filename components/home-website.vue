<template>
<div class="anchor" id="website">
  <div class="container-fluid mh-75 py-5 text-center">
    <div data-aos="flip-right">
      <h2 class="text-uppercase">Lorem, ipsum.</h2>
      <p class="mx-auto text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quos adipisci consectetur autem itaque officia
        molestias dolor dolorem ipsam?</p>

      <i class="h2 icon ion-chevron-down mb-0 text-light"></i>
    </div>

    <div class="d-flex justify-content-center my-5" data-aos="flip-left">
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'all'">All</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'agency'">Agency</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'ecommerce'">Ecommerce</button>
      <button class="bg-transparent btn text-primary" v-on:click="visibility = 'restaurant'">Restaurant</button>
    </div>

    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(item, index) in filteredWebsites" v-bind:key="index">
        <div class="border-0 card hvr-shadow mb-4 w-100">
          <a v-bind:href="item.link">
            <div class="img-wrapper" data-aos="flip-down">
              <img class="card-img-top hvr-grow" v-bind:src="'img/' + item.img" v-bind:alt="item.title">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { websites } from "@/assets/js/data";

const filters = {
  all(websites) {
    return websites;
  },
  agency(websites) {
    return websites.filter(item => item.type == "agency");
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
