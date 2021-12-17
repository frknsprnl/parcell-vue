<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <div class="row d-flex justify-content-center">
      <div
        class="card hover-div me-3"
        style="width: 10rem"
        v-for="promotions in promotion"
        :key="promotions.id"
      >
        <img :src="require('@/assets/' + promotions.image)" class="card-img" alt="..." />
        <div class="card-body">
          <h6 class="text-center">
            {{ promotions.promoName }}
          </h6>
          <hr />
          <p class="card-text" id="promotion-text">{{ promotions.promoDesc }}</p>
        </div>

        <button class="btn btn-primary mb-2">
          {{ promotions.promoCode }}
        </button>
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

export default {
  components: {
    //
  },
  data() {
    return {
      // users: [],
      promotion: {},
    };
  },
  created() {
    this.$appAxios
      .get("https://parcell-backend.azure-api.net/v1/api/Promotions/GetPromoList")
      .then((response) => {
        console.log(response.data);
        this.promotion = response.data;
        console.log(this.promotion);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>