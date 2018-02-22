<template>
  <div class="anchor mh-50 row" id="ppob">
    <div class="bg-light col-md-6 container-fluid p-5" data-aos="slide-right">
      <div class="d-flex flex-column justify-content-between align-items-center mx-auto content h-100">
        <div>
          <h2 class="text-uppercase">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <hr class="bg-primary ml-0 w-25">
        </div>

        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo obcaecati consequuntur! Distinctio praesentium repellendus corporis dolorum mollitia quis magni sit dolorem excepturi? Ab quasi nam voluptatum. Temporibus, facilis impedit?</p>
      </div>
    </div>

    <div class="bg-dark col-md-6 container-fluid p-5 text-white">
      <form class="row justify-content-center align-items-between h-100">
        <div class="form-group col-lg-6 mb-0" v-for="(item, index) in ppob" v-bind:key="index" data-aos="zoom-in">
          <label v-bind:for="urlize(item.title)">{{ item.title }}</label>
          <select class="form-control" v-bind:id="urlize(item.title)">
            <option v-for="(subitem, index) in ppob[index].type" v-bind:key="index">{{ subitem }}</option>
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
