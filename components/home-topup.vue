<template>
  <div id="topup" class="anchor container-fluid mh-50 mx-0 px-0 row">
    <div
      class="bg-dark container col-md-6 d-flex flex-column justify-content-between align-items-center py-5 text-center text-white"
    >
      <div
        class="d-flex flex-column justify-content-between align-items-center mx-auto content h-100"
      >
        <div data-aos="fade">
          <h2 class="text-uppercase">Topup Saldo</h2>

          <ion-icon class="h2 mb-0 text-muted" name="arrow-dropdown" />
        </div>

        <ol class="list-unstyled" data-aos="fade-down-right">
          <li>Chat jenis dan nominal topup.</li>
          <li>Tulis juga nomor HP/ member.</li>
          <li>Transfer ke nomor rekening yang diberikan.</li>
        </ol>
      </div>
    </div>

    <div class="bg-light container col-md-6 p-5">
      <ul class="list-group">
        <li
          v-for="(item, index) in merchants"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
          data-aos="fade-down-left"
        >
          {{ item }}

          <span class="badge badge-primary badge-pill">
            <ion-icon name="checkmark-circle-outline" />
          </span>
        </li>
      </ul>
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
