<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Giriş Yapınız</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="mail"
                            ><i class="bi bi-envelope-fill"> Email</i></label
                          >
                          <input
                            v-model="userData.mail"
                            type="mail"
                            id="mail"
                            class="form-control form-control-md"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="password"
                            ><i class="bi bi-shield-lock-fill"> Şifre</i></label
                          >
                          <input
                            v-model="userData.password"
                            type="password"
                            id="password"
                            class="form-control form-control-md"
                          />
                        </div>
                      </div>
                      <h6 v-if="loginError" class="text-danger text-center">Mail veya Şifreniz Hatalı !!!</h6>
                      <div class="mt-4 pt-6">
                        <router-link class="text-decoration-none" :to="{ name: 'PasswordForgot' }">
                          <a href="#" style="text-decoration: none">Şifreni mi unuttun?</a>
                        </router-link>
                      </div>

                      <div class="mt-4 pt-2">
                        <button @click="onLogin()" class="btn btn-primary btn-md" type="button">
                          Giriş Yap
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import CryptoJS from "crypto-js";
export default {
  components: { Navbar, FooterBar },

  data() {
    return {
      userData: {
        mail: null,
        password: null,
      },
      loginError: false,
      DbUser: {},
    };
  },

  methods: {
    onLogin() {
      const password = CryptoJS.SHA256(this.userData.password).toString();

      if (this.userData.mail !== null && this.userData.password !== null) {
        this.$appAxios
          .get(`/User/GetUserWithMail?mail=${this.userData.mail}&password=${password}`)
          .then((response) => {
            this.$store.commit("setUser", response?.data);
            console.log(response.data.id);
            localStorage.setItem("userId", response.data.id);
            this.loginError = false;
          })
          .catch((error) => {
            if (error.response.status === 404) {
              this.loginError = true;
            }
          });
      } else {
        console.log("mail şifre null");
      }
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #7c27c5;
}
</style>
