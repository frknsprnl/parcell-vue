<template>
  <div class="d-flex justify-content-center align-items-center"></div>
  <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
    <load-animation v-if="getLoadingStatus" />
    <div v-if="!getLoadingStatus" class="row">
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
import LoadAnimation from "./Shared/LoadAnimation.vue";
export default {
  components: { LoadAnimation },
  data() {
    return {
      plan: {},
      isLoading: true,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  methods: {
    async getData() {
      await this.$appAxios
        .get("/Plan/GetPlans")
        .then((response) => {
          this.plan = response.data;
          console.log(response.data);
          console.log(this.plan);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
          alert(error.response);
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
