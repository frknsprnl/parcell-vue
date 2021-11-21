<template>
  <div class="d-flex justify-content-lg-center">
    <device-card>
      <template #image>
        <img src="@\assets\apple-airpods-2.png" alt="logo" style="height: 12rem" />
      </template>
      <template #title>
        <button class="btn btn-outline-primary" @click="openModal('headphone')">Apple Airpod 2</button>
      </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 1000 TL </template>
    </device-card>
    <device-card>
      <template #image>
        <img src="@\assets\samsung-telefon.png" alt="logo" style="height: 12rem" />
      </template>
      <template #title
        ><button class="btn btn-outline-primary" @click="openModal('phone')">Samsung</button>
      </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 5000 TL </template>
    </device-card>
    <device-card>
      <template #image>
        <img src="@\assets\xioami-powerbank.png" alt="logo" style="height: 12rem" />
      </template>
      <template #title
        ><button class="btn btn-outline-primary" @click="openModal('powerbank')">Xiaomi Powerbank</button>
      </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 200 TL </template>
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
  <modal
    :visible="phone"
    @hide="phone = false"
    :bgOverlay="'transparent'"
    :bgPanel="'white'"
    :defaultWidth="'50%'"
    :closeScroll="true"
  >
    <template #header>
      <!--    add your custom header     -->
      <div class="d-grid">
        <button @click="closeModal('phone')" class="btn btn-outline-primary">X</button>
      </div>
    </template>
    <template #body>
      <phone-item />
    </template>
  </modal>
  <modal
    :visible="powerbank"
    @hide="powerbank = false"
    :bgOverlay="'transparent'"
    :bgPanel="'white'"
    :defaultWidth="'50%'"
    :closeScroll="true"
  >
    <template #header>
      <!--    add your custom header     -->
      <div class="d-grid">
        <button @click="closeModal('powerbank')" class="btn btn-outline-primary">X</button>
      </div>
    </template>
    <template #body>
      <powerbank-item />
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
  data() {
    return {
      modal: null,
      phone: false,
      powerbank: false,
      headphone: false,
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
  },

  components: { DeviceCard, PhoneItem, Modal, HeadphoneItem, PowerbankItem },
};
</script>

<style lang="scss" scoped>
@import "@/../public/style.scss";

.btn-outline-primary {
  @include button-outline-variant($colors-purple-tawk, white);
}
</style>
