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
              <span class="ms-2"> {{ plan.internet }} GB</span>
            </li>
            <li class="bi bi-telephone">
              <span class="ms-2">{{ plan.minutes }} DK</span>
            </li>
            <li class="bi bi-envelope">
              <span class="ms-2"> {{ plan.sms }} SMS</span>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-md-center">
          <button @click="openPaymentModal(plan.price, plan)" class="btn btn-primary btn-lg">
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
      isInvoice: null,
      invoiceId: null,
      loginCheck: null,
    };
  },
  async created() {
    this.isLoading = true;
    this.loginCheck = this.$store.getters._getLoginCheck;
    this.isInvoice = this.$store.getters._getUserInvoice;
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

    openPaymentModal(price, plan) {
      if (this.loginCheck === null) {
        console.log(this.loginCheck);
        this.$swal
          .fire({
            title: "Hata",
            icon: "error",
            text: "Paket Almak İçin Giriş Yapın!",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Giriş Yap",
            denyButtonText: "İptal",
          })
          .then((response) => {
            if (response.isConfirmed) {
              this.$router.push({ name: "LoginPage" });
            }
          });
        return;
      }
      if (this.isInvoice === null) {
        if (/Fatura/.test(plan.planName)) {
          this.$swal.fire({
            title: "Hata",
            icon: "error",
            text: "Faturalı Olmayan Müşteriler Faturalı Paketleri Alamaz",
            showConfirmButton: true,
            confirmButtonText: "Tamam",
          });
          return;
        }
      } else {
        if (!/Fatura/.test(plan.planName)) {
          this.$swal.fire({
            title: "Hata",
            icon: "error",
            text: "Faturalı Müşteriler Faturasız Paketleri Alamaz",
            showConfirmButton: true,
            confirmButtonText: "Tamam",
          });
          return;
        }
      }
      this.$swal.close();
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
            this.CheckBalance(price, plan);
          } else if (response.isDenied) {
            this.$swal.close();
            this.$store.commit("setPaymentObject", {
              type: "plan",
              planId: plan.id,
              price: price,
              invoice: /Fatura/.test(plan.planName),
            });
            this.$swal.fire({
              title: "Lütfen Bekleyin...",
              timer: 500,
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

    async CheckBalance(price, plan) {
      this.$swal.fire({
        title: "Lütfen Bekleyin...",
        didOpen: () => {
          this.$swal.showLoading();
        },
      });
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .put(`/User/PayWithBalance?userId=${userId}&price=${price}`)
        .then((response) => {
          console.log(response);
          this.setUserPlan(plan);
          if (/Fatura/.test(plan.planName)) this.setInvoicePlan(plan);
          this.$swal.close();
          this.$swal
            .fire({
              title: "İşlem Tamamlandı.",
              icon: "success",
              html: "<br/>",
              showConfirmButton: true,
              showDenyButton: true,
              confirmButtonText: "Ana Sayfa",
              denyButtonText: "Paket Görüntüle",
            })
            .then((response) => {
              if (response.isDenied) {
                this.$store.commit("setProfileActiveTab", "UserPlan");
                this.$router.push({ name: "ProfilePage" });
              } else if (response.isConfirmed) {
                this.$router.push({ name: "HomePage" });
              }
            });
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
    async setUserPlan(plan) {
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .get(`/User/SetUserPlan?userId=${userId}&planId=${plan.id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setInvoicePlan(plan) {
      const userId = this.$store.getters._currentUserId;
      this.$appAxios
        .put(`/Invoice/SetInvoicePlan?userId=${userId}&planId=${plan.id}`)
        .then((response) => {
          console.log(response);
          this.getInvoice();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getInvoice() {
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .get(`Invoice/GetInvoice?userId=${userId}`)
        .then((response) => {
          console.log(response);
          this.$store.commit("setInvoice", response.data);
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
