<template>
<div class="anchor">
  <div class="container-fluid d-flex justify-content-center align-items-center mh-75 parallax py-5" id="topup" data-aos="flip-up">
    <div class="container">
      <h2 class="h1 cursive text-center text-white">Lorem ipsum dolor sit amet consectetur</h2>

      <form class="row justify-content-center align-items-between w-100">
        <div class="form-group col-lg-6 mb-0">
          <label for="topup"></label>
          <select class="form-control" id="topup">
            <option v-for="(item, index) in topup" v-bind:key="index">{{ item }}</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { topup } from "@/assets/js/data";

export default {
  data() {
    return {
      topup
    };
  }
};
</script>

<style lang="scss" scoped>
.parallax {
  background: center center no-repeat;
  background-size: cover;

  @media (min-width: 576px) {
    background-attachment: fixed;
  }
}

.container-fluid {
  background-image: url("~/assets/img/topup.jpg");
}
</style>
