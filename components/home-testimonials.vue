<template>
  <div class="container-fluid py-5 text-center">
    <div class="container">
      <div data-aos="fade">
        <h2 class="text-uppercase">Apa Kata Mereka</h2>

        <p class="mx-auto text-muted">Siap jadi pelanggan puas selanjutnya?</p>

        <ion-icon class="h2 mb-0 text-light" name="arrow-dropdown" />
      </div>

      <div v-cloak class="carousel slide" data-ride="carousel">
        <div class="carousel-inner mx-auto w-75">
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            class="carousel-item"
          >
            <blockquote class="blockquote mb-5" data-aos="flip-up">
              <p class="text-muted">{{ item.content }}</p>

              <footer class="blockquote-footer mt-5">
                <cite>
                  <span class="font-weight-bold">{{ item.name }}</span
                  ><br />
                  <small class="cursive">{{ item.location }}</small>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
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
.avatar {
  height: 5rem;
  width: 5rem;
}

.blockquote-footer::before {
  content: "";
}

cite span {
  font-style: normal;
}
</style>
