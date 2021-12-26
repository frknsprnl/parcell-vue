<template>
  <navbar />
  <div class="container py-5">
    <div class="card-list">
      <VuePaycard
        :value-fields="valueFields"
        :inputFields="inputFields"
        :labels="labels"
        :is-card-number-masked="false"
      >
      </VuePaycard>
      <div class="card-form__inner">
        <div class="card-input">
          <label for="cardName" class="card-input__label">Kart Sahibi</label>
          <input
            type="text"
            id="v-card-name"
            title="Name"
            data-card-field=""
            autocomplete="off"
            class="card-input__input"
            v-model="valueFields.cardName"
            @blur="v$.valueFields.cardName.$touch()"
            :class="{
              'is-invalid': v$.valueFields.cardName.$error,
            }"
          />
        </div>

        <div class="card-input">
          <label for="cardNumber" class="card-input__label">Kart Numarası</label>
          <input
            type="tel"
            id="v-card-number"
            title="Number"
            data-card-field=""
            v-model="valueFields.cardNumber"
            autocomplete="off"
            maxlength="19"
            class="card-input__input"
            v-cardformat:formatCardNumber
            @blur="v$.valueFields.cardNumber.$touch()"
            :class="{
              'is-invalid': v$.valueFields.cardNumber.$error,
            }"
          />
        </div>
        <div class="card-form__row">
          <div class="card-form__col">
            <div class="card-form__group">
              <label for="cardMonth" aria-label="Expiration Date" class="card-input__label"
                >Son Kullanım Tarihi</label
              >
              <select
                id="v-card-month"
                aria-label="Card Month"
                title="Month"
                data-card-field=""
                class="card-input__input -select me-3"
                v-model="valueFields.cardMonth"
                @blur="v$.valueFields.cardMonth.$touch()"
                :class="{
                  'is-invalid': v$.valueFields.cardMonth.$error,
                }"
              >
                <option value="" disabled="disabled" selected="selected">Ay</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                id="v-card-year"
                aria-label="Card year"
                title="Year"
                data-card-field=""
                class="card-input__input -select"
                v-model="valueFields.cardYear"
                @blur="v$.valueFields.cardYear.$touch()"
                :class="{
                  'is-invalid': v$.valueFields.cardYear.$error,
                }"
              >
                <div v-if="v$.valueFields.cardYear.required.$invalid" class="invalid-feedback">
                  Bu alan boş olamaz.
                </div>
                <option value="" disabled="disabled" selected="selected">Yıl</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
          </div>
          <div class="card-form__col -cvv">
            <div class="card-input">
              <label for="cardCvv" aria-label="Card CVV" class="card-input__label">CVV</label>
              <input
                type="tel"
                title="CVV"
                id="v-card-cvv"
                maxlength="4"
                data-card-field=""
                autocomplete="off"
                class="card-input__input"
                v-model="valueFields.cardCvv"
                @blur="v$.valueFields.cardCvv.$touch()"
                :class="{
                  'is-invalid': v$.valueFields.cardCvv.$error,
                }"
              />
            </div>
          </div>
        </div>
        <div class="card-form__row">
          <button class="btn btn-primary" @click="pay()">Ödeme yap</button>
          <span class="mt-2 bi bi-wallet2 sum"><strong> Ödeme tutarı: 000 TL</strong> </span>
        </div>
      </div>
    </div>
  </div>

  <footer-bar />
</template>

<script>
import FooterBar from "../components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, helpers } from "@vuelidate/validators";

const turkishChar = (value) => !helpers.req(value) || /^[a-zA-ZıİçÇşŞğĞÜüÖö]*$/g.test(value);

export default {
  components: { Navbar, FooterBar },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data: () => ({
    valueFields: {
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
    },
    inputFields: {
      cardNumber: "v-card-number",
      cardName: "v-card-name",
      cardMonth: "v-card-month",
      cardYear: "v-card-year",
      cardCvv: "v-card-cvv",
    },
    labels: {
      cardName: "AD SOYAD",
      cardHolder: "Kart Sahibi",
      cardMonth: "MM",
      cardYear: "YY",
      cardExpires: "Son Kull. Tarih",
      cardCvv: "CVV",
    },
  }),
  validations() {
    return {
      valueFields: {
        cardName: { required },
        cardNumber: { required },
        cardMonth: { required },
        cardYear: { required },
        cardCvv: { required },
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    pay() {
      this.v$.$validate();
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 90px;
  margin-bottom: 90px;
}
#v-card-year {
  max-width: 100px;
}
#v-card-month {
  max-width: 100px;
}
.card-form__inner {
  background: #fff;
  box-shadow: 0px 30px 60px 0 rgb(90 116 148 / 40%);
  border-radius: 10px;
  padding: 45px 25px 25px 25px;
}
.card-input {
  margin-bottom: 20px;
}
.card-input__label {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  width: 100%;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.card-input__input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  font-family: "Source Sans Pro", sans-serif;
}
.card-form__row {
  display: flex;
  align-items: flex-start;
}
.card-form__col {
  flex: auto;
}
.card-form__col.-cvv {
  max-width: 150px;
}
.card-form__col:last-child {
  margin-right: 0;
}
.card-form__group {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.card-input__input.-select {
  -webkit-appearance: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC);
  background-size: 12px;
  background-position: 90% center;
  background-repeat: no-repeat;
}
.card-form__group .card-input__input:last-child {
  margin-right: 0;
}
.card-list {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.sum {
  margin-left: 130px;
}
</style>