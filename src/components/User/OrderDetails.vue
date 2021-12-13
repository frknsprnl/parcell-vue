<template>
  <div class="card">
    <div class="row">
      <div class="col-8 cart">
        <div class="title">
          <div class="row">
            <div class="col">
              <h4><b>Sipariş Detay</b></h4>
            </div>
          </div>
        </div>
        <table class="table">
          <thead id="table-items">
            <tr>
              <th scope="col" class="border-0 bg-light">
                <div class="p-2 px-lg-3 text-uppercase">Ürün</div>
              </th>
              <th scope="col" class="border-0 bg-light">
                <div class="py-2 text-uppercase">Miktar</div>
              </th>
              <th scope="col" class="border-0 bg-light">
                <div class="py-2 text-uppercase">Fiyat</div>
              </th>
            </tr>
          </thead>
        </table>
        <div class="row border-top border-bottom">
          <div class="row main align-items-center">
            <div class="col-2">
              <img class="img-fluid" src="@/assets/apple-airpods-2.png" />
            </div>
            <div class="col">
              <div class="row text-muted">Kulaklık</div>
              <div class="row">Apple Airpods 2</div>
            </div>
            <div class="col"><a href="#" class="border">1</a></div>
            <div class="col">1000 TL</div>
          </div>
        </div>
        <div class="row">
          <div class="row main align-items-center">
            <div class="col-2">
              <img class="img-fluid" src="@/assets/samsung-telefon.png" />
            </div>

            <div class="col">
              <div class="row text-muted">Telefon</div>
              <div class="row">Samsung</div>
            </div>
            <div class="col"><a href="#" class="border">1</a></div>
            <div class="col">5000 TL</div>
          </div>
        </div>
        <div class="row border-top border-bottom">
          <div class="row main align-items-center">
            <div class="col-2">
              <img class="img-fluid" src="@/assets/xiaomi-powerbank.png" />
            </div>
            <div class="col">
              <div class="row text-muted">Powerbank</div>
              <div class="row">Xioami Powerbank</div>
            </div>
            <div class="col"><a href="#" class="border">1</a></div>
            <div class="col">200 TL</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 summary">
        <div>
          <h5><b>Sipariş Özeti</b></h5>
        </div>
        <hr />
        <div class="row">
          <div class="col">Sipariş tarihi: <small>10 Kasım 2021 19:55</small></div>
        </div>
        <br />
        <div class="row">
          <div class="col">Kargo takip no. <small>192092139021</small></div>
        </div>
        <br /><br />
        <div class="row" style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0" />
        <div class="col">
          <h6>Toplam tutar:</h6>
          6215.00 TL
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 5vh;
}

.card {
  margin: auto;
  max-width: 950px;
  width: 90%;
  border-radius: 1rem;
  border: transparent;
}

.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}

.summary .col-2 {
  padding: 0;
}

.summary .col-10 {
  padding: 0;
}

.row {
  margin: 0;
}

.title b {
  font-size: 1.5rem;
}

.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}

.col-2,
.col {
  padding: 0 1vh;
}

a {
  padding: 0 1vh;
}

.close {
  margin-left: auto;
  font-size: 0.7rem;
}

img {
  width: 3.5rem;
}

.back-to-shop {
  margin-top: 4.5rem;
}

h5 {
  margin-top: 4vh;
}

hr {
  margin-top: 1.25rem;
}

form {
  padding: 2vh 0;
}

select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

.btn {
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}

.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  user-select: none;
  -webkit-user-select: none;
  transition: none;
}

.btn:hover {
  color: white;
}

a {
  color: black;
}

a:hover {
  color: black;
  text-decoration: none;
}

#code {
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)),
    url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>