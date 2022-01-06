<template>
  <div class="w-100 p-3 d-flex justify-content-center">
    <div class="row pt-4">
      <div class="col-12">
        <div class="card shadow-2-strong" style="border-radius: 15px">
          <load-animation v-if="getLoadingStatus" />
          <div v-if="!getLoadingStatus && errorMessage === null" class="card-body">
            <div class="p-3 bg-white rounded">
              <div class="row">
                <div class="col">
                  <h3 class="text-uppercase mb-4">Faturalarım</h3>
                  <div class="billed">
                    <span class="font">
                      <strong>Ad Soyad: </strong>
                    </span>
                    <span class="ml-1"> {{ user.name + " " + user.surname }}</span>
                  </div>
                  <div class="billed">
                    <span class="font-weight-bold"></span>
                    <strong> Sözleşme Bitiş Tarihi: </strong>
                    <span class="ml-1"> {{ contractEnd }} </span>
                  </div>
                  <div class="billed">
                    <span class="font-weight-bold"></span>
                    <strong> Sözleşme Süresi: </strong>
                    <span class="ml-1"> {{ invoiceData.contractTime }}</span>
                  </div>
                  <div class="billed">
                    <span class="font-weight-bold"> <strong>Fatura Kesim Tarihi:</strong> </span
                    ><span class="ms-1">{{ billingDate }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <!-- <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Ürün</th>
                        <th>Birim</th>
                        <th>Fiyat</th>
                        <th>Toplam</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mega Online Paket</td>
                        <td>1</td>
                        <td>200</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Toplam</td>
                        <td>200</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="col-12 mt-4 d-flex justify-content-end">
                    <button @click="goToPayment()" class="btn btn-primary">Fatura Öde</button>
                  </div>
                </div> -->
                <div v-if="!getLoadingStatus && invoiceMessage !== null" class="mb-3">
                  <div class="text-center text-danger">{{ invoiceMessage }}</div>
                </div>
                <div class="row summary">
                  <div class="row justify-content-sm-between align-items-center">
                    <div class="col-2">
                      <img class="card-img" :src="require('@/assets/' + planData.image)" />
                    </div>
                    <div class="col-4 text-center">
                      <h5>Paket Adı</h5>
                      <div class="row text-muted text-center">
                        <span class="text-center">{{ planData.planName }}</span>
                      </div>
                    </div>
                    <div class="col-4 text-center">
                      <h5>Paket Fiyatı</h5>
                      <div class="row text-muted">
                        <span class="text-center">{{ planData.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4 d-flex justify-content-end">
                  <div class="col-4">
                    <input class="form-input col-3" type="number" v-model="changedDate" />
                    <button @click="changeDate()" class="btn btn-primary">Tarih Değiştir</button>
                  </div>
                  <button @click="goToPayment()" class="btn btn-primary">Fatura Öde</button>
                </div>
                <div class="d-flex justify-content-sm-start">
                  <button @click="cancelInvoice()" class="btn btn-primary">Abonelik İptali</button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!getLoadingStatus && errorMessage !== null" class="card-body">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadAnimation from "../Shared/LoadAnimation.vue";
import moment from "moment";
export default {
  components: { LoadAnimation },
  data() {
    return {
      user: null,
      invoiceData: null,
      planData: null,
      isLoading: false,
      contractEnd: null,
      billingDate: null,
      errorMessage: null,
      changedDate: null,
      isPayable: false,
      invoiceMessage: null,
    };
  },
  async created() {
    this.isLoading = true;
    this.invoiceData = this.$store.getters._getUserInvoice;
    if (this.invoiceData === null) {
      this.isLoading = false;
      this.errorMessage = "Faturalı Hattınız Bulunmamaktadır";
    }
    moment.locale("tr");
    console.log(this.invoiceData);
    this.billingDate = moment(this.invoiceData.billingDate).format("LLLL");
    if (this.invoiceData.contractTime === "6 Ay") {
      this.contractEnd = moment(this.invoiceData.contractDate).add(6, "month").format("LLLL");
    } else {
      this.contractEnd = moment(this.invoiceData.contractDate).add(12, "month").format("LLLL");
    }

    this.user = this.$store.getters._getCurrentUser;

    await this.getPlanData();
    this.isLoading = false;
  },
  mounted() {
    if (this.errorMessage === null) {
      var now = moment();
      console.log(this.isPayable);
      if (now.isAfter(this.invoiceData.billingDate)) {
        this.isPayable = true;
        this.invoiceMessage = "Faturanızın Son Ödeme Tarihi Geçmiş. Lütfen Faturanızı Ödeyin!";
        if (now.diff(this.invoiceData.billingDate, "days") > 7) {
          this.$swal.fire({
            icon: "warning",
            title: "Dikkat",
            text: "Faturanızın Son Ödeme Tarihi Geçmiş. Lütfen Faturanızı Ödeyin!",
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: "Tamam",
          });
        }
      }
    }
  },
  methods: {
    goToPayment() {
      if (this.isPayable === false) {
        this.$swal.fire({
          title: "Hata",
          icon: "error",
          text: "Fatura Kesim Tarihinden Önce Ödeme Yapamazsınız",
          showConfirmButton: true,
          confirmButtonText: "Tamam",
        });
      } else {
        this.$swal
          .fire({
            title: "Dikkat",
            icon: "warning",
            text: "Ödeme Sayfasına Yönledirileceksiniz Emin Misiniz ?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Ödemeye Git",
            denyButtonText: "İptal",
          })
          .then((response) => {
            if (response.isConfirmed) {
              this.$store.commit("setPaymentObject", { type: "invoice", price: this.planData.price });
              this.$swal.close();
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
      }
    },
    cancelInvoice() {
      this.$swal
        .fire({
          title: "Dikkat",
          icon: "warning",
          text: "Faturalı Aboneliğinizi İptal Etmek Üzeresiniz Emin Misiniz ?",
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: "Evet",
          denyButtonText: "Hayır",
        })
        .then((response) => {
          if (response.isConfirmed) {
            this.$swal.close();
            this.$swal.fire({
              title: "Lütfen Bekleyin...",
              timer: 500,
              didOpen: () => {
                this.$swal.showLoading();
              },
            });
            this.$appAxios
              .delete(`/Invoice/CancelInvoice?userId=${this.user.id}`)
              .then((response) => {
                console.log(response);
                this.$store.commit("setInvoice", null);
                this.$store.commit("setProfileActiveTab", "UserDetails");
                this.$router.push({ name: "ProfilePage" });
              })
              .catch((error) => {
                console.log(error);
                this.$swal.close();
              });
          }
        });
    },
    async getPlanData() {
      await this.$appAxios
        .get(`/Plan/GetPlan/${this.invoiceData.planId}`)
        .then((response) => {
          this.planData = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },
    async changeDate() {
      if (this.changedDate !== null) {
        this.changedDate = parseFloat("" + this.changedDate);
        await this.$appAxios
          .put(`/Invoice/ChangeBillDate?userId=${this.user.id}&day=${this.changedDate}`)
          .then((response) => {
            this.getInvoice();
            console.log(response);
          })
          .cath((error) => {
            console.log(error);
          });
      }
    },
    async getInvoice() {
      await this.$appAxios
        .get(`Invoice/GetInvoice?userId=${this.user.id}`)
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
