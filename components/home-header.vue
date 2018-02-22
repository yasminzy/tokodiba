<template>
  <div class="container-fluid d-flex justify-content-center align-items-center mh-100 py-5 text-center text-white">
    <div class="container">
      <div class="mb-5" data-aos="zoom-out-left" data-aos-delay="150">
        <h1 class="display-3 font-weight-bold">Lorem ipsum dolor sit.</h1>
        <p class="cursive h5 mx-auto">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div data-aos="zoom-out-down" data-aos-delay="300">
        <a class="btn btn-primary m-3" href="#tiket">
          Lihat-Lihat
          <i class="ml-3 icon ion-android-walk"></i>
        </a>
        <a class="btn btn-outline-light m-3" href="#footer">
          Hubungi Kami
          <i class="ml-2 icon ion-chatbubbles"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-fluid {
  background: url("~/assets/img/header.jpg") center center no-repeat;

  @media (min-width: 576px) {
    background-size: cover;
  }
}
</style>
