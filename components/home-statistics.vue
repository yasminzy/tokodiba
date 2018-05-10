<template>
<div class="bg-light container-fluid h-25 py-5 text-center">
  <div class="container">
    <ul class="list-unstyled mb-0 row">
      <li class="col-sm-6 col-md-4 col-xl-2 mb-4 mb-lg-0" v-for="(item, index) in statistics" v-bind:key="index" data-aos="fade-up-left">
        <span class="h3">{{ item.count }}</span><br>
        <span class="small text-muted text-uppercase">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { statistics } from "@/assets/js/data";

export default {
  data() {
    return {
      statistics
    };
  }
};
</script>

<style scoped>

</style>
