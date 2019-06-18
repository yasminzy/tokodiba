<template>
  <footer id="footer" class="anchor">
    <div class="mask mt-0 text-white w-100">
      <div class="container-fluid py-5">
        <div class="container mx-auto row" data-aos="fade">
          <div class="col-lg-6 mb-3 mb-lg-0">
            <h3 class="text-uppercase mb-3">Toko Diba</h3>

            <ul class="list-unstyled mb-0">
              <li v-for="(item, index) in contact" :key="index">
                <a class="row text-white" :href="item.link">
                  <ion-icon :name="item.icon" class="col-1 p-0" />
                  <p class="col-11">{{ item.text }}</p>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-6">
            <a
              class="twitter-timeline"
              data-lang="id"
              data-theme="light"
              data-link-color="#009688"
              href="https://twitter.com/tokodiba?ref_src=twsrc%5Etfw"
              >Tweets by tokodiba</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>

      <div class="bg-dark container-fluid py-1">
        <div class="container d-flex">
          <small class="mb-0"
            >&copy; 2018-2019 tokodiba.com. All Rights Reserved</small
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      tweet: "",
      contact: [
        {
          icon: "locate",
          text: "Jalan Perjuangan Alam Segar 2 no. 7 Samarinda 75119",
          link:
            "https://www.google.co.id/maps/place/Gang+Alam+Segar+2,+Sempaja+Sel.,+Samarinda+Utara,+Kota+Samarinda,+Kalimantan+Timur+75243/@-0.4622175,117.1543209,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x2df678b13f74d0f9:0xed72e7c4151861ab!2sGang+Alam+Segar+3,+Sempaja+Sel.,+Samarinda+Utara,+Kota+Samarinda,+Kalimantan+Timur+75243!3b1!8m2!3d-0.4616886!4d117.1563817!3m4!1s0x2df678b1310288b9:0x7ada1cacb1562a3e!8m2!3d-0.4622229!4d117.1565096?hl=en"
        },
        {
          icon: "phone-portrait",
          text: "085251982080",
          link: "tel:085251982080"
        },
        {
          icon: "mail",
          text: "admin@tokodiba.com",
          link: "mailto:admin@tokodiba.com"
        },
        {
          icon: "logo-twitter",
          text: "tokodiba",
          link: "https://twitter.com/tokodiba"
        }
      ]
    };
  },
  // created: async function() {
  //   try {
  //     const url =
  //       "GET https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=yzyusrina&count=2";

  //     let response = await fetch(url);

  //     if (response.ok) {
  //       console.log(response);
  //       this.tweet = response[0].text;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>

<style scoped>
footer {
  background: url("~assets/img/smd.png") center center no-repeat;
  background-size: cover;
}

.mask {
  background-color: rgba(33, 33, 33, 0.85);
  margin-top: -56px !important;
}
</style>
