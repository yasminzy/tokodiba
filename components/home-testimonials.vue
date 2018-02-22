<template>
<div class="container-fluid py-5 text-center">
  <div class="container">
    <div data-aos="fade-up-left">
      <h2 class="text-uppercase">Lorem, ipsum dolor.</h2>

      <p class="mx-auto text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quos adipisci consectetur autem itaque officia
        molestias dolor dolorem ipsam?</p>

      <i class="h2 icon ion-chevron-down mb-0 text-light"></i>
    </div>

    <div class="carousel slide" id="controls" data-ride="carousel" v-cloak>
      <div class="carousel-inner mx-auto w-75">
        <div class="carousel-item" v-for="(item, index) in testimonials" v-bind:key="index">
          <img class="avatar hvr-grow img-fluid my-5 rounded-circle" v-bind:src="'img/' + urlize(item.name) + '.jpg'" v-bind:alt="item.name" data-aos="fade-up-right">

          <blockquote class="blockquote mb-5" data-aos="fade-right">
            <p class="text-muted">{{ item.content }}</p>

            <footer class="blockquote-footer mt-5">
              <cite>
                <span class="font-weight-bold">{{ item.name }}</span><br>
                <small class="cursive">{{ item.location }}</small>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      <a class="carousel-control-prev" href="#controls" role="button" data-slide="prev" data-aos="fade-right">
        <i class="h3 icon ion-chevron-left text-dark" />
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#controls" role="button" data-slide="next" data-aos="fade-right">
        <i class="h3 icon ion-chevron-right text-dark" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { urlize } from "@/assets/js/functions";
import { testimonials } from "@/assets/js/data";

export default {
  data() {
    return {
      testimonials
    };
  },
  mounted() {
    document.querySelector(".carousel-item").className += " active";
  },
  methods: {
    urlize
  }
};
</script>

<style scoped>
.blockquote-footer::before {
  content: "";
}

cite span {
  font-style: normal;
}

.avatar {
  height: 5rem;
  width: 5rem;
}
</style>
