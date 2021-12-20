<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <load-animation v-if="getLoadingStatus" />
    <div v-if="!getLoadingStatus" class="row">
      <div class="row d-flex justify-content-center">
        <h6 class="d-flex justify-content-center">
          Faydalanmak istediğiniz kampanyanın üzerine tıklayınız. Şifreniz otomatik olarak panonuza
          kopyalanacaktır.
        </h6>
        <div
          class="card hover-div me-4 mt-4"
          style="width: 10rem"
          v-for="promotions in promotion"
          :key="promotions.id"
          @click="copyText(promotions.promoCode)"
        >
          <img :src="require('@/assets/' + promotions.image)" class="card-img" alt="..." />
          <div class="card-body">
            <h6 class="text-center">
              {{ promotions.promoName }}
            </h6>
            <hr />
            <p class="card-text" id="promotion-text">{{ promotions.promoDesc }}</p>
          </div>

          <!-- <button class="btn btn-primary mb-2" @click="copyURL(promotions.promoCode)">
          {{ promotions.promoCode }}
        </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  user-select: none;
}
#promotion-text {
  font-size: 14px;
  user-select: none;
}

.hover-div {
  /* padding: 10px 10px; */
  text-align: center;
  min-height: 350px;
  min-width: 300px;
  width: 350px;
}

.hover-div {
  border-top: 1px solid white;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 10px 0px;
}

.hover-div:hover {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  box-shadow: 0 22px 43px rgba(0, 0, 0, 0.32);
  cursor: auto;
  border-radius: 5px;
}
</style>

<script>
import axios from "axios";
import LoadAnimation from "./Shared/LoadAnimation.vue";

export default {
  components: {
    LoadAnimation,
  },

  methods: {
    async copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        alert("Şifre panoya kopyalandı.");
      } catch ($e) {
        alert("Kopyalanamadı.");
      }
    },
    async getData() {
      await this.$appAxios
        .get("/Promotion/GetPromotions")
        .then((response) => {
          console.log(response.data);
          this.promotion = response.data;
          console.log(this.promotion);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },
  },
  data() {
    return {
      // users: [],
      promotion: {},
      isLoading: true,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
};
</script>