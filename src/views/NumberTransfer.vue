<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
    </div>
    <section class="vh-100 gradient-custom">
      <div class="container-md p-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Numara Taşıma</h3>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="firstName"
                          ><i class="bi bi-person-fill me-1"></i>Ad</label
                        >
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
                          ><i class="bi bi-person-fill me-1"></i>Soyad</label
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
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="emailAddress"
                          ><i class="bi bi-envelope-fill me-1"></i>Email</label
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

                  <div class="row align-items-center">
                    <div class="col-md-6 mb-4 pb-2">
                      <label for="exampleInputNumber" class="form-label"
                        ><i class="bi bi-telephone-fill me-1"></i>Telefon Numarası</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputNumber"
                        v-model="userData.phone"
                        @input="acceptNumber()"
                        @blur="v$.userData.phone.$touch()"
                        :class="{
                          'is-invalid': v$.userData.phone.$error,
                        }"
                      />
                      <div v-if="v$.userData.phone.required.$invalid" class="invalid-feedback">
                        Bu alan boş olamaz.
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <h6 class="mb-2 pb-1"><i class="bi bi-gender-ambiguous"></i> Cinsiyet</h6>
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
                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <label class="form-label" for="birthPlace"
                          ><i class="bi bi-globe me-1"></i>Doğum Yeri</label
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
                        <div v-if="v$.userData.birthDate.required.$invalid" class="invalid-feedback">
                          Bu alan boş olamaz.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <label class="form-label" for="birthDate"
                          ><i class="bi bi-calendar-fill me-1"></i> Doğum Tarihi</label
                        >
                        <input
                          type="date"
                          id="birthDate"
                          class="form-control form-control"
                          placeholder="Gün/Ay/Yıl"
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
                    <div class="form-check ms-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="userAggrement"
                        id="trasferDoc1"
                        @blur="v$.userAggrement.$touch()"
                        :class="{
                          'is-invalid': v$.userAggrement.$error,
                        }"
                      />
                      <label class="form-check-label" for="transferDoc1 ">
                        <span class="link-primary text-decoration-underline">Numara Taşıma</span> sözleşmesini
                        kabul etmek için işaretleyin.
                      </label>
                    </div>
                    <div class="mt-4 pt-2">
                      <button class="btn btn-primary btn-md" type="button" @click="postUser()">Onayla</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "@/components/Shared/Navbar.vue";
import FooterBar from "@/components/Shared/FooterBar.vue";
import CryptoJS from "crypto-js";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, helpers } from "@vuelidate/validators";

const turkishChar = (value) => !helpers.req(value) || /^[a-zA-ZıİçÇşŞğĞÜüÖö]*$/g.test(value);
const acceptLicense = (value) => (!helpers.req(value) || !value ? false : true);

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
        name: null,
        surname: null,
        mail: null,
        password: null,
        phone: null,
        gender: "Erkek",
        birthPlace: null,
        birthDate: null,
        address: "",
        balance: 0,
      },
      userAggrement: null,
    };
  },
  validations() {
    return {
      userData: {
        name: { required, turkishChar },
        surname: { required, turkishChar },
        mail: { required, email },
        password: { required, minLength: minLength(8) },
        phone: { required, minLength: minLength(12) },
        gender: { required },
        birthPlace: { required },
        birthDate: { required },
      },
      userAggrement: { required, acceptLicense },
    };
  },
  methods: {
    acceptNumber() {
      var x = this.userData.phone.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.userData.phone = !x[2] ? x[1] : +x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    },

    async postUser() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$);
      } else {
        const password = CryptoJS.SHA256(this.userData.password).toString();
        this.$swal.fire({
          title: "Lütfen Bekleyin...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            this.$swal.showLoading();
          },
        });
        await this.$appAxios
          .post(`/User/CreateUser`, { ...this.userData, password })
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              this.$swal.close();
              this.$swal
                .fire({
                  title: "Hesabınız Oluşturuldu.",
                  icon: "success",
                  showCloseButton: true,
                  confirmButtonText: "Tamam",
                })
                .then((response) => {
                  if (response.isConfirmed()) {
                    this.$swal.close();
                  }
                });
            }
          })
          .catch((error) => {
            console.log(error);
            this.$swal.close();
            this.$swal.fire({
              icon: "error",
              text: error.response.data,
            });
          });
      }
    },
  },
};
</script>
