<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center mh-100 py-5 text-center text-white"
  >
    <div class="container" data-aos="fade-up" data-aos-delay="150">
      <div class="mb-5">
        <h1 class="display-3 font-weight-bold">Chat. Transfer. Beres.</h1>

        <p class="cursive h4 mx-auto">Cari harga terbaik gak perlu repot.</p>
      </div>

      <div>
        <a class="btn btn-primary m-3" href="#tiket">
          Lihat-Lihat
          <ion-icon class="ml-3" name="walk" />
        </a>

        <a class="btn btn-outline-light m-3" href="#footer">
          Hubungi Kami
          <ion-icon class="ml-2" name="chatbubbles" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background: url("~assets/img/header.jpg") center center no-repeat;

  @media (min-width: 576px) {
    background-size: cover;
  }
}
</style>
