<template>
  <div class="card mt-4">
    <div class="row">
      <div class="title ms-5 mb-2">
        <h1>Siparişlerim</h1>
      </div>
      <div class="col-8 summary ms-5">
        <div class="row summary-box">
          <div class="row align-items-center row-1">
            <div class="col-3 text-muted"><strong>Sipariş Tarihi</strong></div>

            <div class="col-3 text-muted"><strong class="ms-5">Alıcı</strong></div>

            <div class="col-4 text-muted"><strong class="ms-5">Tutar</strong></div>
          </div>
        </div>
        <div class="scrollable">
          <div class="row align-items-center row-2 mb-2" v-for="item in 10" :key="item.id">
            <div class="col-3"><span class="ms-2">01.01.01</span></div>

            <div class="col-3"><span class="ms-5">Mohamedo Avdol</span></div>

            <div class="col-4"><span class="ms-5 text-sum">666 TL</span></div>
            <div class="col-2">
              <button class="btn btn-primary me-3">Sipariş Detayı</button>
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
.scrollable {
  height: 445px;
  overflow: scroll;
}
.text-sum {
  margin-left: 25px;
}
h1 {
  font-size: 22px;
  color: #333;
  margin-bottom: 16px;
}

.card {
  margin: auto;
  max-width: 1200px;
  width: 60%;
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
  height: 50px;
  margin-bottom: 15px;
}
.btn-order-detail {
  margin-left: 100px;
}
.row-1 {
  background-color: #e6e6e6;
  border-radius: 6px;
  margin-left: 0.1px;
}
.row-2 {
  border: solid 1px #e6e6e6;
  border-radius: 6px;
  height: 70px;
  width: 970px;
  margin-left: 1px;
}
#list-example {
  overflow: scroll;
}
</style>
