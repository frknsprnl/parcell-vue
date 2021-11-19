<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center h-100">
            <div class="col-12 col-lg-9 col-xl-6">
              <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Şifre Sıfırlama</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline" style="padding-right: 0.7rem">
                          <label class="form-label" for="mail">Email</label>
                          <input type="mail" id="mail" class="form-control form-control-md" />
                        </div>
                      </div>
                      <div class="row justify-content-center">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="password">Yeni Şifre</label>
                            <input type="text" id="password" class="form-control form-control-md" />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="password">Yeni Şifre (Tekrar)</label>
                            <input type="text" id="password" class="form-control form-control-md" />
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 pt-2">
                        <input class="btn btn-primary btn-md" type="button" value="Sıfırla" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from "@/components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";

export default {
  components: {
    Navbar,
    FooterBar,
  },
};
</script>
