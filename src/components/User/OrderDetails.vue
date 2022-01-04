<template>
  <div class="card mt-4">
    <div class="row">
      <div class="title ms-5 mb-2">
        <h1>Siparişlerim</h1>
      </div>
      <div class="col-8 summary ms-5">
        <div class="row summary-box">
          <div class="row align-items-center row-1">
            <div class="col-3 text-muted"><strong>Sipariş Tarihi</strong></div>

            <div class="col-3 text-muted"><strong class="ms-5">Alıcı</strong></div>

            <div class="col-4 text-muted"><strong class="ms-5">Tutar</strong></div>
          </div>
        </div>
        <div class="scrollable">
          <div class="row align-items-center row-2 mb-2" v-for="order in orderData" :key="order.id">
            <div class="col-3">
              <span class="ms-2">{{ order.orderDate }}</span>
            </div>

            <div class="col-3">
              <span class="ms-5">{{ orderUser }}</span>
            </div>

            <div class="col-4">
              <span class="ms-5 text-sum">{{ order.totalPrice }} TL</span>
            </div>

            <div class="col-2">
              <button @click="openModal()" class="btn btn-primary me-3">Sipariş Detayı</button>
            </div>
            <!-- <modal
              :visible="isVisible"
              @hide="isVisible = false"
              :bgOverlay="'transparent'"
              :bgPanel="'white'"
              :defaultWidth="'50%'"
              :closeScroll="true"
            >
              <template #header>
                <h4>Naber</h4>
              </template>
              <template #body>
                <div style="width = 13rem;"><h1>AAAAAAA</h1></div>
              </template>
            </modal> -->
            <modal-2 :modalActive="showModal" @close="openModal">
              <phone-item />
            </modal-2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Modal from "@/components/Shared/Modal.vue";
import Modal2 from "@/components/Shared/Modal2.vue";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import PhoneItem from "@/components/Shop/PhoneItem.vue";
export default {
  components: { Modal2, PhoneItem },
  data() {
    return {
      orderData: null,
      orderUser: null,
      showModal: false,
    };
  },
  methods: {
    async getData() {
      await this.$appAxios
        .get(`/Order/GetUserOrders?userId=${this.$store.getters._currentUserId}`)
        .then((response) => {
          console.log(response);
          this.orderData = response.data;
          this.getDate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDate() {
      this.orderData.forEach((el) => {
        el.orderDate = moment(el.orderDate).subtract(3, "hours").format("LLLL");
      });
      console.log(this.orderData);
    },
    openModal() {
      this.showModal = !this.showModal;
      //
    },
  },
  async created() {
    moment.locale("tr");
    await this.getData();
    this.orderUser = this.$store.getters._getUserName;
  },
  mounted() {},
};
</script>

<style scoped>
.scrollable {
  height: 445px;
  overflow: scroll;
}
.text-sum {
  margin-left: 25px;
}
h1 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.card {
  margin: auto;
  max-width: 1200px;
  width: 60%;
  height: 400px;
  border-radius: 1rem;
  border: transparent;
}

.card-img {
  height: 70px;
  width: 70px;
  margin-top: 7px;
  margin-bottom: 7px;
}

.summary {
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  width: 1000px;
  height: 500px;
}
.summary-box {
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  width: 997px;
  height: 50px;
  margin-bottom: 15px;
}
.btn-order-detail {
  margin-left: 100px;
}
.row-1 {
  background-color: #e6e6e6;
  border-radius: 6px;
  margin-left: 0.1px;
}
.row-2 {
  border: solid 1px #e6e6e6;
  border-radius: 6px;
  height: 70px;
  width: 970px;
  margin-left: 1px;
}
#list-example {
  overflow: scroll;
}
</style>

