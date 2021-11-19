<template>
  <div
    class="container rounded bg-secondary row justify-content-center border border-danger"
    style="width: 300px; height: 600px"
  >
    <div class="d-flex justify-content-center align-items-center">
      <button @click="setProfileActiveTab('UserDetails')" class="btn btn-lg bg-secondary">
        Kullanıcı Bilgileri
      </button>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn btn-lg">Şifre Değiştir</button>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button @click="setProfileActiveTab('Deposit')" class="btn btn-lg">Tl Yükle</button>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn btn-lg bg-secondary">Paketlerim</button>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button class="btn btn-lg bg-secondary">Faturalarım</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setProfileActiveTab(input) {
      if (input === "UserDetails") {
        this.$store.profileUserDetailsTab = true;
        this.$store.profileDepositTab = false;
      } else if (input === "Deposit") {
        this.$store.profileDepositTab = true;
        this.$store.profileUserDetailsTab = false;
      }
    },
  },
};
</script>
