<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div class="">
      <navbar />
      <load-animation class="mt-4" v-if="getLoadingStatus" />
      <div v-if="!getLoadingStatus" class="container mt-4" :key="contact.id">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5 mt-5">
            <h2 class="heading1">{{ contact.header }}</h2>
            <br />
            <h6>
              {{ contact.headerText }}
            </h6>
          </div>
        </div>

        <br />

        <div class="panel-body contact-content mb-3" id="contact-panel">
          <div class="row">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
              <div class="card-body p-md-4">
                <div class="row d-flex justify-content-center">
                  <div class="col-4" id="contact-address">
                    <strong>Kurumsal adresimiz</strong>
                    <p>{{ contact.address }}</p>
                  </div>
                  <div class="col-5">
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe
                          class="rounded-3"
                          width="460"
                          height="250"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=Isparta%20S%C3%BCleyman%20Demirel%20M%C3%BChendislik&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        ></iframe
                        ><br />
                      </div>
                    </div>
                  </div>
                </div>
                <!--The div element for the map -->
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="d-flex justify-content-center">
          <tr>
            <td>
              <strong>
                <i class="bi-telephone-fill" style="color: #666690"></i>
                İletişim No.
              </strong>
            </td>
          </tr>
        </div>
        <div class="d-flex justify-content-center">
          {{ contact.bottomText }}
        </div>
      </div>
    </div>
  </div>
  <footer-bar />
</template>

<script>
import FooterBar from "../components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
import LoadAnimation from "../components/Shared/LoadAnimation.vue";
export default {
  data() {
    return {
      center: { lat: 37.83013, lng: 30.5262 },
      contact: {},
      id: "61bcb122da08106680ea3a08",
      isLoading: true,
    };
  },

  components: {
    Navbar,
    FooterBar,
    LoadAnimation,
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  mounted() {},
  methods: {
    async getData() {
      await this.$appAxios
        .get("/Contact/GetContact/" + this.id)
        .then((response) => {
          console.log(response.data);
          this.contact = response.data;
          console.log(this.contact);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
};
</script>

<style type="application/javascript">
/* Set the size of the div element that contains the map */
#map {
  height: 300px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
  margin-bottom: 10px;
  margin-top: 10px;
  padding-right: 230px;
  border-radius: 15px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 250px;
  width: 450px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 250px;
  width: 450px;
}
#contact-address {
  margin-top: 40px;
  font-size: 16px;
  margin-right: 140px;
  margin-left: 20px;
}
#contact-panel {
  width: 65em;
  margin-left: 120px;
}
</style>
