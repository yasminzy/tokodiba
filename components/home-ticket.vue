<template>
  <div id="tiket" class="anchor">
    <div class="container-fluid py-5 text-center">
      <div
        class="container d-flex flex-column justify-content-between align-items-center mh-50"
      >
        <div class="mb-5" data-aos="fade">
          <h2 class="text-uppercase">Beli Tiket</h2>

          <ol class="list-unstyled text-muted">
            <li>
              Chat kota asal dan tujuan, tanggal berangkat, dan jumlah orang.
            </li>
            <li>Tunggu Admin mengecek harga.</li>
            <li>Transfer ke nomor rekening yang diberikan.</li>
          </ol>

          <ion-icon class="h1 mb-0 text-light" name="arrow-dropdown" />
        </div>

        <div class="row">
          <div
            v-for="(item, index) in modes"
            :key="index"
            class="border-0 card col-md-6 col-lg-3 mb-4 w-100"
          >
            <div class="card-body d-flex flex-column" data-aos="fade-down">
              <div
                class="d-flex justify-content-center align-items-center i-wrapper mb-3 mx-auto rounded-circle"
              >
                <ion-icon :name="item.icon" class="h1 icon mb-0 text-muted" />
              </div>

              <h3 class="card-title h5">{{ item.title }}</h3>

              <p class="card-text text-muted">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modes } from "@/assets/js/data";

export default {
  data() {
    return {
      modes
    };
  }
};
</script>

<style lang="scss" scoped>
.i-wrapper {
  border: 1px dashed #e0e0e0;
  height: 65px;
  width: 65px;
}

.card {
  @media (min-width: 768px) and (max-width: 992px) {
    &:nth-child(2) {
      order: 1;
    }
    &:nth-child(3) {
      order: 2;
    }
  }
}
</style>
