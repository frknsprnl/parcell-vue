<template>
  <div class="container">
    <div class="container rounded bg-white">
      <div class="row d-flex justify-content-sm-center">
        <div class="col-sm-3 ">
          <div class="d-flex flex-column align-items-center p-4">
            <img class="img-thumbnail rounded-circle mt-1" src="../../assets/userimage.jpg" />
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Kullanıcı Bilgileri</h4>
            </div>

            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels"><i class="bi bi-people-fill"> Müşteri No.</i></label
                ><input type="text" class="form-control" value="1911012054" readonly />
              </div>
              <div class="col-md-6">
                <label class="labels"> <i class="bi bi-person-fill"> Ad</i></label
                ><input type="text" class="form-control" value="Furkan" readonly />
              </div>
              <div class="col-md-6">
                <label class="labels"> <i class="bi bi-person-fill"> Soyad</i></label
                ><input type="text" class="form-control" value="Süpürenel" readonly />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels"><i class="bi bi-gender-ambiguous"> Cinsiyet</i></label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Erkek/Kadın"
                  value="Erkek"
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label class="labels"><i class="bi bi-telephone-fill"> Telefon No.</i></label
                ><input
                  type="text"
                  class="form-control"
                  value="545 *** **40"
                  placeholder="state"
                  readonly
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels"><i class="bi bi-envelope-open-fill"> Email</i> </label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="user@gmail.com"
                  value="frknsprnl@hotmail.com"
                  readonly
                />
              </div>
              <div class="col-md-12">
                <label class="labels"><i class="bi bi-geo-alt-fill"> Adres</i></label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="adres"
                  value="Halikent,4, 32040, Merkez/Eskisehir, Turkey"
                  readonly
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
                  value="Eskişehir"
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label class="labels"><i class="bi bi-calendar-fill"> Doğum Tarihi</i></label
                ><input
                  type="text"
                  class="form-control"
                  value="02/09/2001"
                  placeholder="gün/ay/yıl"
                  readonly
                />
              </div>
            </div>
            <div class="mt-5 d-flex justify-content-center">
              <button class="btn btn-danger me-2" type="button">
                <i class="bi bi-pen me-1"> </i> <span>Profili Düzenle</span>
              </button>
              <button class="btn btn-primary profile-button" type="button">
                <i class="bi bi-save me-1"> </i> <span>Profili Kaydet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img-round {
  border-radius: 50%;
}
</style>
