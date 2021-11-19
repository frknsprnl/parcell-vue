<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <plan-card />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "@/components/Shared/Navbar.vue";
import FooterBar from "@/components/Shared/FooterBar.vue";
import PlanCard from "@/components/PlanCard.vue";
export default {
  components: { Navbar, FooterBar, PlanCard },
};
</script>
