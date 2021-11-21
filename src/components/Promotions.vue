<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <div class="col-4">
        <div class="card hover-div" style="width: 10rem">
          <img src="../assets/promotion1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="text-center">D&R'da Hediye Kitap!</h6>
            <hr />
            <p class="card-text" id="promotion-text">
              22-28 Kasım haftası D&R’da geçerli Hediye Kitap ayrıcalığından yararlanan ilk 10.000
              müşterimizden biri olmak için şifrenizi Paycell uygulamasından alabilirsiniz. Keyifli okumalar
              dileriz.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card hover-div" style="width: 10rem">
          <img src="../assets/promotion2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="text-center">Kahve.com'da 50 TL Hediye</h6>
            <hr />
            <p class="card-text" id="promotion-text">
              Kahve.com sitesinde geçerli 50 TL değerindeki indirim hediyenizden yararlanmak için Parcell
              şifrenizi alabilir, alışveriş sırasında «hediye çeki» alanında kullanabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card hover-div" style="width: 10rem">
          <img src="../assets/promotion3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="text-center">COVID-19 Testlerinde %30 indirim</h6>
            <hr />
            <p class="card-text" id="promotion-text">
              Memorial’da yaptıracağınız COVID-19 PCR testi, IgM antikor testi, aşı sonrası IgG antikor testi
              ve COVID-19 genetik yatkınlık testlerinden %30 indirim ile yararlanmak için şifrenizi
              alabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#promotion-text {
  font-size: 14px;
}

.hover-div {
  /* padding: 10px 10px; */
  text-align: center;
  min-height: 350px;
  min-width: 300px;
  width: 350px;
}

.hover-div {
  border-top: 1px solid white;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 10px 0px;
}

.hover-div:hover {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  box-shadow: 0 22px 43px rgba(0, 0, 0, 0.32);
  cursor: pointer;
  border-radius: 5px;
}
</style>
