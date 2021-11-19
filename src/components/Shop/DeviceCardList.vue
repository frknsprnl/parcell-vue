<template>
  <div class="d-flex justify-content-lg-center">
    <device-card v-for="i in 5" :key="i" />
  </div>
</template>

<script>
import DeviceCard from "./DeviceCard.vue";
export default {
  components: { DeviceCard },
};
</script>
