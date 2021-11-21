<template>
  <div class="container d-flex justify-content-center">
    <card-item>
      <template #image>
        <img class="me-2" src="../../assets/sim-card.png" alt="plan" style="height: 13rem" />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'PlansPage' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Paketler </a>
        </router-link>
      </template>
      <template #text-center>Parcell Tüm Müşterilerine İhtiyaçlarına Uygun Paketler Sunar </template>
    </card-item>
    <card-item>
      <template #image>
        <img class="" src="../../assets/parcelLogo3D.png" alt="plan" style="height: 13rem" />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'FaturaliOl' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Faturalı Ol </a>
        </router-link>
      </template>
      <template #text-center
        >Parcell'in Avantajlarından Sonuna Kadar Yararlanmak İçin Şimdi Faturalı Olun.
      </template>
    </card-item>
    <card-item>
      <template #image>
        <img class="me-5" src="../../assets/purple-cart.png" alt="plan" style="height: 13rem" />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'ShopPage' }">
          <a class="btn btn-outline-primary btn-lg" href=""> Mağaza </a>
        </router-link>
      </template>
      <template #text-center
        >Parcell'in Sunduğu Son Teknoloji Cihazları İncelemek İçin Mağazamızı Ziyaret Etmeyi Unutmayın.
      </template>
    </card-item>
  </div>
</template>

<script>
import CardItem from "../Shared/CardItem.vue";
export default {
  components: { CardItem },
};
</script>

<style lang="scss" scoped>
@import "@/../public/style.scss";

.btn-outline-primary {
  @include button-outline-variant($colors-purple-tawk, white);
}
</style>
