<template>
<div class="anchor" id="barang">
  <div class="bg-light container-fluid d-flex align-items-center mh-50 py-5">
    <div class="container mx-auto row">
      <div class="col-md-6 px-lg-5" data-aos="fade-down-left
">
        <h2>Lorem, ipsum dolor.</h2>

        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officiis deleniti incidunt animi reprehenderit est magnam. Sapiente minima reiciendis totam, in, neque suscipit eum ex, accusantium tenetur odit impedit! Fuga?</p>
      </div>

      <div class="col-md-6 px-lg-5">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in cargoFeatures" v-bind:key="index" data-aos="fade-down-right">
            {{ item }}
            <span class="badge badge-primary badge-pill">
              <i class="icon ion-checkmark-round"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { cargoFeatures } from "@/assets/js/data";

export default {
  data() {
    return {
      cargoFeatures
    };
  }
};
</script>

<style scoped>

</style>
