<template>
  <div class="container d-flex justify-content-md-center align-items-center mb-5">
    <div class="mb-5">
      <div class="row justify-content-center mb-5">
        <div class="container col-lg-7 mt-3">
          <h3 class="text-center mb-5">Şifre Değiştirme</h3>
          <label for="oldPassword" class="form-label"> <span>Eski Şifre</span></label>
          <input
            v-model="userData.oldPassword"
            type="text"
            class="form-control form-control"
            id="oldPassword"
          />
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="newPassword" class="form-label"> <span>Yeni Şifre</span></label>
          <input
            v-model="userData.newPassword"
            type="text"
            class="form-control form-control"
            id="newPassword"
          />
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="newPasswordRepeat" class="form-label"> <span>Yeni Şifre(Tekrar)</span></label>
          <input
            type="text"
            v-model="userData.newPasswordRepeat"
            class="form-control form-control"
            id="newPasswordRepeat"
          />
          <button @click="onPasswordChange()" class="btn btn-primary btn-md mt-4">Değiştir</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CryptoJS from "crypto-js";
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      userData: {
        oldPassword: null,
        newPassword: null,
        newPasswordRepeat: null,
      },
    };
  },

  validations() {
    return {
      userData: {
        oldPassword: { required },
        newPassword: { required, minLength: minLength(8) },
        newPasswordRepeat: { required, sameAs: sameAs(this.userData.newPassword) },
      },
    };
  },

  methods: {
    onPasswordChange() {
      this.v$.$validate();
      if (this.v$.$error) {
        alert("hata aq çocu");
        console.log(this.v$.$errors);
      } else {
        let newPassword = CryptoJS.SHA256(this.userData.newPassword).toString();
        this.$appAxios
          .get(`/User/ChangeUSerPassword?oldPassword=${this.userData.oldPassword}&newPassword=${newPassword}`)
          .then((response) => {
            console.log(response);
            console.log(newPassword);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>