<template>
  <div class="container">
    <div class="p-4">
      <div class="row justify-content-center">
        <div>
          <div>
            <h2 class="text-center">TL Yükle</h2>
            <h6 class="text-center mt-4">
              TL Yüklemesi Yapmak İçin Aşağıda Bulunan Paketlerden Birini Seçip Yükle Butonuna Basınız.
            </h6>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-end">
          <div class="mt-4 mb-4">
            <div class="card mt-2" style="width: 5rem">
              <div class="card-body d-flex justify-content-center">
                <button class="btn btn-lg" @click="setDepositAmount('30')">30</button>
              </div>
            </div>
            <div class="card mt-2" style="width: 5rem">
              <div class="card-body d-flex justify-content-center">
                <button class="btn btn-lg" @click="setDepositAmount('70')">70</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-start">
          <div class="mt-4 mb-4">
            <div class="card mt-2" style="width: 5rem">
              <div class="card-body d-flex justify-content-center">
                <button class="btn btn-lg" @click="setDepositAmount('50')">50</button>
              </div>
            </div>
            <div class="card mt-2" style="width: 5rem">
              <div class="card-body d-flex justify-content-center">
                <button class="btn btn-lg" @click="setDepositAmount('90')">90</button>
              </div>
            </div>
          </div>
        </div>
        <div id="disabled-input-field" class="mt-4">
          <div class="d-flex justify-content-center">
            <div class="form-outline text-center">
              <label class="form-label" for="firstName">Yüklenecek Miktar</label>
              <input
                type="text"
                id="firstName"
                v-model="depositAmount"
                class="form-control form-control-lg text-center"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h5 class="text-danger text-center mb-3">{{ warningMessage }}</h5>
          <div class="d-flex justify-content-center">
            <button @click="goToPayment()" class="btn btn-primary btn-lg">Yükle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      depositAmount: null,
      warningMessage: null,
    };
  },

  methods: {
    setDepositAmount(e) {
      this.depositAmount = e;
    },
    goToPayment() {
      if (this.depositAmount != null) {
        this.$router.push({ name: "PaymentPage" });
      } else {
        this.warningMessage = "TL Paketi Seçmediniz!";
      }
    },
  },

  computed: {
    getDepositAmount() {
      return this.depositAmount;
    },
  },
};
</script>
