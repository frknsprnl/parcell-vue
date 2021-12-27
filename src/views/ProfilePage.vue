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
            <button @click="setActiveTab('OrderDetails')" class="btn btn-lg">Siparişlerim</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('FaturaDetay')" class="btn btn-lg">Faturalarım</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('UserPlan')" class="btn btn-lg">Paketlerim</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('Deposit')" class="btn btn-lg">TL Yükle</button>
          </div>
        </div>
      </div>
      <user-details v-if="'UserDetails' === profileActiveTab" />
      <deposit v-if="'Deposit' === profileActiveTab" />
      <password-reset v-if="'PasswordReset' === profileActiveTab" />
      <fatura-detay v-if="'FaturaDetay' === profileActiveTab" />
      <order-details v-if="'OrderDetails' === profileActiveTab" />
      <div class="container d-flex p-4" v-if="'UserPlan' === profileActiveTab">
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
import OrderDetails from "@/components/User/OrderDetails.vue";

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
    OrderDetails,
  },

  data() {
    return {};
  },

  methods: {
    setActiveTab(input) {
      this.$store.commit("setProfileActiveTab", input);
    },
  },
  computed: {
    profileActiveTab: function () {
      return this.$store.getters._getProfileActiveTab;
    },
  },
};
</script>

<style scoped>
.btn-lg {
  color: white;
  border: none;
  box-shadow: none;
}
.btn-lg:focus {
  border: 1px solid white;
}

#sidebar {
  background-color: #4c3a6e;
}
</style>
