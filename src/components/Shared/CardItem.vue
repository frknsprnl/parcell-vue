<template>
  <div class="container py-5">
    <section class="hover-div" style="height: 25rem">
      <div class="">
        <slot class="" name="image" />
      </div>
      <div class="hover-div_inner mt-2">
        <h3>
          <slot class="" name="title" />
        </h3>
        <slot name="text-center" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.starter-template {
  padding: 80px 15px;
  text-align: center;
}

span.lower-text {
  color: #ffc300;
  font-size: 25px;
  display: block;
}

.hover-div {
  padding: 20px 20px;
  text-align: center;
  min-height: 350px;
  min-width: 300px;
  width: 350px;
}

.hover-div {
  border-top: 1px solid #f8f8f8;
  background: #f8f8f8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 10px 0px;
}

.hover-div:hover {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  box-shadow: 0 22px 43px rgba(0, 0, 0, 0.32);
  cursor: auto;
  border-radius: 5px;
}
</style>
