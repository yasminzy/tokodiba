<template>
  <div>
    <HomeHeader />
    <HomeTicket />
    <HomePhoneCredit />
    <HomePpob />
    <HomeTopup />
    <HomeTestimonials />
    <HomeStatistics />
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

export default {
  components: {
    HomeHeader,
    HomePhoneCredit,
    HomePpob,
    HomeStatistics,
    HomeTestimonials,
    HomeTicket,
    HomeTopup
  }
};
</script>
