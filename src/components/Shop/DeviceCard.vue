<template>
  <div class="p-4" >
    <div class="card p-4 " style="width: 15rem">
      <slot name="image" />
      <div class="card-body">
        <div class="row align-items-center">
          <slot name="title" />
          <div class="mt-2">
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
.button:hover > i {
  color: #fbc531;
}
</style>
