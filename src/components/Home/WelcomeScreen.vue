<template>
  <div class="d-flex justify-content-between-sm gradient-border">
    <div class="row-2 mt-4 ms-4">
      <h2 class="col-8 ms-4 mb-5 text-white">
        Online başvuruya özel avantajları kaçırmamak için Parcell'li ol!
      </h2>
      <router-link class="text-decoration-none" :to="{ name: 'NumberTransfer' }">
        <a class="btn btn-danger btn-lg col-2 mt-5 ms-4"> Parcell'e Geç</a>
      </router-link>
    </div>
    <logo />
  </div>
</template>

<script>
import Logo from "../Shared/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style>
.font-google {
  font-family: "Itim", cursive;
}

.gradient-border {
  background: linear-gradient(0deg, #7367f0, #4c3a6e);
}
</style>
