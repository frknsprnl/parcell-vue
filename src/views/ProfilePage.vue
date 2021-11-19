<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <navbar />
    <div class="d-flex align-items-center justify-content-lg-between mt-5">
      <div class="row">
        <sidebar />
      </div>
      <user-details v-if="activeTab === 'UserDetails'" />
      <deposit v-else-if="activeTab === 'Deposit'" />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import UserDetails from "../components/User/UserDetails.vue";
import Sidebar from "../components/User/Sidebar.vue";
import Deposit from "@/components/User/Deposit.vue";

export default {
  components: { Navbar, FooterBar, UserDetails, Sidebar, Deposit },

  data() {
    return {
      activeTab: this.getProfileActiveTab,
    };
  },

  methods: {
    setActiveTab(input) {
      this.activeTab = input;
    },
  },
  computed: {
    getProfileActiveTab() {
      return this.$store.profileActiveTab;
    },
  },
};
</script>
