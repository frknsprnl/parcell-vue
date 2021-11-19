<template>
  <div class="p-4">
    <div class="card p-4" style="width: 15rem">
      <img class="card-img-top" src="../../assets/logo.png" alt="" width="10rem" />
      <div class="card-body">
        <div class="row align-items-center">
          <h3 class="card-title text-primary text-center">Device</h3>
          <hr />
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <hr />
          <h5 class="text-center">1000 TL</h5>
          <div class="d-flex justify-content-md-center">
            <button class="btn btn-primary btn-lg mt-2">
              <i class="bi bi-cart-plus-fill"></i>
            </button>
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

.btn-primary:hover {
  background-color: rgb(92, 20, 92);
}
.button:hover > i {
  color: #fbc531;
}

</style>


<style lang="sass" scoped>
@import '@/../public/style.scss'
.btn-primary
  @include button-variant($colors-purple-tawk,white)
</style>