<template>
  <!-- <section class="container d-flex me-5" id="">
    <div class="">
      <div class="d-flex justify-content-center align-items-center">
        <div class="card mt-5">
          <div class="row">
            <div class="col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1">Dakika</h3>
                <hr />
              </div>
              <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
            </div>
            <div class="col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1 pe-2">İnternet</h3>
                <hr />
              </div>
              <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
            </div>
            <div class="col-md-4">
              <div class="card-title">
                <h3 class="text-center pt-1">SMS</h3>
                <hr />
              </div>
              <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <div class="row g-1 m-5">
    <load-animation class="m-3" v-if="getLoadingStatus" />
    <div v-if="!getLoadingStatus && message === null" class="d-flex">
      <div class="m-2">
        <div class="card p-2">
          <h4 class="text-center">İnternet</h4>
          <hr />
          <ve-progress
            :progress="remaingData.internet"
            :size="170"
            :color="'#4c3a6e'"
            :thickness="15"
            empty-thickness="15"
          />
        </div>
      </div>
      <div class="m-2">
        <div class="card p-2">
          <h4 class="text-center">Dakika</h4>
          <hr />
          <ve-progress
            :progress="remaingData.minutes"
            :color="'#4c3a6e'"
            :legendValue="'%'"
            :size="170"
            :thickness="15"
            :empty-thickness="15"
          >
          </ve-progress>
        </div>
      </div>
      <div class="m-2">
        <div class="card p-2">
          <h4 class="text-center">Sms</h4>
          <hr />
          <ve-progress
            :progress="remaingData.sms"
            :color="'#4c3a6e'"
            :size="170"
            :thickness="15"
            empty-thickness="15"
          />
        </div>
      </div>
    </div>
    <div v-else-if="!getLoadingStatus && message !== null" class="card p-2" style="width: 18rem">
      <h4 class="text-center text-danger">{{ message }}</h4>
    </div>
    <div v-if="message === null">
      <div class="btn-group">
        <button @click="decreaseInternet" class="btn btn-primary me-1">İnternet</button>
        <button @click="decreaseMinutes" class="btn btn-primary me-1">Dakika</button>
        <button @click="decreaseSms" class="btn btn-primary me-1">Sms</button>
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
      remaingData: {
        internet: null,
        minutes: null,
        sms: null,
      },
      userData: null,
      planData: null,
      isLoading: false,
      message: null,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },
  mounted() {},
  methods: {
    async getData() {
      await this.$appAxios
        .get(`/User/GetRemainingUsage?userId=${this.$store.getters._currentUserId}`)
        .then(async (response) => {
          console.log(response);
          this.userData = response.data;
          await this.getEmit();
        })
        .catch((error) => {
          console.log(error);
          this.message = error.response.data;
        });
    },
    async convertData(data) {
      this.remaingData.internet = (this.userData.internet / data.internet) * 100;
      this.remaingData.minutes = parseInt((this.userData.minutes / data.minutes) * 100);
      this.remaingData.sms = parseInt((this.userData.sms / data.sms) * 100);
      this.remaingData.internet = this.remaingData.internet.toFixed(2);
    },
    async getEmit() {
      await this.$emitter.on("planData", (data) => {
        this.planData = data;
        this.convertData(this.planData);
      });
    },
    changeRemaining(data) {
      this.$appAxios
        .put(`/User/ChangeRemainingUsage?userId=${this.$store.getters._currentUserId}`, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    decreaseInternet() {
      this.changeRemaining({ ...this.userData, internet: this.userData.internet - 0.5 });
    },
    decreaseMinutes() {
      this.changeRemaining({ ...this.userData, minutes: this.userData.minutes - 20 });
    },
    decreaseSms() {
      this.changeRemaining({ ...this.userData, sms: this.userData.sms - 10 });
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
};
</script>