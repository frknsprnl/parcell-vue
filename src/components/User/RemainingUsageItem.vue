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

  <div class="row border border-danger container">
    <div class="">
      <div class="border border-danger">
        <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
      </div>
      <div>
        <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
      </div>
      <div>
        <ve-progress :progress="50" :size="170" :thickness="15" empty-thickness="15" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remaingData: {
        internet: null,
        voice: null,
        sms: null,
      },
    };
  },
};
</script>