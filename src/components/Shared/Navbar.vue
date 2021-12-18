<template>
  <header>
    <!--- Navbar --->
    <nav class="navbar navbar-expand-lg p-3">
      <a class="navbar-brand text-white me-5 font-google font-google-size" href="#">
        <span class="font-google font-google-size">PARCELL</span>
      </a>
      <div class="me-4"></div>
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nvbCollapse"
          aria-controls="nvbCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-xl-between" id="nvbCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item pl-1 me-2">
              <a class="nav-link" href="#"> <i class="bi bi-house-door-fill me-1"></i>Ana Sayfa </a>
            </li>
            <router-link class="text-decoration-none" :to="{ name: 'PlansPage' }">
              <li class="nav-item pl-1 me-2">
                <a class="nav-link" href="#"> <i class="bi bi-receipt-cutoff me-1"></i>Paketler </a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'ContactPage' }">
              <li class="nav-item pl-1 me-2">
                <a class="nav-link" href="#"><i class="bi bi-info-circle-fill me-1"></i>İletişim</a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'PromotionsPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="bi bi-megaphone-fill me-1"></i>Kampanyalar</a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'ShopPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"> <i class="bi bi-shop me-1"></i>Mağaza</a>
              </li>
            </router-link>
          </ul>
          <ul class="navbar-nav ml-auto">
            <router-link class="text-decoration-none" v-if="_isAuthenticated" :to="{ name: 'BasketPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="bi bi-basket-fill me-1"></i>Sepet</a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" v-if="_isAuthenticated" :to="{ name: 'ProfilePage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="fa fa-user fa-fw me-1"></i>Profil </a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" v-if="!_isAuthenticated" :to="{ name: 'LoginPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="fa fa-sign-in fa-fw me-1"></i>Giriş Yap</a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" v-if="!_isAuthenticated" :to="{ name: 'RegisterPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="fa fa-user-plus fa-fw me-1"></i>Kayıt Ol</a>
              </li>
            </router-link>
            <div v-if="_isAuthenticated">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link pointer-event" role="button" @click="onLogout()"
                  ><i class="fas fa-sign-out-alt fa-fw me-1"></i>Çıkış Yap</a
                >
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <!--# Navbar #-->
  </header>
</template>

<script>
import { mapGetters } from "vuex";
//import DropDownMenu from "./DropDownMenu.vue";
export default {
  //components: {},
  data() {
    return {
      navItem1: "Ana Sayfa",
      navItem2: "Paketler",
      navItem3: "İletişim",
      navItem4: "Kampanyalar",
      navItem5: "Mağaza",
      navItem6: "Deneme",
      button1Text: "Giriş Yap",
      button2Text: "Kayıt Ol",
      brandName: "PARCELL",
      drop: true,
    };
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    onLogout() {
      this.$store.commit("logoutUser");
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style scoped>
@import url("../../../public/style.css");

.nav-item {
  font-size: 1.1rem;
}

.font-google {
  /* font-family: "Itim", cursive; */
  font-family: "Nosifer", cursive;
}

.font-google-size {
  font-size: 2rem;
}
</style>
