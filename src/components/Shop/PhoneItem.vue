<template>
  <section class="mt-2 mb-2">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <load-animation class="m-3" v-if="getLoadingStatus" />
        <div v-if="!getLoadingStatus" class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
            <div class="card-body p-4 p-md-5">
              <div class="mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      :src="require(`@/assets/${deviceData.imageDirectory}`)"
                      class="img-fluid rounded-start"
                      alt="Samsung tablet"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ deviceData.name }}</h5>

                      <p class="card-text">
                        <small class="text-muted-">{{ deviceData.price }} TL</small>
                      </p>

                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Özellikler</th>
                            <th scope="col">{{ deviceData.name }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ekran boyutu</th>
                            <td>{{ phoneData.screenSize }}</td>
                          </tr>
                          <tr>
                            <th scope="row">İşlemci modeli</th>
                            <td>{{ phoneData.proccessor }}</td>
                          </tr>
                          <tr>
                            <th scope="row">Ram</th>
                            <td>{{ phoneData.ram }}</td>
                          </tr>
                          <tr>
                            <th scope="row">Kamera Çözünürlük</th>
                            <td>{{ phoneData.camera }}</td>
                          </tr>
                          <tr>
                            <th scope="row">Ağırlık</th>
                            <td>{{ phoneData.weight }}</td>
                          </tr>
                          <tr>
                            <th scope="row">Depolama Alanı</th>
                            <td>{{ phoneData.memory }}</td>
                          </tr>

                          <tr>
                            <th scope="row">Batarya Kapasitesi</th>
                            <td>{{ phoneData.battery }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import LoadAnimation from "../Shared/LoadAnimation.vue";
export default {
  components: { LoadAnimation },
  data() {
    return {
      phoneData: null,
      isLoading: false,
    };
  },

  props: {
    deviceData: {
      type: Object,
      required: true,
    },
  },

  async created() {
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
  },

  methods: {
    async getData() {
      await this.$appAxios
        .get(`/DeviceDetails/GetPhoneDetail?deviceId=${this.deviceData.id}`)
        .then((response) => {
          console.log(response);
          this.phoneData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    getLoadingStatus: function () {
      return this.isLoading;
    },
  },
};
</script>
