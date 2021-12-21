<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div class="">
      <nav-bar />
      <filter-options />
      <device-card-list />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from "../components/Shared/FooterBar.vue";
import NavBar from "../components/Shared/Navbar.vue";
import FilterOptions from "../components/Shop/FilterOptions.vue";
import DeviceCardList from "../components/Shop/DeviceCardList.vue";

export default {
  components: { NavBar, FooterBar, FilterOptions, DeviceCardList },
};
</script>

<style></style>
