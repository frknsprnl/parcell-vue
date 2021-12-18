<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <welcome-screen />
      <home-cards />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import WelcomeScreen from "../components/Home/WelcomeScreen.vue";
import HomeCards from "@/components/Home/HomeCards.vue";

export default {
  components: { Navbar, FooterBar, WelcomeScreen, HomeCards },
};
</script>

<style scoped>
.section::-webkit-scrollbar-track {
  background-color: red;
}
.section::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
