<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <welcome-screen />
    </div>
    <footer-bar />
    mmm
  </div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import WelcomeScreen from "../components/Home/WelcomeScreen.vue";

export default {
  components: { Navbar, FooterBar, WelcomeScreen },
  data() {
    null;
  },
};
</script>
