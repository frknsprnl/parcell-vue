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
                            v-model="userData.name"
                            class="form-control form-control"
                          />
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
                            v-model="userData.surname"
                            class="form-control form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress"
                            ><i class="bi bi-envelope-fill"> Email</i></label
                          >
                          <input
                            type="email"
                            id="emailAddress"
                            v-model="userData.mail"
                            class="form-control form-control"
                            placeholder="parcell@gmail.com"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <label for="password" class="form-label"
                            ><i class="bi bi-shield-lock-fill"> Şifre</i></label
                          >
                          <input
                            type="text"
                            v-model="userData.password"
                            class="form-control form-control"
                            id="password"
                          />
                        </div>
                      </div>
                      <div class="row">
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
                              v-model="userData.gender"
                              value="Erkek"
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
                              v-model="userData.gender"
                              value="Kadın"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
                          <div class="form-outline">
                            <label class="form-label" for="birthPlace"
                              ><i class="bi bi-globe"> Doğum Yeri</i></label
                            >
                            <input
                              type="birthplace"
                              id="birthPlace"
                              v-model="userData.birthPlace"
                              class="form-control form-control"
                              placeholder="Örn. Isparta"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                          <div class="form-outline">
                            <label class="form-label" for="birthDate"
                              ><i class="bi bi-calendar-fill"> Doğum Tarihi</i></label
                            >
                            <!-- <Datepicker class="form-control form-control bg-white" v-model="userData.userBirthDate"/> -->
                            <input
                              type="date"
                              id="birthDate"
                              v-model="userData.birthDate"
                              class="form-control form-control"
                            />
                          </div>
                        </div>

                        <div class="mt-4 pt-2">
                          <button class="btn btn-primary btn" type="button" @click="createUser()">
                            Kayıt Ol
                          </button>
                          <button class="btn btn-primary btn" type="button" @click="printUser()">
                            Print
                          </button>
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
import Datepicker from "vue3-datepicker";
import { convertGMT, convertTime } from "@/utils/helperMethods";
import CryptoJS from "crypto-js";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      userData: {
        name: null,
        surname: null,
        mail: null,
        password: null,
        phone: "yeni",
        gender: null,
        birthPlace: null,
        birthDate: null,
      },
    };
  },
  methods: {
    createUser() {
      const password = CryptoJS.SHA256(this.userData.password).toString();

      this.$appAxios
        .post("/User/CreateUser", { ...this.userData, password })
        .then((response) => console.log(response));
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
