<template>
  <div class="d-flex justify-content-between-sm gradient-border">
    <div class="row-2 mt-4 ms-4">
      <h2 class="col-8 ms-4 mb-5 text-white">
        {{ homeData.headerText }}
      </h2>
      <router-link class="text-decoration-none" :to="{ name: 'NumberTransfer' }">
        <a class="btn btn-danger btn-lg col-2 mt-5 ms-4"> Parcell'e Geç</a>
      </router-link>
    </div>
    <logo />
  </div>
</template>

<script>
import Logo from "../Shared/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      homeData: {},
      homeId: "61cb4b95a1a62dc4b20deb43",
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
    await this.getHomeData();
  },
};
</script>

<style>
.font-google {
  font-family: "Itim", cursive;
}

.gradient-border {
  background: linear-gradient(0deg, #7367f0, #4c3a6e);
}
</style>

