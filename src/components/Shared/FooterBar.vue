<template>
  <footer class="">
    <div class="jumbotron jumbotron-fluid footer-bg p-4 mt-5 mb-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
            <div class="card bg-transparent border-0">
              <div class="card-body text-light text-center">
                <h5 class="card-title text-white display-4" style="font-size: 30px">Telif Hakkı</h5>
                <p class="d-inline lead">Tüm Hakları Saklıdır © 2021<br /></p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
            <div class="card bg-transparent border-0">
              <div class="card-body text-center mt-2">
                <router-link class="text-decoration-none" :to="{ name: 'FaqPage' }">
                  <a
                    class="text-light text-decoration-none"
                    style="font-size: 1.2rem; font-weight: 400"
                    ><i class="bi bi-question-circle me-2"></i>Sık Sorulan Sorular</a
                  >
                  <br />
                </router-link>
                <router-link class="text-decoration-none" :to="{ name: 'CustomerServicePage' }">
                  <a
                    class="text-light text-decoration-none"
                    style="font-size: 1.2rem; font-weight: 400"
                    ><i class="bi bi-people me-2"></i>Müşteri Hizmetleri</a
                  >
                  <span class="ms-1"></span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card bg-transparent border-0">
              <div class="card-body text-center">
                <h5 class="card-title text-white display-4" style="font-size: 30px">
                  Sosyal Medya
                </h5>

                <a class="text-light" href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-fw fa-2x"></i></a>

                <a class="text-light" href="https://twitter.com/home"><i class="fa fa-twitter-square fa-fw fa-2x"></i></a>

                <a class="text-light" href="https://www.instagram.com/"><i class="fa fa-instagram fa-fw fa-2x"></i></a>

                <a class="text-light" href="https://www.linkedin.com/"><i class="fa fa-linkedin fa-fw fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("../../../public/style.css");

.footerab {
  position: fixed;
  bottom: 0;
}
</style>
