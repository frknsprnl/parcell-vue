<template>
  <div class="container">
    <div class="container rounded bg-white">
      <div class="row justify-content-center">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center mt-5 p-4">
            <img class="img-thumbnail rounded-circle mt-5" src="../../assets/userimage.jpg" />
            <span class="mt-2" style="font-size: 1.2rem">Furkan Süpürenel</span>
            <span class="mt-2" style="font-size: 1.2rem">999.99₺</span>
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
                  ><input type="text" class="form-control" value="1911012054" readonly />
                </div>
                <div class="col-md-6">
                  <label class="labels"> <i class="bi bi-person-fill"> Ad</i></label
                  ><input
                    type="text"
                    class="form-control"
                    v-for="users in users"
                    :key="users.Name"
                    :users="users"
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels"> <i class="bi bi-person-fill"> Soyad</i></label
                  ><input type="text" class="form-control" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-gender-ambiguous"> Cinsiyet</i></label
                  ><input type="text" class="form-control" placeholder="Erkek/Kadın" />
                </div>
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-telephone-fill"> Telefon No.</i></label
                  ><input type="text" class="form-control" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels"><i class="bi bi-envelope-open-fill"> Email</i> </label
                  ><input type="text" class="form-control" placeholder="user@gmail.com" />
                </div>
                <div class="col-md-12">
                  <label class="labels"><i class="bi bi-geo-alt-fill"> Adres</i></label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="adres"
                    value="Halikent,4, 32040, Merkez/Eskisehir, Turkey"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-globe2"> Doğum Yeri</i></label
                  ><input type="text" class="form-control" placeholder="Şehir" />
                </div>
                <div class="col-md-6">
                  <label class="labels"><i class="bi bi-calendar-fill"> Doğum Tarihi</i></label
                  ><input type="text" class="form-control" />
                </div>
              </div>
              <div class="mt-5 d-flex justify-content-center">
                <button class="btn btn-danger me-2" type="button">
                  <i class="bi bi-pen me-1"> </i> <span>Profili Düzenle</span>
                </button>
                <button class="btn btn-primary profile-button" type="submit" @click="addToAPI">
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
import axios from "axios";

export default {
  components: {
    //
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get("http://localhost:29418/api/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>

<style>
.img-round {
  border-radius: 50%;
}
</style>
