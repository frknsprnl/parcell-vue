<template>
  <div class="d-flex justify-content-lg-center">
    <device-card v-for="data in deviceData" :key="data.id">
      <template #image>
        <div class=""  >
          <div class="img-cont" :style="` background-image : url('${ data.imageDirectory }')`"></div>
        </div>
      </template>
      <template #title>
        <button class="btn btn-outline-primary" @click="openModal('headphone')">{{ data.name}}</button>
      </template>
      <template #body-text> {{ data.detailText}} </template>
      <template #price> {{ data.price}} </template>
    </device-card>
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
  
  components: { DeviceCard, Modal,  },
  
  data() {  
    return {
      modal: null,
      phone: false,
      powerbank: false,
      headphone: false,
      deviceData : [],
      imageUrl : null
    };
  },

  methods: {
    openModal(input) {
      if (input === "phone") {
        this.phone = true;
        this.headphone = false;
        this.powerbank = false;
      } else if (input === "headphone") {
        this.phone = false;
        this.headphone = true;
        this.powerbank = false;
      } else if (input === "powerbank") {
        this.phone = false;
        this.headphone = false;
        this.powerbank = true;
      }
    },
    closeModal(input) {
      if (input === "headphone") {
        this.headphone = false;
      } else if (input === "phone") {
        this.phone = false;
      } else if (input === "powerbank") {
        this.powerbank = false;
      }
    },
    getImageUrl(data) {
      return "src//public//" + data.imageDirectory;
    }
  },

  mounted() {
    this.$appAxios.get("/Device/GetDevices")
    .then(
      response => { 
        this.deviceData = response.data;
        console.log(response.data);
        } 
    )
    .catch(error => console.error(error))
  }

  
};
</script>

<style lang="scss" scoped>
@import "@/../public/style.scss";

.btn-outline-primary {
  @include button-outline-variant($colors-purple-tawk, white);
}
</style>

<style scoped>
.img-cont {
  background-size: 12rem 12rem;
  width : 12rem;
  height : 12rem;
  resize: none;
  background-repeat: no-repeat;
}
</style>
