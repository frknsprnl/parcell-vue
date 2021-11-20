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
            <button @click="setActiveTab('PasswordReset')" class="btn btn-lg">Şifre Değiştir</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('Deposit')" class="btn btn-lg">TL Yükle</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('UserPlan')" class="btn btn-lg bg-secondary">Paketlerim</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="setActiveTab('FaturaDetay')" class="btn btn-lg bg-secondary">Faturalarım</button>
          </div>
        </div>
      </div>
      <user-details v-if="activeTab === 'UserDetails'" />
      <deposit v-else-if="activeTab === 'Deposit'" />
      <password-reset v-else-if="activeTab === 'PasswordReset'" />
      <fatura-detay v-else-if="activeTab === 'FaturaDetay'" />
      <div class="container d-flex justify-content-center" v-else-if="activeTab === 'UserPlan'">
        <user-plan class="" />
        <remaining-usage-item class="" />

        <!-- <div class="d-flex justify-content-center align-items-center">
          <div class="card">
            <div class="card-title">
              <h3 class="text-center">Dakika</h3>
              <hr />
            </div>
            <div class="circle-wrap me-2">
              <div class="circle">
                <div class="mask full">
                  <div class="fill"></div>
                </div>
                <div class="mask half">
                  <div class="fill"></div>
                </div>
                <div class="inside-circle">70%</div>
              </div>
            </div>
          </div>
        </div> -->
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
.circle-wrap {
  margin: 50px auto;
  width: 150px;
  height: 150px;
  background: #e6e2e7;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #9e00b1;
}

.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(126deg);
  }
}

.circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
</style>
