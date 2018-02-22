<template>
<div class="anchor container-fluid mh-50 mx-auto px-0 row text-center" id="pulsa">
  <div class="bg-dark container col-md-6 d-flex flex-column justify-content-between align-items-center py-5 text-white">
    <div data-aos="zoom-in-right">
      <h2 class="text-uppercase">Lorem, ipsum dolor.</h2>
      <i class="h2 icon ion-chevron-down mb-0 text-muted"></i>
    </div>

    <ul class="d-flex list-unstyled my-5" data-aos="zoom-in-left">
      <li class="mx-2" v-for="(item, index) in providers" v-bind:key="index">
        <img class="img-fluid rounded-circle" v-bind:src="'/img/' + item.toLowerCase()  + '-logo.jpg'" v-bind:alt="item">
      </li>
    </ul>

    <div data-aos="zoom-in-down">
      <h3>Lorem, ipsum.</h3>
      <hr class="bg-primary w-25">
      <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit optio, porro ipsum aliquam mollitia dolore accusantium amet alias temporibus cumque nihil maxime tempore officia facere sequi neque numquam non.</p>
    </div>
  </div>

  <div class="bg container col-md-6 py-5" data-aos="zoom-in-up">
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
  background: url("~/assets/img/pulsa.jpg")
    center center no-repeat;
  background-size: cover;
}
</style>
