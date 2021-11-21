<template>
  <div class="container d-flex justify-content-center">
    <card-item>
      <template #image>
        <img src="../../assets/logo.png" alt="plan" width="" />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'PlansPage' }">
          <a class="text-decoration-none" href=""> Paketler </a>
        </router-link>
      </template>
      <template #text-center>Parcell Tüm Müşterilerine İhtiyaçlarına Uygun Paketler Sunar </template>
    </card-item>
    <card-item>
      <template #image>
        <img
          class="img-fluid border border-success border-3"
          src="../../assets/parcelLogo3D.png"
          alt="plan"
        />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'ShopPage' }">
          <a class="text-decoration-none" href=""> Mağaza </a>
        </router-link>
      </template>
      <template #text-center>Parcell Tüm Müşterilerine İhtiyaçlarına Uygun Paketler Sunar </template>
    </card-item>
    <card-item>
      <template #image>
        <img src="../../assets/logo.png" alt="plan" width="" />
      </template>
      <template #title>
        <router-link class="text-decoration-none" :to="{ name: 'PromotionsPage' }">
          <a class="text-decoration-none" href=""> Promosyonlar </a>
        </router-link>
      </template>
      <template #text-center>Parcell Tüm Müşterilerine İhtiyaçlarına Uygun Paketler Sunar </template>
    </card-item>
  </div>
</template>

<script>
import CardItem from "../Shared/CardItem.vue";
export default {
  components: { CardItem },
};
</script>
