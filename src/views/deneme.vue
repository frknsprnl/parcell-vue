<template>
  <div class="d-flex justify-content-center align-items-center">
    <loading class="border border-danger" :loading="isLoading" :color="'#aa34dd'" :size="'100px'" />
  </div>
</template>


<script>
import Loading from "@/components/Shared/Loading.vue";

import { ref } from "vue";
export default {
  components: { Loading },

  setup() {
    const isLoading = ref(true);
    return {
      isLoading,
    };
  },
};
</script>