<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <navbar />
    <div class="d-flex justify-content-lg-between mt-5">
      <div class="row">
        <div
          class="container rounded bg-secondary row justify-content-center"
          style="width: 300px; height: 600px"
        >
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('UserDetails')" class="btn btn-lg bg-secondary">
              Kullanıcı Bilgileri
            </button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('PasswordReset')" class="btn btn-lg">
              Şifre Değiştir
            </button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('Deposit')" class="btn btn-lg">Tl Yükle</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-lg bg-secondary">Paketlerim</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-lg bg-secondary">Faturalarım</button>
          </div>
        </div>
      </div>
      <user-details v-if="activeTab === 'UserDetails'" />
      <deposit v-else-if="activeTab === 'Deposit'" />
      <password-reset v-else-if="activeTab === 'PasswordReset'" />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import UserDetails from "../components/User/UserDetails.vue";
//import Sidebar from "../components/User/Sidebar.vue";
import Deposit from "@/components/User/Deposit.vue";
import PasswordReset from "@/components/User/PasswordReset.vue";

export default {
  components: { Navbar, FooterBar, UserDetails, /*Sidebar*/ Deposit, PasswordReset },

  data() {
    return {
      activeTab: null,
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
