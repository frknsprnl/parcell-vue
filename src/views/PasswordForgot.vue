<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center h-100">
            <div class="col-12 col-lg-9 col-xl-6">
              <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Şifre Sıfırlama</h3>

                  <div class="row">
                    <div name="Verification" v-if="!isVisible" class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="mail">Email</label>
                          <input
                            type="email"
                            id="mail"
                            class="form-control form-control-md"
                            v-model="mail"
                            @blur="v$.mail.$touch()"
                            :class="{
                              'is-invalid': v$.mail.$error,
                            }"
                          />
                          <div v-if="v$.mail.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.mail.email.$invalid" class="invalid-feedback">
                            Lütfen uygun bir mail giriniz.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="phone">Telefon No</label>
                          <input
                            type="text"
                            id="phone"
                            class="form-control form-control-md"
                            v-model="phone"
                            @input="acceptNumber()"
                            @blur="v$.phone.$touch()"
                            :class="{
                              'is-invalid': v$.phone.$error,
                            }"
                          />
                          <div v-if="v$.phone.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div name="PasswordReset" v-if="isVisible" class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="password">Yeni Şifre</label>
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-md"
                            v-model="password"
                            @blur="v$.password.$touch()"
                            :class="{
                              'is-invalid': v$.password.$error,
                            }"
                          />
                          <div v-if="v$.password.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.password.minLength.$invalid" class="invalid-feedback">
                            Şifreniz minimum 8 karakter olmalı.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="password">Yeni Şifre (Tekrar)</label>
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-md"
                            v-model="passwordRepeat"
                            @blur="v$.passwordRepeat.$touch()"
                            :class="{
                              'is-invalid': v$.passwordRepeat.$error,
                            }"
                          />
                          <div v-if="v$.passwordRepeat.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.passwordRepeat.sameAs.$invalid" class="invalid-feedback">
                            Şifreler uyuşmuyor.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <button @click="btnAction()" class="btn btn-primary btn-md" type="button">
                        <span>{{ btnMessage }}</span>
                      </button>
                      <h6 v-if="responseMessage !== null" class="m-1 text-center text-danger">
                        {{ responseMessage }}
                      </h6>
                    </div>
                  </div>
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
import FooterBar from "@/components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
import CryptoJS from "crypto-js";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";

export default {
  components: {
    Navbar,
    FooterBar,
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      mail: null,
      phone: null,
      isVisible: false,
      password: null,
      passwordRepeat: null,
      btnMessage: "Onayla",
      responseMessage: null,
    };
  },
  validations() {
    return {
      mail: { required, email },
      phone: { required, minLength: minLength(12) },
      password: { required, minLength: minLength(8) },
      passwordRepeat: { required, sameAs: sameAs(this.password) },
    };
  },
  methods: {
    async btnAction() {
      if (this.isVisible === false) {
        await this.checkData();
      } else {
        await this.postData();
      }
    },
    async checkData() {
      this.$swal.fire({
        title: "Lütfen Bekleyin...",
        didOpen: () => {
          this.$swal.showLoading();
        },
      });
      this.v$.mail.$validate();
      this.v$.phone.$validate();
      if (this.v$.mail.$error || this.v$.phone.$error) {
        console.log(this.v$);
      } else {
        await this.$appAxios
          .get(`/User/PasswordForgetCheck?mail=${this.mail}&phone=${this.phone}`)
          .then((response) => {
            console.log(response);
            this.responseMessage = response.data;
            this.isVisible = true;
            this.$swal.close();
          })
          .catch((error) => {
            console.log(error);
            this.responseMessage = error.response.data;
            this.$swal.close();
          });
      }
    },
    async postData() {
      this.$swal.fire({
        title: "Lütfen Bekleyin...",
        didOpen: () => {
          this.$swal.showLoading();
        },
      });
      this.v$.$validate();
      if (this.v$.password.$error || this.v$.passwordRepeat.$error) {
        console.log(this.v$.$errors);
      } else {
        const password = CryptoJS.SHA256(this.password).toString();
        await this.$appAxios
          .put(`/User/PasswordForget?mail=${this.mail}&newPassword=${password}`)
          .then((response) => {
            console.log(response);
            this.$swal.close();
            this.$router.push({ name: "LoginPage" });
          })
          .catch((error) => {
            console.log(error);
            this.$swal.close();
          });
      }
    },
    acceptNumber() {
      var x = this.phone.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phone = !x[2] ? x[1] : +x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    },
  },
};
</script>
