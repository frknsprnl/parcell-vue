<template>
  <div class="d-flex justify-content-lg-center">
    <div class="row justify-content-center">
      <div
        class="d-flex align-items-center justify-content-center col-3"
        v-for="data in deviceData"
        :key="data.id"
      >
        <device-card class="m-3">
          <template #image>
            <div class="">
              <!-- <div class="img-cont" :style="` background-image : url('${data.imageDirectory}')`"></div> -->
              <img class="img-cont" :src="require(`@/assets/${data.imageDirectory}`)" alt="" />
            </div>
          </template>
          <template #title>
            <button class="btn btn-outline-primary" @click="openModal('headphone')">{{ data.name }}</button>
          </template>
          <template #body-text> {{ data.detailText }} </template>
          <template #price> {{ data.price }} </template>
        </device-card>
      </div>
    </div>
  </div>

  <modal
    :visible="headphone"
    @hide="headphone = false"
    :bgOverlay="'transparent'"
    :bgPanel="'white'"
    :defaultWidth="'50%'"
    :closeScroll="true"
  >
    <template #header>
      <div class="d-grid">
        <button @click="closeModal('headphone')" type="button" class="btn btn-outline-primary">X</button>
      </div>
    </template>
    <template #body>
      <headphone-item />
    </template>
  </modal>
</template>

<script>
import DeviceCard from "./DeviceCard.vue";
import PhoneItem from "./PhoneItem.vue";
import Modal from "@/components/Shared/Modal.vue";
import HeadphoneItem from "./HeadphoneItem.vue";
import PowerbankItem from "./PowerbankItem.vue";
export default {
  components: { DeviceCard, Modal },

  data() {
    return {
      modal: null,
      phone: false,
      powerbank: false,
      headphone: false,
      deviceData: [],
      imageUrl: null,
    };
  },

  methods: {},

  mounted() {
    this.$appAxios
      .get("/Device/GetDevices")
      .then((response) => {
        this.deviceData = response.data;
        //this.deviceData.length = 1;
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
.img-cont {
  background-size: 12rem 12rem;
  width: 12rem;
  height: 12rem;
  resize: none;
  background-repeat: no-repeat;
}
</style>
