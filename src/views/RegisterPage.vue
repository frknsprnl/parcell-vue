<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <section class="vh-100 gradient-custom">
        <div class="container-md p-5">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Kayıt Ol</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="firstName"
                            ><i class="bi bi-person-fill"> Ad</i>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control"
                            v-model="userData.name"
                            @blur="v$.userData.name.$touch()"
                            :class="{
                              'is-invalid': v$.userData.name.$error,
                            }"
                          />
                          <div v-if="v$.userData.name.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.userData.name.turkishChar.$invalid" class="invalid-feedback">
                            Lütfen sadece harf girişi yapın.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="lastName"
                            ><i class="bi bi-person-fill"> Soyad</i></label
                          >
                          <input
                            type="text"
                            id="lastName"
                            class="form-control form-control"
                            v-model="userData.surname"
                            @blur="v$.userData.surname.$touch()"
                            :class="{
                              'is-invalid': v$.userData.surname.$error,
                            }"
                          />
                          <div v-if="v$.userData.surname.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.userData.surname.turkishChar.$invalid" class="invalid-feedback">
                            Lütfen sadece harf girişi yapın.
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress"
                            ><i class="bi bi-envelope-fill"> Email</i></label
                          >
                          <input
                            type="email"
                            id="emailAddress"
                            class="form-control form-control"
                            placeholder="parcell@gmail.com"
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
                          <label for="password" class="form-label"
                            ><i class="bi bi-shield-lock-fill"> Şifre</i></label
                          >
                          <input
                            type="password"
                            class="form-control form-control"
                            id="password"
                            v-model="userData.password"
                            @blur="v$.userData.password.$touch()"
                            :class="{
                              'is-invalid': v$.userData.password.$error,
                            }"
                          />
                          <div v-if="v$.userData.password.required.$invalid" class="invalid-feedback">
                            Bu alan boş olamaz.
                          </div>
                          <div v-if="v$.userData.password.minLength.$invalid" class="invalid-feedback">
                            Şifreniz minimum 8 karakter olmalı.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="">
                        <div class="col-md-6 mb-4 pb-2">
                          <h6 class="mb-2 pb-1">Cinsiyet</h6>
                          <div class="form-check form-check-inline">
                            <label class="form-check-label" for="maleGender"
                              ><i class="bi bi-gender-male"> Erkek</i></label
                            >
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="Erkek"
                              v-model="userData.gender"
                              @blur="v$.userData.gender.$touch()"
                              :class="{
                                'is-invalid': v$.userData.gender.$error,
                              }"
                            />
                          </div>
                          <div class="form-check form-check-inline">
                            <label class="form-check-label" for="femaleGender"
                              ><i class="bi bi-gender-female"> Kadın</i></label
                            >
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="Kadın"
                              v-model="userData.gender"
                              @blur="v$.userData.gender.$touch()"
                              :class="{
                                'is-invalid': v$.userData.gender.$error,
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <div class="row">
                          <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="birthPlace"
                                ><i class="bi bi-globe"> Doğum Yeri</i></label
                              >
                              <input
                                type="birthplace"
                                id="birthPlace"
                                class="form-control form-control"
                                placeholder="Örn. Isparta"
                                v-model="userData.birthPlace"
                                @blur="v$.userData.birthPlace.$touch()"
                                :class="{
                                  'is-invalid': v$.userData.birthPlace.$error,
                                }"
                              />
                              <div v-if="v$.userData.birthPlace.required.$invalid" class="invalid-feedback">
                                Bu alan boş olamaz.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4 pb-2">
                            <div class="form-outline">
                              <label class="form-label" for="birthDate"
                                ><i class="bi bi-calendar-fill"> Doğum Tarihi</i></label
                              >
                              <input
                                type="date"
                                id="birthDate"
                                class="form-control form-control"
                                v-model="userData.birthDate"
                                @blur="v$.userData.birthDate.$touch()"
                                :class="{
                                  'is-invalid': v$.userData.birthDate.$error,
                                }"
                              />
                              <div v-if="v$.userData.birthDate.required.$invalid" class="invalid-feedback">
                                Bu alan boş olamaz.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <button class="btn btn-primary btn" type="button" @click="createUser()">
                            Kayıt Ol
                          </button>
                          <!-- <button class="btn btn-primary btn" type="button" @click="printUser()">
                            Print
                          </button> -->
                        </div>
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
    <!-- <footer-bar /> -->
  </div>
</template>

<script>
import FooterBar from "@/components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
import CryptoJS from "crypto-js";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, alpha, helpers } from "@vuelidate/validators";
import { useToast } from "vue-toastification";

const turkishChar = (value) => !helpers.req(value) || /^[a-zA-ZıİçÇşŞğĞÜüÖö]*$/g.test(value);

export default {
  components: {
    Navbar,
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      userData: {
        name: null,
        surname: null,
        mail: null,
        password: null,
        phone: "yeni",
        gender: "Erkek",
        birthPlace: null,
        birthDate: null,
        address: "",
        balance: 0,
      },
    };
  },
  validations() {
    return {
      userData: {
        name: { required, turkishChar },
        surname: { required, turkishChar },
        mail: { required, email },
        password: { required, minLength: minLength(8) },
        gender: { required },
        birthPlace: { required },
        birthDate: { required },
      },
    };
  },
  methods: {
    async createUser() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        const password = CryptoJS.SHA256(this.userData.password).toString();
        this.$appAxios.post("/User/CreateUser", { ...this.userData, password }).then((response) => {
          console.log(response);
          if (response.status === 201) {
            this.$router.push({ name: "LoginPage" });
            this.$toast.success("Kayıt Başarılı");
          }
        });
      }
    },
    async checkUser() {
      await this.$appAxios
        .get(`/User/GetUserWithMail=${this.userData.mail}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    printUser() {
      const password = CryptoJS.SHA256(this.userData.password).toString();
      console.log({ ...this.userData, password });

      console.log(password);
    },
  },
  mounted() {},
};
</script>
