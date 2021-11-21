<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <navbar />
    <div class="d-flex justify-content-lg-between mt-5">
      <div class="row">
        <div
          class="container rounded row justify-content-center"
          style="width: 300px; height: 600px"
          id="sidebar"
        >
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('UserDetails')" class="btn btn-lg">Kullanıcı Bilgileri</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('PasswordReset')" class="btn btn-lg">Şifre Değiştir</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('Deposit')" class="btn btn-lg">TL Yükle</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('UserPlan')" class="btn btn-lg">Paketlerim</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('FaturaDetay')" class="btn btn-lg">Faturalarım</button>
          </div>
        </div>
      </div>
      <user-details v-if="activeTab === 'UserDetails'" />
      <deposit v-else-if="activeTab === 'Deposit'" />
      <password-reset v-else-if="activeTab === 'PasswordReset'" />
      <fatura-detay v-else-if="activeTab === 'FaturaDetay'" />
      <div class="container d-flex p-4" v-else-if="activeTab === 'UserPlan'">
        <user-plan class="" />
        <remaining-usage-item class="" v-if="true" />
      </div>
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
import UserPlan from "@/components/User/UserPlan.vue";
import RemainingUsageItem from "@/components/User/RemainingUsageItem.vue";
import FaturaDetay from "@/components/User/FaturaDetay.vue";

export default {
  components: {
    Navbar,
    FooterBar,
    UserDetails,
    /*Sidebar*/
    Deposit,
    PasswordReset,
    UserPlan,
    RemainingUsageItem,
    FaturaDetay,
  },

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

<style scoped>
.btn-lg {
  background-color: #503c6c;
  color: white;
}

#sidebar {
  background-color: #503c6c;
}
</style>
