<template>
  <div class="bg-light container-fluid h-25 py-5 text-center">
    <div class="container">
      <h2 class="text-uppercase">Jumlah transaksi</h2>

      <hr class="bg-primary w-25" />

      <ul class="list-unstyled mb-0 row">
        <li
          v-for="(item, index) in statistics"
          :key="index"
          class="col-sm-6 col-md-4 col-xl-2 mb-4"
          data-aos="flip-down"
        >
          <span class="h3">{{ item.count }}</span
          ><br />
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
