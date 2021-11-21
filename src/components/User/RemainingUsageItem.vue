<template>
  <section class="container border border-danger" id="max-container">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">
        <div class="pt-5">
          <div class="row">
            <div class="card col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1">Dakika</h3>
                <hr />
              </div>
              <div class="circle-wrap me-2">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle">70%</div>
                </div>
              </div>
            </div>

            <div class="card col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1 pe-2">İnternet</h3>
                <hr />
              </div>
              <div class="circle-wrap me-2">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle">70%</div>
                </div>
              </div>
            </div>

            <div class="card col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1">SMS</h3>
                <hr />
              </div>
              <div class="circle-wrap me-2">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.circle-wrap {
  margin: 20px;
  width: 150px;
  height: 150px;
  background: #e6e2e7;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #9e00b1;
}

.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(126deg);
  }
}
.circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
</style>