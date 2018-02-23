<template>
<div>
  <home-header />
  <home-ticket />
  <home-phone-credit />
  <home-ppob />
  <home-website />
  <home-topup />
  <home-testimonials />
  <home-statistics />
</div>
</template>

<script>
import HomeHeader from "~/components/home-header";
import HomePhoneCredit from "~/components/home-phone-credit";
import HomePpob from "~/components/home-ppob";
import HomeStatistics from "~/components/home-statistics";
import HomeTestimonials from "~/components/home-testimonials";
import HomeTicket from "~/components/home-ticket";
import HomeTopup from "~/components/home-topup";
import HomeWebsite from "~/components/home-website";

export default {
  components: {
    HomeHeader,
    HomePhoneCredit,
    HomePpob,
    HomeStatistics,
    HomeTestimonials,
    HomeTicket,
    HomeTopup,
    HomeWebsite
  }
};
</script>

<style scoped>

</style>
