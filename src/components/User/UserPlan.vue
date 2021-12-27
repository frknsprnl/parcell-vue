<template>
  <div class="container rounded bg-white mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <div class="col-4">
        <div v-if="message !== null" class="card p-2" style="width: 18rem">
          <img :src="require('@/assets/' + planData.image)" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="text-center">{{ planData.planName }}</h6>
            <hr />
            <ul class="list-unstyled" id="planlist">
              <li class="bi bi-globe">
                <span class="ms-2"> {{ planData.internet }}</span>
              </li>
              <li class="bi bi-telephone">
                <span class="ms-2">{{ planData.minutes }}</span>
              </li>
              <li class="bi bi-envelope">
                <span class="ms-2"> {{ planData.sms }} </span>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="card p-2" style="width: 18rem">
          <h4 class="text-center">{{ message }} adsda</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const planData = ref({});

    return {
      planData,
    };
  },

  data() {
    return {
      planId: null,
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
  async created() {
    await this.getUserPlan();
    console.log("created", this.planId);
    if (this.planId === null || this.planId === "") {
      console.log("boş");
    } else {
      await this.getPlanData();
    }
    console.log("created", this.planData);
  },
};
</script>