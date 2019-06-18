<template>
  <div id="ppob" class="anchor mh-50 row">
    <div class="bg-light col-md-6 container-fluid p-5">
      <div
        class="d-flex flex-column justify-content-between align-items-center mx-auto content h-100"
      >
        <div data-aos="fade">
          <h2 class="text-uppercase">
            Bayar Tagihan, Pascabayar, Voucher Game, dan Kredit
          </h2>

          <hr class="bg-primary ml-0 w-25" />
        </div>

        <ol class="text-muted" data-aos="fade-up-right">
          <li>
            Chat jenis tagihan dan nomor pelanggan. Untuk voucher game, chat
            nama voucher dan nominal.
          </li>
          <li>Tunggu Admin mengecek harga.</li>
          <li>Transfer ke nomor rekening yang diberikan.</li>
        </ol>
      </div>
    </div>

    <div
      class="bg-dark col-md-6 container-fluid p-5 text-white"
      data-aos="fade-up-left"
    >
      <form class="row justify-content-center align-items-between h-100">
        <div
          v-for="(item, index) in ppob"
          :key="index"
          class="form-group col-lg-6 mb-lg-0"
          data-aos="fade-up-right"
        >
          <label :for="urlize(item.title)">{{ item.title }}</label>

          <select :id="urlize(item.title)" class="form-control">
            <option
              v-for="subitem in ppob[index].type"
              :key="urlize(subitem)"
              >{{ subitem }}</option
            >
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { ppob } from "@/assets/js/data";

export default {
  data() {
    return {
      ppob
    };
  },
  methods: {
    urlize
  }
};
</script>

<style lang="scss" scoped>
hr {
  border-top-width: 0.125rem;
}

.content {
  @media (min-width: 1200px) {
    width: 75% !important;
  }
}
</style>
