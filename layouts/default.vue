<template>
  <div class="d-flex flex-column mh-100">
    <AppNav />
    <nuxt data-aos="fade" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

:root {
  scroll-behavior: smooth;
}

::selection {
  background-color: #009688;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  padding-top: 56px;
}

p {
  max-width: 80ch;
}

article {
  max-width: 80ch;
}

article img {
  display: block;
  margin: 0.5rem auto;
}

article h2,
article > footer {
  margin-top: 3rem;
}

.anchor {
  padding-top: 56px;
  margin-top: -56px;
}

.cursive {
  font-family: "Kaushan Script", cursive !important;
  letter-spacing: 0.125rem;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-50 {
  min-height: calc(50vh - 56px);
}

.mh-75 {
  min-height: calc(75vh - 56px);
}

.mh-100 {
  min-height: calc(100vh - 56px);
}

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
