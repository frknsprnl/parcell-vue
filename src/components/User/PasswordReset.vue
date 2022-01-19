<template>
  <div class="container d-flex justify-content-md-center align-items-center mb-5">
    <div class="mb-5">
      <div class="row justify-content-center mb-5">
        <div class="container col-lg-7 mt-3">
          <h3 class="text-center mb-5">Şifre Değiştirme</h3>
          <label for="oldPassword" class="form-label"> <span>Eski Şifre</span></label>
          <input
            v-model="userData.oldPassword"
            type="password"
            class="form-control form-control"
            id="oldPassword"
            @blur="v$.userData.oldPassword.$touch()"
          />
          <small
            class="text-danger"
            v-if="v$.userData.oldPassword.required.$invalid && v$.userData.newPassword.$error && submitted"
            >Bu alan boş olamaz <br
          /></small>
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="newPassword" class="form-label"> <span>Yeni Şifre</span></label>
          <input
            v-model="userData.newPassword"
            type="password"
            class="form-control form-control"
            id="newPassword"
            @blur="v$.userData.newPassword.$touch()"
          />
          <small
            class="text-danger"
            v-if="v$.userData.newPassword.required.$invalid && v$.userData.newPassword.$error && submitted"
            >Bu alan boş olamaz <br
          /></small>
          <small
            class="text-danger"
            v-if="v$.userData.newPassword.minLength.$invalid && v$.userData.newPassword.$error && submitted"
            >Şifreniz minimum 8 haneli olmalıdır <br
          /></small>
        </div>

        <div class="container col-lg-7 mt-3">
          <label for="newPasswordRepeat" class="form-label"> <span>Yeni Şifre(Tekrar)</span></label>
          <input
            type="password"
            v-model="userData.newPasswordRepeat"
            class="form-control form-control"
            id="newPasswordRepeat"
            @blur="v$.userData.newPasswordRepeat.$touch()"
          />
          <small
            class="text-danger"
            v-if="
              v$.userData.newPasswordRepeat.sameAs.$invalid &&
              v$.userData.newPasswordRepeat.$error &&
              submitted
            "
            >Şifreler uyuşmuyor <br
          /></small>
          <small
            class="text-danger"
            v-if="
              v$.userData.newPasswordRepeat.required.$invalid &&
              v$.userData.newPasswordRepeat.$error &&
              submitted
            "
            >Bu alan boş olamaz <br
          /></small>
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
      submitted: true,
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
        this.submitted = true;
        console.log(this.v$.$errors);
      } else {
        let oldPassword = CryptoJS.SHA256(this.userData.oldPassword).toString();
        let newPassword = CryptoJS.SHA256(this.userData.newPassword).toString();
        this.$appAxios
          .get(`/User/ChangeUserPassword?oldPassword=${oldPassword}&newPassword=${newPassword}`)
          .then((response) => {
            console.log(response);
            console.log(newPassword);
            this.$toast.success("Şifre Değiştirildi");
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 404) {
              this.$toast.error("Eski şifreniz yanlış");
            }
          });
        this.submitted = false;
      }
    },
  },

  computed: {
    passwordErrors: () => {},
  },
};
</script>