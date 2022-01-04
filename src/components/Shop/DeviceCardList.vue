<template>
  <div class="d-flex justify-content-lg-center m-4 mt-5">
    <load-animation v-if="getLoadingStatus" />
    <div v-if="!getLoadingStatus" class="row device-container col-10 mt-4">
      <div
        class="d-flex align-items-center justify-content-center col-4 mt-5"
        v-for="data in deviceData"
        :key="data.id"
      >
        <device-card class="d-flex justify-content-center">
          <template #image>
            <div class="">
              <!-- <div class="img-cont" :style="` background-image : url('${data.imageDirectory}')`"></div> -->
              <img class="img-cont" :src="require(`@/assets/${data.imageDirectory}`)" alt="" />
            </div>
          </template>
          <template #deviceId>
            {{ data.id }}
          </template>
          <template #title>
            <button class="btn btn-outline-primary" @click="openModal(data)">{{ data.name }}</button>
          </template>
          <template #body-text> {{ data.detailText }} </template>
          <template #price> {{ data.price }}₺ </template>
        </device-card>
      </div>
      <div class="mt-5"></div>
    </div>
  </div>

  <modal
    :visible="modalVisible"
    @hide="headphone = false"
    :bgOverlay="'transparent'"
    :bgPanel="'white'"
    :defaultWidth="'50%'"
    :closeScroll="true"
    @hideModal="closeModal()"
  >
    <template #header>
      <!-- <div class="d-grid">
        <button @click="closeModal()" type="button" class="btn btn-outline-primary">X</button>
      </div> -->
    </template>
    <template #body>
      <phone-item :deviceData="modalDevice" v-if="modalItemVisible === 'Phone'" />
      <headphone-item :deviceData="modalDevice" v-if="modalItemVisible === 'Headphone'" />
      <powerbank-item :deviceData="modalDevice" v-if="modalItemVisible === 'Powerbank'" />
    </template>
  </modal>
</template>

<script>
import DeviceCard from "./DeviceCard.vue";
import PhoneItem from "./PhoneItem.vue";
import Modal from "@/components/Shared/Modal.vue";
import HeadphoneItem from "./HeadphoneItem.vue";
import PowerbankItem from "./PowerbankItem.vue";
import LoadAnimation from "../Shared/LoadAnimation.vue";
export default {
  components: { DeviceCard, Modal, LoadAnimation, PhoneItem, HeadphoneItem, PowerbankItem },

  data() {
    return {
      modalVisible: false,
      modalItemVisible: false,
      deviceData: [],
      modalDevice: null,
      isLoading: true,
    };
  },

  methods: {
    async getData() {
      await this.$appAxios
        .get("/Device/GetDevices")
        .then((response) => {
          this.deviceData = response.data;
          //this.deviceData.length = 1;
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },
    openModal(data) {
      if (data.type === "Phone") this.phoneModal(data);
      else if (data.type === "Headphone") this.headphoneModal(data);
      else this.powerbankModal(data);
    },
    closeModal() {
      this.modalVisible = false;
      this.modalItemVisible = null;
    },
    phoneModal(data) {
      this.modalVisible = true;
      this.modalItemVisible = data.type;
      this.modalDevice = data;
      console.log(this.modalDevice);
    },
    headphoneModal(data) {
      this.modalVisible = true;
      this.modalItemVisible = data.type;
      this.modalDevice = data;
    },
    powerbankModal(data) {
      this.modalVisible = true;
      this.modalItemVisible = data.type;
      this.modalDevice = data;
    },
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

<style scoped>
.device-container {
  margin: auto;
  max-width: 1400px;
  width: 70%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
.img-cont {
  background-size: 12rem 12rem;
  width: 12rem;
  height: 12rem;
  resize: none;
  background-repeat: no-repeat;
}
</style>
