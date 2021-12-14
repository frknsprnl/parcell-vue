<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <div class="card mt-4">
        <div class="row py-5">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4 class=""><b>Sepet</b></h4>
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img class="img-fluid" src="@/assets/apple-airpods-2.png" />
                </div>
                <div class="col">
                  <div class="row text-muted">Kulaklık</div>
                  <div class="row">Apple Airpods 2</div>
                </div>
                <div class="col"><a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a></div>
                <div class="col">1000 TL <span class="close"></span></div>
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
                <div class="col"><a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a></div>
                <div class="col">5000 TL<span class="close"></span></div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img class="img-fluid" src="@\assets\xiaomi-powerbank.png" />
                </div>
                <div class="col">
                  <div class="row text-muted">Powerbank</div>
                  <div class="row">Xioami Powerbank</div>
                </div>
                <div class="col"><a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a></div>
                <div class="col">200 TL <span class="close"></span></div>
              </div>
            </div>
            <div class="back-to-shop">
              <a href="#">&leftarrow;</a><span class="text-muted">Alışverişe Geri Dön</span>
            </div>
          </div>
          <div class="col-md-4 summary pt-1 mt-4">
            <h5 class="mb-2"><b>Sipariş Özeti</b></h5>
            <div class=""></div>
            <hr />
            <div class="row">
              <h6 class="col container">6200 TL</h6>
            </div>
            <form>
              <p>Kargo</p>
              <div class="pe-2">
                <select>
                  <option class="text-muted">Parcell Kargo- 15 TL</option>
                </select>
              </div>
            </form>
            <div class="row" style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0">
              <div class="col">Toplam Tutar</div>
              <div class="col text-right">6215.00 TL</div>
            </div>
            <div class="pt-4">
              <router-link :to="{ name: 'PaymentPage' }">
                <button class="btn btn-primary">Ödeme Kısmına İlerle</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-bar />
</template>

<script>
import Navbar from "@/components/Shared/Navbar.vue";
import FooterBar from "@/components/Shared/FooterBar.vue";
export default {
  components: {
    Navbar,
    FooterBar,
  },
};
</script>

<style scoped>
body {
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}

.title {
  margin-bottom: 5vh;
}

.card {
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

/* .btn {
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
} */

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
