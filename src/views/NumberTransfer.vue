<template>
  <div class="d-flex flex-column min-vh-100 justify-content-sm-between">
    <div>
      <navbar />
    </div>
    <section class="vh-100 gradient-custom">
      <div class="container-md p-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Numara Taşıma</h3>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="firstName"><i class="bi bi-person-fill me-1"></i>Ad</label>

                        <input type="text" id="firstName" class="form-control form-control" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="lastName"><i class="bi bi-person-fill me-1"></i>Soyad</label>
                        <input type="text" id="lastName" class="form-control form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
                      <div class="form-outline datepicker w-100">
                        <label for="password" class="form-label"
                          ><i class="bi bi-shield-lock-fill me-1"></i>Şifre</label
                        >
                        <input type="text" class="form-control form-control" id="password" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="emailAddress"
                          ><i class="bi bi-envelope-fill me-1"></i>Email</label
                        >
                        <input
                          type="email"
                          id="emailAddress"
                          class="form-control form-control"
                          placeholder="parcell@gmail.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row align-items-center">
                    <div class="col-md-6 mb-4 pb-2">
                      <label for="exampleInputNumber" class="form-label"
                        ><i class="bi bi-telephone-fill me-1"></i>Telefon Numarası</label
                      >
                      <input type="number" class="form-control" id="exampleInputNumber" />
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <h6 class="mb-2 pb-1"><i class="bi bi-gender-ambiguous"></i> Cinsiyet</h6>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="maleGender"><i class="bi bi-gender-male"> Erkek</i></label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option1"
                          checked
                        />
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="femaleGender"
                          ><i class="bi bi-gender-female"> Kadın</i></label
                        >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <label class="form-label" for="birthPlace"><i class="bi bi-globe me-1"></i>Doğum Yeri</label>
                        <input
                          type="birthplace"
                          id="birthPlace"
                          class="form-control form-control"
                          placeholder="Örn. Isparta"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <label class="form-label" for="birthDate"
                          ><i class="bi bi-calendar-fill me-1"></i> Doğum Tarihi</label
                        >
                        <input
                          type="birthdate"
                          id="birthDate"
                          class="form-control form-control"
                          placeholder="Gün/Ay/Yıl"
                        />
                      </div>
                    </div>
                    <div class="form-check ms-3">
                      <input type="checkbox" class="form-check-input" name="docs" id="trasferDoc1" />
                      <label class="form-check-label" for="transferDoc1 ">
                        <span class="link-primary text-decoration-underline">Numara Taşıma</span> sözleşmesini kabul
                        etmek için işaretleyin.
                      </label>
                    </div>
                    <div class="mt-4 pt-2">
                      <input class="btn btn-primary btn-md" type="button" value="Onayla" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "@/components/Shared/Navbar.vue";
import FooterBar from "@/components/Shared/FooterBar.vue";
export default {
  components: { Navbar, FooterBar },
};
</script>
