<template>
  <div class="d-flex justify-content-center align-items-center">
    <loading :animation-duration="1000" :size="60" :color="'#4c3a6e'" />
  </div>
</template>

<script>
import Loading from "@/components/Shared/Loading.vue";

export default {
  components: { Loading },

  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>