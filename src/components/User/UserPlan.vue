<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <div class="col-4">
        <div class="card p-2" style="width: 18rem">
          <img :src="require('@/assets/' + plan.image)" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="text-center">{{ plan.planName }}</h6>
            <hr />
            <ul class="list-unstyled" id="planlist">
              <li class="bi bi-globe">
                <span class="ms-2"> {{ plan.internet }}</span>
              </li>
              <li class="bi bi-telephone">
                <span class="ms-2">{{ plan.minutes }}</span>
              </li>
              <li class="bi bi-envelope">
                <span class="ms-2"> {{ plan.sms }} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plan: {},
      user: {},
    };
  },
  methods: {
    async getUser() {
      await this.$appAxios
        .get(`/User/GetUser/${this.$store.getters._currentUserId}`)
        .then((response) => {
          console.log(response);
          this.$store.commit("setUser", response?.data);
          this.setUser();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setUser() {
      this.user = this.$store.getters._getCurrentUser;
    },
    async getPlanData() {
      await this.$appAxios
        .get(`/Plan/GetPlan/${this.user.planId}`)
        .then((response) => {
          this.plan = response.data;
          console.log(response.data);
          console.log(this.plan);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
          alert(error.response);
        });
    },
  },
  computed: {},
  async created() {
    await this.getUser();
    await this.getPlanData();
  },
};
</script>