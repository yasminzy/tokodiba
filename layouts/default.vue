<template>
<div class="d-flex flex-column mh-100">
  <app-nav />
  <nuxt data-aos="fade" />
  <app-footer />
</div>
</template>

<script>
import AppFooter from "~/components/app-footer";
import AppNav from "~/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style scoped>

</style>
