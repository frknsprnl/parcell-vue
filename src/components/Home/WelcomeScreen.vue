<template>
  <div class="gradient-border">
    <load-animation v-if="getLoadingStatus" />
    <div v-if="!getLoadingStatus" class="row-2 mt-3 ms-4">
      <img :src="require('@/assets/' + homeData.logo)" alt="" height="240" class="parcell-logo" />
      <h2 class="col-4 ms-4 mb-5 text-white">
        {{ homeData.headerText }}
      </h2>
      <router-link class="text-decoration-none" :to="{ name: 'NumberTransfer' }">
        <a class="btn btn-danger btn-lg col-2 mt-5 ms-4 mb-5 border border-danger"> Parcell'e Geç</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoadAnimation from "../Shared/LoadAnimation.vue";

export default {
  components: {
    LoadAnimation,
  },
  data() {
    return {
      homeData: {},
      homeId: "61cb4b95a1a62dc4b20deb43",
      isLoading: true,
    };
  },
  methods: {
    async getHomeData() {
      await this.$appAxios
        .get("/HomePage/GetHomePage/" + this.homeId)
        .then((response) => {
          console.log(response.data);
          this.homeData = response.data;
          console.log(this.homeData);
        })
        .catch((error) => console.error(error));
    },
  },
  async created() {
    this.isLoading = true;
    await this.getHomeData();
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
.gradient-border {
  background: linear-gradient(0deg, #7367f0, #4c3a6e);
  padding-top: 15px;
  height: 300px;
}
.parcell-logo {
  margin-left: 1100px;
  position: absolute;
}
.btn-lg {
  width: 140px;
}
</style>

