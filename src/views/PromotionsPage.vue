<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <promotions />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from "../components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
import Promotions from "../components/Promotions.vue";
export default {
  components: { Navbar, FooterBar, Promotions },
};
</script>
