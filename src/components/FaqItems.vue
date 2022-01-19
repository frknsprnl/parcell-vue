<template>
  <load-animation v-if="getLoadingStatus" />
  <div v-if="!getLoadingStatus">
    <h4 class="d-flex justify-content-center mt-3 mb-5">Sık Sorulan Sorular</h4>

    <br />

    <vue-collapsible-panel
      class="user-select-none"
      :expanded="false"
      bg-color-body="#4c3a6e"
      v-for="faq in faq"
      :key="faq.id"
    >
      <template #title>
        {{ faq.question }}
      </template>
      <template #content> {{ faq.answer }}</template>
    </vue-collapsible-panel>
  </div>
</template>

<script>
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";
import axios from "axios";
import LoadAnimation from "../components/Shared/LoadAnimation.vue";
export default {
  components: {
    VueCollapsiblePanel,
    LoadAnimation,
  },

  data() {
    return {
      faq: {},
      isLoading: true,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  methods: {
    async getData() {
      await this.$appAxios
        .get("/Faq/GetFaqs")
        .then((response) => {
          console.log(response.data);
          this.faq = response.data;
          console.log(this.faq);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
};
</script>
