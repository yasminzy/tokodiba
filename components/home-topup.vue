<template>
<div class="anchor" id="topup">
  <div class="bg-light container-fluid d-flex align-items-center mh-50 py-5">
    <div class="container mx-auto row">
      <div class="col-md-6 px-lg-5" data-aos="fade">
        <h2 class="text-uppercase">Topup Saldo</h2>

        <ol class="text-muted">
          <li>Chat jenis dan nominal topup.</li>
          <li>Tulis juga nomor HP untuk Gopay dan Grabpay, nomor member untuk Paytren, atau nomor kartu untuk Mandiri.</li>
          <li>Transfer ke nomor rekening yang diberikan.</li>
        </ol>
      </div>

      <div class="col-md-6 px-lg-5">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in merchants" v-bind:key="index" data-aos="fade-up">
            {{ item }}
            <span class="badge badge-primary badge-pill">
              <i class="icon ion-md-checkmark-circle-outline"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { merchants } from "@/assets/js/data";

export default {
  data() {
    return {
      merchants
    };
  }
};
</script>

<style scoped>
</style>
