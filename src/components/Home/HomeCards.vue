<template>
  <load-animation v-if="getLoadingStatus" />
  <div v-if="!getLoadingStatus" class="container d-flex justify-content-center mt-5">
    <card-item>
      <template #image>
        <img
          class="me-2"
          :src="require('@/assets/' + homeData.card1.cardImage)"
          alt="plan"
          style="height: 13rem"
        />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'PlansPage' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Paketler </a>
        </router-link>
      </template>
      <template #text-center>{{ homeData.card1.cardText }} </template>
    </card-item>
    <card-item>
      <template #image>
        <img
          class=""
          :src="require('@/assets/' + homeData.card2.cardImage)"
          alt="plan"
          style="height: 13rem"
        />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'FaturaliOl' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Faturalı Ol </a>
        </router-link>
      </template>
      <template #text-center>{{ homeData.card2.cardText }} </template>
    </card-item>
    <card-item>
      <template #image>
        <img
          class="me-5"
          :src="require('@/assets/' + homeData.card3.cardImage)"
          alt="plan"
          style="height: 13rem"
        />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'ShopPage' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Mağaza </a>
        </router-link>
      </template>
      <template #text-center>{{ homeData.card3.cardText }} </template>
    </card-item>
  </div>
</template>

<script>
import CardItem from "../Shared/CardItem.vue";
import LoadAnimation from "../Shared/LoadAnimation.vue";
export default {
  components: { CardItem, LoadAnimation },
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

<style lang="scss" scoped>
@import "@/../public/style.scss";

.btn-outline-primary {
  @include button-outline-variant($colors-purple-tawk, white);
}
</style>
