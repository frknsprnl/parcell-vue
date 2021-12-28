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
            <div v-if="basketStatus === 'empty'">
              <h4 class="text-center text-danger">Sepetiniz Boş!</h4>
            </div>
            <div v-if="basketStatus === 'filled'">
              <div name="Device Area" v-for="device in deviceData" :key="device.id" class="row summary">
                <div class="row align-items-center">
                  <div class="col-4">
                    <img class="card-img ms-4" :src="require('@/assets/' + device.imageDirectory)" />
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
                <li>
                  <span class="me-5">Ürün Toplamı</span>
                  <strong v-if="totalPrice !== 0">{{ totalPrice }} TL</strong>
                </li>
                <li>
                  <span class="me-5">Kargo Toplam</span>
                  <strong v-if="totalPrice !== 0"> {{ shippingPrice }} TL</strong>
                </li>
              </ul>
              <hr style="width: 88%" />
              <span class="d-flex justify-content-center" v-if="totalPrice !== 0">
                <strong>{{ totalPrice + shippingPrice }} TL</strong>
              </span>
            </div>
            <div class="ms-3 pt-3">
              <button @click="goToPayment()" class="btn-lg btn-primary">
                Sepeti Onayla
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <span class="ms-5 mt-3" id="address-text">Teslimat Adresi</span>
          <div class="mt-2 ms-5 col-3">
            <div class="row mt-3">
              <div class="address-card" style="width: 16rem">
                <div class="d-flex justify-content-end mt-2">
                  <button
                    class="btn btn-address bi bi-pencil-square position-absolute"
                    @click="addNewAddress()"
                  ></button>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Mevcut adres</h5>

                  <p v-if="this.newAddress === null" class="card-subtitle text-muted mt-2">
                    {{ userAddress }}
                  </p>
                  <p v-else-if="this.newAddress !== null" class="card-subtitle text-muted mt-2">
                    {{ newAddress }}
                  </p>
                </div>
              </div>
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
import { ref } from "vue";
export default {
  components: {
    Navbar,
    FooterBar,
    LoadAnimation,
  },

  setup() {
    const basketStatus = ref("filled");
    return {
      basketStatus,
    };
  },

  data() {
    return {
      basketData: null,
      deviceData: null,
      isLoading: true,
      userId: this.$store.getters._currentUserId,
      totalPrice: 0,
      shippingPrice: 14.99,
      userAddress: null,
      newAddress: null,
    };
  },

  async created() {
    this.isLoading = true;
    await this.getBasketData();
    this.isLoading = false;
  },
  mounted() {
    this.userAddress = this.$store.getters._getUserAddress;
  },

  methods: {
    async getBasketData() {
      await this.$appAxios
        .get(`/Basket/GetUserBasket?userId=${this.userId}`)
        .then((response) => {
          this.basketData = response.data;
          console.log(this.basketData);
          if (this.basketData.basketDevices !== undefined && this.basketData.basketDevices.length !== 0) {
            this.getDeviceData(this.basketData.basketDevices);
            this.basketStatus = "filled";
          } else {
            this.basketStatus = "empty";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDeviceData(deviceIds) {
      this.$appAxios
        .post("/Device/GetDeviceList", [...deviceIds])
        .then((response) => {
          console.log(response);
          this.deviceData = response.data;
          this.getBasketTotalPrice();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteDevice(deviceId) {
      this.$swal.fire({
        title: "Lütfen Bekleyin...",
        html: "<br/>",
        didOpen: () => {
          this.$swal.showLoading();
        },
      });
      this.$appAxios
        .delete(`/Basket/DeleteBasketDevice?userId=${this.userId}&deviceId=${deviceId}`)
        .then((response) => {
          console.log(response);
          this.getBasketData();
          this.totalPrice = 0;
          this.$swal.close();
        })
        .catch((error) => {
          console.log(error);
          this.$swal.close();
        });
    },
    getBasketTotalPrice() {
      this.deviceData.forEach((e) => {
        this.totalPrice += e.price;
        console.log(this.totalPrice);
      });
    },
    async addNewAddress() {
      const { value: text } = await this.$swal.fire({
        input: "textarea",
        inputLabel: "Yeni teslimat adresi",
        inputPlaceholder: "Yeni teslimat adresini giriniz...",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
        confirmButtonText: "Tamam",
        cancelButtonText: "İptal",
      });
      if (text !== undefined) {
        this.newAddress = text;
        console.log(text);
      }
    },
    goToPayment() {
      let address = this.newAddress == null ? this.userAddress : this.newAddress;
      if (this.basketStatus === "empty") {
        this.$swal.fire({
          title: "Sepetinizde Ürün Bulunmuyor!",
          icon: "error",
          showConfirmButton: true,
          showCloseButton: true,
          confirmButtonText: "Tamam",
        });
      } else {
        this.$store.commit("setPaymentObject", {
          type: "basket",
          price: this.totalPrice,
          orderItem: {
            deviceIds: [...this.basketData.basketDevices],
            orderAddress: address,
            totalPrice: this.totalPrice + this.shippingPrice,
          },
        });
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
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
    getBasketStatus: () => {
      return this.basketStatus;
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
.btn-address {
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #4c3a6e;
}

.card {
  margin: auto;
  max-width: 1400px;
  width: 70%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
.address-card {
  margin: auto;
  height: 10rem;
  max-height: 10rem;
  width: 70%;
  max-width: 16rem;
  border: solid 1px #e6e6e6;
  border-radius: 1rem;
}

.card-img {
  height: 70px;
  width: 70px;
  margin-top: 7px;
  margin-bottom: 7px;
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
.btn-add {
  border-radius: 6px;
  font-size: 4rem;
  color: #4c3a6e;
  border-color: transparent;
  box-shadow: none;
}
.btn-add:hover {
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

#address-text {
  font-size: 18px;
}
</style>
