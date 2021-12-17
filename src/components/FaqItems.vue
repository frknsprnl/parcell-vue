<template>
  <div class="d-flex justify-content-center">
    <h4>Sık Sorulan Sorular</h4>
  </div>
  <br />
  <vue-collapsible-panel :expanded="false" bg-color-body="#4c3a6e" v-for="faq in faq" :key="faq.id">
    <template #title>
      {{ faq.question }}
    </template>
    <template #content> {{ faq.answer }}</template>
  </vue-collapsible-panel>
</template>

<!--
<script>
import { defineComponent } from "@vue/composition-api";
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";

export default defineComponent({
	setup() {},
});
</script>
-->

<script>
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";
import axios from "axios";
export default {
  components: {
    VueCollapsiblePanel,
  },

  data() {
    return {
      // users: [],
      faq: {},
    };
  },
  created() {
    this.$appAxios
      .get("https://parcell-backend.azure-api.net/v1/api/Faq/GetFAQList")
      .then((response) => {
        console.log(response.data);
        this.faq = response.data;
        console.log(this.faq);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>
