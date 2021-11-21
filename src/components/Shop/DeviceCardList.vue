<template>
  <div class="d-flex justify-content-lg-center">
    <device-card>
      <template #image>
        <img src="@\assets\apple-airpods-2.png" alt="logo" />
      </template>
      <template #title>Apple Airpods 2 </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 1000 TL </template>
    </device-card>
    <device-card>
      <template #image>
        <img src="@\assets\samsung-telefon.png" alt="logo" width="" />
      </template>
      <template #title>Samsung </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 5000 TL </template>
    </device-card>
    <device-card>
      <template #image>
        <img src="@\assets\xioami-powerbank.png" alt="logo" width="" />
      </template>
      <template #title>Xiaomi Powerbank </template>
      <template #body-text> Lorem ipsum dolor sit amet. </template>
      <template #price> 500 TL </template>
    </device-card>
  </div>
</template>

<script>
import DeviceCard from "./DeviceCard.vue";
export default {
  components: { DeviceCard },
};
</script>
