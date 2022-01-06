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
                            type="mail"
                            id="mail"
                            class="form-control form-control-md"
                            v-model="userData.mail"
                            @blur="v$.userData.mail.$touch()"
                            :class="{
                              'is-invalid': v$.userData.mail.$error,
                            }"
                          />
                          <div v-if="v$.userData.mail.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.userData.mail.email.$invalid" class="invalid-feedback">
                            Lütfen uygun bir mail giriniz.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="password"
                            ><i class="bi bi-shield-lock-fill"> Şifre</i></label
                          >
                          <input
                            type="password"
                            id="password"
                            @keydown.enter="onLogin()"
                            class="form-control form-control-md"
                            v-model="userData.password"
                            @blur="v$.userData.password.$touch()"
                            :class="{
                              'is-invalid': v$.userData.password.$error,
                            }"
                          />
                          <div v-if="v$.userData.password.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
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
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: { Navbar, FooterBar },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      userData: {
        mail: null,
        password: null,
      },
      loginError: false,
    };
  },

  validations() {
    return {
      userData: {
        mail: { required, email },
        password: { required },
      },
    };
  },

  methods: {
    async onLogin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$swal.fire({
          title: "Lütfen Bekleyin...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            this.$swal.showLoading();
          },
        });
        const password = CryptoJS.SHA256(this.userData.password).toString();
        await this.$appAxios
          .get(`/User/LoginWithMail?mail=${this.userData.mail}&password=${password}`)
          .then((response) => {
            this.$swal.close();
            this.$store.commit("setUser", response?.data);
            this.getInvoice();
            console.log(response.data.id);
            this.$router.push({ name: "ProfilePage" });
            this.loginError = false;
          })
          .catch((error) => {
            if (error.response.status === 404) {
              this.loginError = true;
            }
          });
      }
    },
    async getInvoice() {
      const userId = this.$store.getters._currentUserId;
      await this.$appAxios
        .get(`Invoice/GetInvoice?userId=${userId}`)
        .then((response) => {
          console.log(response);
          this.$store.commit("setInvoice", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #7c27c5;
}
</style>
