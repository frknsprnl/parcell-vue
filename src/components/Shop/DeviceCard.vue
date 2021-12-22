<template>
  <div class="container">
    <div class="card p-4" style="width: 15rem">
      <slot name="image" />
      <div class="card-body">
        <div class="row align-items-center">
          <div v-show="false" ref="deviceId"><slot name="deviceId" /></div>
          <slot name="title" />
          <div class="mt-2 overflow-auto hover-div" style="height: 3rem">
            <p class="text-center"><slot name="body-text" /></p>
          </div>
          <hr />
          <!-- <h5 class="text-center"><slot name="price" /></h5> -->
          <div class="d-flex justify-content-md-center">
            <button @click="postData()" class="btn btn-primary btn-lg mt-2">
              <i class="bi bi-cart-plus-fill me-2"></i>
              <span> <slot name="price" /> </span>
            </button>
          </div>
        </div>
      </div>
      <ConfirmDialog></ConfirmDialog>
      <ConfirmDialog group="positionDialog"></ConfirmDialog>

      <div class="card">
        <h5>Basic</h5>
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm" class="p-mr-2"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmDialog from "primevue/confirmdialog";
export default {
  data() {
    return {};
  },
  methods: {
    postData() {
      const userId = this.$store.getters._currentUserId;
      this.$appAxios
        .get(`/Basket/AddDeviceToBasket?userId=${userId}&deviceId=${this.$refs.deviceId.innerHTML}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 400) {
            this.$toast.error(error.response.data);
          }
        });
    },
    confirm1() {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
  },
};
</script>

<style scoped>
.button:hover > i {
  color: #fbc531;
}

.hover-div {
  border-top: 1px solid #f8f8f8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.hover-div:hover {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px) scale(1.5, 2.5);
  box-shadow: 0 12px 13px rgba(0, 0, 0, 0.32);
  background: #f8f8f8;
  cursor: pointer;
  z-index: 999;
  border-radius: 5px;
  height: 6rem;
}
.hover-div:hover > p {
  font-size: 0.8rem;
}
</style>
