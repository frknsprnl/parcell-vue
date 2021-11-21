<template>
  <div class="p-4">
    <div class="card p-4" style="width: 15rem">
      <slot name="image" />

      <div class="card-body">
        <div class="row align-items-center">
          <h3 class="card-title text-primary text-center"><slot name="title" /></h3>
          <hr />
          <div>
            <p><slot name="body-text" /></p>
          </div>
          <hr />
          <h5 class="text-center"><slot name="price" /></h5>
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
