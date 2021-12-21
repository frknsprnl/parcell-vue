<template>
  <navbar />
  <section class="gradient-custom d-flex justify-content-center pt-2">
    <div class="container row col-9 py-4">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
            <div class="card-body p-4 p-md-5">
              <figure class="text-center">
                <blockquote class="blockquote">
                  <h1>Faturalı Ol</h1>
                </blockquote>
              </figure>
              <form>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="exampleInputName" class="form-label">Ad</label>
                    <input type="text" class="form-control" id="exampleInputName" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="exampleInputSurname" class="form-label">Soyad</label>
                    <input type="text" class="form-control" id="exampleInputSurname" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="exampleInputNumber" class="form-label">Telefon Numarası</label>
                    <input type="number" class="form-control" id="exampleInputNumber" />
                  </div>
                </div>

                <br />

                <ul class="list-group">
                  <li class="list-group-item">
                    <input
                      class="form-check-input me-1"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Mega Online Paket
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input me-1"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Ultra Online Paket
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input me-1"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Super Online Paket
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input me-1"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Sınırlı Online Paket
                  </li>
                </ul>
              </form>
              <br />
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Şimdi Faturalı Ol</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <footer-bar />
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
export default {
  components: { Navbar, FooterBar },
};
</script>
