<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <h6 class="d-flex justify-content-center">
        Parcell paketleriyle yüksek hızda interneti ve zengin içerikleri doya doya yaşayabileceksiniz.
      </h6>
      <div class="card p-2 me-3 ms-4 mt-4" style="width: 18rem" v-for="plan in plan" :key="plan.id">
        <img :src="require('@/assets/' + plan.image)" class="card-img-top" alt="..." />
        <div class="card-body">
          <h6 class="text-center">{{ plan.planName }}</h6>
          <hr />
          <p class="text-center" id="promotion-text">
            {{ plan.planName }} paketiyle yüksek hızda interneti ve zengin içerikleri doya doya
            yaşayabileceksiniz. Üstelik, her yöne {{ plan.minutes }} bol bol konuşma, {{ plan.sms }},
            {{ plan.internet }} internet ile iletişimin keyfini sürün.
          </p>
        </div>
        <div class="d-flex justify-content-md-center">
          <button class="btn btn-primary btn-lg">
            <i class="bi bi-cart-plus-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: {},
    };
  },
  created() {
    this.$appAxios
      .get("/Plan/GetPlans")
      .then((response) => {
        console.log(response.data);
        this.plan = response.data;
        console.log(this.plan);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>

<style lang="sass" scoped>
@import '@/../public/style.scss'
.btn-primary
  @include button-variant($colors-purple-tawk,white)
</style>
