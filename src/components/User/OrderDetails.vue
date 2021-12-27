<template>
  <div class="card mt-4">
    <div class="row">
      <div class="title ms-5 mb-2">
        <h1>Siparişlerim</h1>
      </div>
      <div class="col-8 summary ms-5">
        <div class="row summary-box">
          <div class="row align-items-center row-1">
            <div class="col-4 text-muted"><strong>Sipariş Tarihi</strong></div>

            <div class="col-4 text-muted"><strong>Alıcı</strong></div>

            <div class="col-4 text-muted"><strong>Tutar</strong></div>
          </div>
          <div class="row align-items-center row-2">
            <div class="col-4">01.01.01</div>

            <div class="col-4">Mohamedo Avdol</div>

            <div class="col-4">666 TL</div>
            <div class="position-absolute">
              <button class="btn btn-primary btn-order-detail">Sipariş Detayı</button>
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

<style scoped>
h1 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.card {
  margin: auto;
  max-width: 1200px;
  width: 65%;
  height: 400px;
  border-radius: 1rem;
  border: transparent;
}

.card-img {
  height: 70px;
  width: 70px;
  margin-top: 7px;
  margin-bottom: 7px;
}

.summary {
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  width: 1000px;
  height: 500px;
}
.summary-box {
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  width: 997px;
  height: 130px;
}
.btn-order-detail {
  margin-left: 840px;
}
.row-1 {
  background-color: #e6e6e6;
  border-radius: 6px;
  margin-left: 0.1px;
}
.row-2 {
  margin-left: 5px;
}
</style>
