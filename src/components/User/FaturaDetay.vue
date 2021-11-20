<template>
  <div class="w-100 p-3 d-flex justify-content-center">
    <div class="row pt-4 w-50">
      <div class="col-12">
        <div class="card shadow-2-strong" style="border-radius: 15px">
          <div class="card-body">
            <div class="p-3 bg-white rounded">
              <div class="row">
                <div class="col">
                  <h3 class="text-uppercase">Fatura Detay</h3>
                  <div class="billed">
                    <span class="font">
                      <strong>Ad Soyad:</strong>
                    </span>
                    <span class="ml-1">Ümit Havare</span>
                  </div>
                  <div class="billed">
                    <span class="font-weight-bold"> <strong>Tarih:</strong> </span
                    ><span class="ml-1">11 Kasım, 2021</span>
                  </div>
                  <div class="billed">
                    <span class="font-weight-bold"></span>
                    <strong> Fatura No:</strong>
                    <span class="ml-1"> 1345345</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Ürün</th>
                        <th>Birim</th>
                        <th>Fiyat</th>
                        <th>Toplam</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mega Online Paket</td>
                        <td>1</td>
                        <td>200</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Toplam</td>
                        <td>200</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="col-12 mt-4 d-flex justify-content-end">
                    <button @click="goToPayment()" class="btn btn-primary">Fatura Öde</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPayment() {
      this.$router.push({ name: "PaymentPage" });
    },
  },
};
</script>
