<template>
  <div class="container d-flex justify-content-md-center align-items-center mb-5">
    <div class="mb-5">
      <div class="row justify-content-center mb-5">
        <div class="container col-lg-7 mt-3">
          <h3 class="text-center mb-5">Şifre Değiştirme</h3>
          <label for="password" class="form-label"> <span>Eski Şifre</span></label>
          <input v-model="userData.oldPassword" type="text" class="form-control form-control" id="password" />
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="password" class="form-label"> <span>Yeni Şifre</span></label>
          <Field
            v-model="userData.newPassword"
            type="text"
            class="form-control form-control"
            name="newPassword"
            rules="required"
            id="password"
          />
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="password" class="form-label"> <span>Yeni Şifre(Tekrar)</span></label>
          <Field
            type="text"
            v-model="userData.newPasswordRepeat"
            class="form-control form-control"
            name="newPasswordRepeat"
            id="password"
            rules="confirmed:@newPassword"
          />
          <button @click="onPasswordChange()" class="btn btn-primary btn-md mt-4">Değiştir</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CryptoJS from "crypto-js";
import { defineRule, Field } from "vee-validate";
import * as yup from "yup";

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return "Passwords must match";
});

export default {
  components: {
    Field,
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

  methods: {
    onPasswordChange() {
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
    },
  },
};
</script>