<template>
<footer class="anchor" id="footer">
  <div class="mt-auto text-white w-100">
    <div class="bg container-fluid py-5">
      <div class="container mx-auto row" data-aos="fade">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h3 class="text-uppercase mb-3">Toko Diba</h3>

          <ul class="list-unstyled mb-0">
            <li v-for="(item, index) in contact" v-bind:key="index">
              <a class="row text-white" v-bind:href="item.link">
                <i v-bind:class="'col-1 icon ion-' + item.icon + ' p-0'"></i>
                <p class="col-11">{{ item.text }}</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-6">
          <h3 class="h6 text-uppercase mb-3">Latest Tweets</h3>

          <p>No tweet yet.</p>
          <!-- <p>{{ tweet }}</p> -->
        </div>
      </div>
    </div>

    <div class="bg-dark container-fluid py-1">
      <div class="container d-flex">
        <small class="mb-0">&copy; 2018 tokodiba.com. All Rights Reserved</small>
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
          icon: "location",
          text: "Jalan Perjuangan Alam Segar II no. 7 Samarinda 75119",
          link:
            "https://www.google.co.id/maps/place/Gang+Alam+Segar+2,+Sempaja+Sel.,+Samarinda+Utara,+Kota+Samarinda,+Kalimantan+Timur+75243/@-0.4622175,117.1543209,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x2df678b13f74d0f9:0xed72e7c4151861ab!2sGang+Alam+Segar+3,+Sempaja+Sel.,+Samarinda+Utara,+Kota+Samarinda,+Kalimantan+Timur+75243!3b1!8m2!3d-0.4616886!4d117.1563817!3m4!1s0x2df678b1310288b9:0x7ada1cacb1562a3e!8m2!3d-0.4622229!4d117.1565096?hl=en"
        },
        {
          icon: "iphone",
          text: "085251982080",
          link: "tel:085251982080"
        },
        {
          icon: "email",
          text: "admin@tokodiba.com",
          link: "mailto:admin@tokodiba.com"
        },
        {
          icon: "social-twitter",
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
  background: url("~/assets/img/smd.png") center center no-repeat;
  background-size: cover;
}

.container-fluid {
  background-color: rgba(33, 33, 33, 0.85);
}
</style>
