<template>
  <header>
    <!--- Navbar --->
    <nav class="navbar navbar-expand-lg p-3">
      <a class="navbar-brand text-white me-5 font-google font-google-size" href="#">
        <span class="font-google font-google-size"> {{ brandName }}</span>
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
              <a class="nav-link" href="#">
                <i class="bi bi-house-door-fill"></i>
                {{ navItem1 }}
              </a>
            </li>
            <router-link class="text-decoration-none" :to="{ name: 'PlansPage' }">
              <li class="nav-item pl-1 me-2">
                <a class="nav-link" href="#">
                  <i class="bi bi-receipt-cutoff me-1"></i>
                  {{ navItem2 }}
                </a>
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'ContactPage' }">
              <li class="nav-item active pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"
                  ><i class="bi bi-info-circle-fill me-1"></i>{{ navItem3 }}</a
                >
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'PromotionsPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"
                  ><i class="bi bi-megaphone-fill me-1"></i>{{ navItem4 }}</a
                >
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'ShopPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"> <i class="bi bi-shop me-1"></i>{{ navItem5 }} </a>
              </li>
            </router-link>
          </ul>
          <ul class="navbar-nav ml-auto">
            <router-link class="text-decoration-none" :to="{ name: 'LoginPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"
                  ><i class="fa fa-sign-in fa-fw me-1"></i>{{ button1Text }}</a
                >
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'RegisterPage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"
                  ><i class="fa fa-user-plus fa-fw me-1"></i>{{ button2Text }}</a
                >
              </li>
            </router-link>
            <router-link class="text-decoration-none" :to="{ name: 'ProfilePage' }">
              <li class="nav-item pl-1 me-2 text-decoration-none">
                <a class="nav-link" href="#"><i class="fa fa-user-plus fa-fw me-1"></i>Profile </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <!--# Navbar #-->
  </header>
</template>

<script>
export default {
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
    };
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

.deneme-border {
  border: 2px solid #fff;
}
</style>
