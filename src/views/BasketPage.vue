<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <load-animation class="mt-4" v-if="getLoadingStatus" />
      <div class="card mt-4" v-if="!getLoadingStatus">
        <div class="row py-5">
          <div class="title ms-5 mb-2">
            <h1>Sepet</h1>
          </div>
          <div class="col-8 summary ms-5">
            <div name="Plan Area" v-if="planData !== null" class="row summary">
              <div class="row align-items-center">
                <div class="col-4">
                  <img class="card-img" :src="require('@/assets/' + planData.image)" />
                </div>
                <div class="col-4">
                  <div class="row text-muted">{{ planData.planName }}</div>
                </div>

                <div class="col-4">
                  {{ planData.price }} <span class="close"></span>
                  <button
                    @click="deletePlan(planData.id)"
                    class="btn btn-delete d-flex float-end bi bi-trash"
                  ></button>
                </div>
              </div>
            </div>
            <div v-if="deviceData !== null">
              <div name="Device Area" v-for="device in deviceData" :key="device.id" class="row summary">
                <div class="row align-items-center">
                  <div class="col-4">
                    <img class="card-img" :src="require('@/assets/' + device.imageDirectory)" />
                  </div>
                  <div class="col-4">
                    <div class="row text-muted">{{ device.name }}</div>
                  </div>
                  <div class="col-4">
                    {{ device.price }} <span class="close"></span>
                    <button
                      @click="deleteDevice(device.id)"
                      class="btn btn-delete d-flex float-end bi bi-trash"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="summary-box ms-3">
              <h1 class="mb-2">Sipariş Özeti</h1>
              <ul class="list-unstyled mt-4">
                <li><span class="me-5">Ürün Toplamı</span> <strong>000 TL</strong></li>
                <li><span class="me-5">Kargo Toplam</span> <strong>000 TL</strong></li>
              </ul>
              <hr style="width: 80%" />

              <span> 000TL</span>
            </div>
            <div class="ms-3 pt-3">
              <router-link :to="{ name: 'PaymentPage' }">
                <button class="btn-lg btn-primary">
                  Sepeti Onayla
                  <i class="bi bi-chevron-right"></i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-bar />
</template>

<script>
import Navbar from "@/components/Shared/Navbar.vue";
import FooterBar from "@/components/Shared/FooterBar.vue";
import LoadAnimation from "../components/Shared/LoadAnimation.vue";
export default {
  components: {
    Navbar,
    FooterBar,
    LoadAnimation,
  },

  data() {
    return {
      basketData: null,
      planData: null,
      deviceData: null,
      isLoading: true,
      userId: this.$store.getters._currentUserId,
    };
  },

  async created() {
    //await this.getPlanData();
    this.isLoading = true;
    await this.getBasketData();
    this.isLoading = false;
  },

  methods: {
    getBasketData() {
      this.$appAxios
        .get(`/Basket/GetUserBasket?userId=${this.userId}`)
        .then((response) => {
          this.basketData = response.data;
          console.log(this.basketData);
          console.log(this.basketData.planId);
          this.getPlanData(this.basketData.planId);
          this.getDeviceData(this.basketData.basketDevices);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPlanData(planId) {
      this.$appAxios
        .get(`/Plan/GetPlan/${planId}`)
        .then((response) => {
          this.planData = response.data;
          console.log(this.planData);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            this.planData = null;
          }
        });
    },
    getDeviceData(deviceIds) {
      this.$appAxios
        .post("/Device/GetDeviceList", [...deviceIds])
        .then((response) => {
          console.log(response);
          this.deviceData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteDevice(deviceId) {
      this.$appAxios
        .delete(`/Basket/DeleteBasketDevice?userId=${this.userId}&deviceId=${deviceId}`)
        .then((response) => {
          console.log(response);
          this.getBasketData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePlan(planId) {
      this.$appAxios
        .delete(`/Basket/DeleteBasketPlan?userId=${this.userId}&deviceId=${planId}`)
        .then((response) => {
          console.log(response);
          this.getBasketData();
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
h1 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.card {
  margin: auto;
  max-width: 1400px;
  width: 70%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
.card-img {
  height: 90px;
  width: 140px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.cart {
  margin-right: 40px;
}

hr {
  margin-top: 1.25rem;
}

.btn-primary {
  border-radius: 6px;
  width: 264px;
  height: 60px;
}
.btn-delete {
  border-radius: 6px;
  font-size: 1.2rem;
  color: #4c3a6e;
  border-color: transparent;
  box-shadow: none;
}
.btn-delete:hover {
  color: #dc3545;
}
.summary {
  border-radius: 6px;
  border: solid 1px #e6e6e6;
}
.summary-box {
  padding: 15px;
  border-radius: 6px;
  border: solid 1px #e6e6e6;
}
</style>
