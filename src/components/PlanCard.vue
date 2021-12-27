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

          <ul class="list-unstyled" id="planlist">
            <li class="bi bi-globe">
              <span class="ms-2"> {{ plan.internet }}</span>
            </li>
            <li class="bi bi-telephone">
              <span class="ms-2">{{ plan.minutes }}</span>
            </li>
            <li class="bi bi-envelope">
              <span class="ms-2"> {{ plan.sms }} </span>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-md-center">
          <button @click="openPaymentModal(plan.price, plan.id)" class="btn btn-primary btn-lg">
            <i class="bi bi-cart-plus-fill me-2"></i>
            <span>{{ plan.price }}₺ </span>
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

    openPaymentModal(price, planId) {
      this.$swal
        .fire({
          title: "Lütfen Ödeme Yöntemi Seçin",
          showCloseButton: true,
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: "Bakiye",
          denyButtonText: "Kredi Kartı",
        })
        .then((response) => {
          if (response.isConfirmed) {
            this.CheckBalance(price, planId);
          } else {
            this.$swal.close();
            this.$store.commit("setPaymentObject", { type: "plan", planId: planId, price: price });
            this.$swal.fire({
              title: "Lütfen Bekleyin...",
              timer: 1000,
              didOpen: () => {
                this.$swal.showLoading();
              },
              didClose: () => {
                this.$router.push({ name: "PaymentPage" });
              },
            });
          }
        });
    },

    async CheckBalance(price, planId) {
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .put(`/User/PayWithBalance?userId=${userId}&price=${price}`)
        .then((response) => {
          console.log(response);
          this.setUserPlan(planId);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            this.$swal.fire({
              icon: "error",
              title: error.response.data,
              showCloseButton: true,
              showConfirmButton: true,
              confirmButtonText: "Tamam",
            });
          }
        });
    },
    async setUserPlan(planId) {
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .get(`/User/SetUserPlan?userId=${userId}&planId=${planId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
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

<style scoped>
#planlist > li > span {
  font-size: 1.15rem;
}
</style>
