<template>
  <navbar />
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2 class="heading1">İletişim</h2>
        <br />
        <h6>
          Parcell ailesi olarak müşteri odaklı hizmet anlayışımız ile müşterilerimizin sorularına en
          hızlı ve açık şekilde cevap vermek, servis kalitemizi ve müşteri memnuniyetini en üst
          düzeyde tutabilmek adına alanında uzman kadromuzla hizmetinizdeyiz.
        </h6>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <p>
        Müşteri hizmetlerimize Parcell hatlarınızdan 532'yi; diğer operatörlerden ve sabit hatlardan
        0 (532) 532 00 00'ı arayarak ulaşabilirsiniz.
      </p>
    </div>

    <div class="panel-body contact-content mb-5">
      <div class="row">
        <div class="col-5" id="contact-address">
          <strong>Kurumsal adresimiz</strong>
          <p>Süleyman Demirel Üniversitesi, Süleyman Demirel Cd., 32260 Çünür, Isparta/Türkiye</p>
        </div>

        <!--The div element for the map -->
      </div>
    </div>
    <br />
  </div>
  <footer-bar />
</template>

<script>
import FooterBar from "../components/Shared/FooterBar.vue";
import Navbar from "../components/Shared/Navbar.vue";
export default {
  data() {
    return {
      center: { lat: 37.83013, lng: 30.5262 },
    };
  },

  components: {
    Navbar,
    FooterBar,
  },

  mounted() {},
};
</script>

<style>
/* Set the size of the div element that contains the map */
#map {
  height: 300px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
  margin-bottom: 10px;
  margin-top: 10px;
  padding-right: 230px;
  border-radius: 15px;
}

#contact-address {
  margin-top: 40px;
  font-size: 16px;
  margin-right: 140px;
  margin-left: 20px;
}
</style>
