<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <div class="col-4">
        <load-animation v-if="getLoadingStatus" />
        <div v-if="!getLoadingStatus && message === null" class="card p-2" style="width: 18rem">
          <img :src="require(`@/assets/${planData.image}`)" class="card-img-top" />
          <div class="card-body">
            <h6 class="text-center">{{ planData.planName }}</h6>
            <hr />
            <ul class="list-unstyled" id="planlist">
              <li class="bi bi-globe">
                <span class="ms-2"> {{ planData.internet }} GB</span>
              </li>
              <li class="bi bi-telephone">
                <span class="ms-2">{{ planData.minutes }} DK</span>
              </li>
              <li class="bi bi-envelope">
                <span class="ms-2"> {{ planData.sms }} SMS</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="!getLoadingStatus && message !== null" class="card p-2" style="width: 18rem">
          <h4 class="text-center text-danger">{{ message }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadAnimation from "../Shared/LoadAnimation.vue";
export default {
  components: { LoadAnimation },
  data() {
    return {
      planId: null,
      planData: {},
      image: null,
      isLoading: true,
      message: null,
    };
  },
  methods: {
    async getUserPlan() {
      await this.$appAxios
        .get(`/User/GetUserPlan?userId=${this.$store.getters._currentUserId}`)
        .then((response) => {
          console.log(response);
          this.planId = response.data;
          this.getPlanData(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.message = error.response.data;
        });
    },
    async getPlanData() {
      await this.$appAxios
        .get(`/Plan/GetPlan/${this.planId}`)
        .then((response) => {
          this.planData = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
  async created() {
    this.isLoading = true;
    await this.getUserPlan();
    this.isLoading = false;
  },
};
</script>

