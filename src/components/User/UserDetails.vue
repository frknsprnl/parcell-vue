<template>
  <div class="container">
    <div class="container rounded bg-white">
      <div class="row justify-content-center">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center mt-5 p-4">
            <img
              v-if="this.user.gender === 'Erkek'"
              class="img-thumbnail rounded-circle mt-5"
              src="../../assets/male.png"
            />
            <img
              v-else-if="this.user.gender === 'Kadın'"
              class="img-thumbnail rounded-circle mt-5"
              src="../../assets/female.png"
            />
            <span class="mt-2" style="font-size: 1.2rem">{{ user.name }} {{ user.surname }}</span>
            <span class="mt-2" style="font-size: 1.2rem">{{ user.balance }}₺</span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Kullanıcı Bilgileri</h4>
            </div>
            <form>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels"><i class="bi bi-people-fill"> Müşteri No.</i></label
                  ><input type="text" class="form-control" v-model="user.id" disabled />
                </div>
                <div class="col-md-6">
                  <label class="labels"> <i class="bi bi-person-fill"> Ad</i></label
                  ><input type="text" class="form-control" v-model="user.name" disabled />
                </div>
                <div class="col-md-6">
                  <label class="labels"> <i class="bi bi-person-fill"> Soyad</i></label
                  ><input type="text" class="form-control" v-model="user.surname" disabled />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-gender-ambiguous"> Cinsiyet</i></label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Erkek/Kadın"
                    v-model="user.gender"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-telephone-fill"> Telefon No.</i></label
                  ><input type="text" class="form-control" v-model="user.phone" disabled />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels"><i class="bi bi-envelope-open-fill"> Email</i> </label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="user@gmail.com"
                    v-model="user.mail"
                    :disabled="disabled == 0"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels"><i class="bi bi-geo-alt-fill"> Adres</i></label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="adres"
                    v-model="user.address"
                    :disabled="disabled == 0"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-globe2"> Doğum Yeri</i></label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Şehir"
                    v-model="user.birthPlace"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-calendar-fill"> Doğum Tarihi</i></label
                  ><input type="date" class="form-control" v-model="user.birthDate" disabled />
                </div>
              </div>
              <div class="mt-5 d-flex justify-content-center">
                <button class="btn btn-danger me-3" id="edit-btn" type="button" @click="disabled = 1">
                  <i class="bi bi-pen me-1"> </i>
                  <span>Profili Düzenle</span>
                </button>
                <button class="btn btn-primary profile-button" type="button" @click="disabled = 0">
                  <i class="bi bi-save me-1"> </i> <span>Profili Kaydet</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    //
  },
  data() {
    return {
      user: {},
      disabled: 0,
      id: null,
    };
  },

  mounted() {
    this.user = this.$store.getters._getCurrentUser;
    let date = this.user.birthDate.slice(0, 10);
    this.user.birthDate = date;
    console.log(this.user);
  },
};
</script>

<style scoped>
.img-round {
  border-radius: 50%;
}
/* #edit-btn {
  background-color: #7c27c5;
  color: white;
} */
</style>
