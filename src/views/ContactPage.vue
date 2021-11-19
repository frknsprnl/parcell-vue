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
     

    
<br>  
    <div class="panel-body contact-content mb-3">
      <div class="row d-flex justify-content-center">
        <div class="col-4" id="contact-address">
          <strong>Kurumsal adresimiz</strong>
          <p>Süleyman Demirel Üniversitesi, Süleyman Demirel Cd., 32260 Çünür, Isparta/Türkiye</p>
        </div>
        <div class="col-4">
          <div class="mapouter"><div class="gmap_canvas"><iframe class="rounded-3" width="450" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=Isparta%20S%C3%BCleyman%20Demirel%20M%C3%BChendislik&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div></div>
        </div>
        <!--The div element for the map -->
      </div>
    </div>
    <br />
    <div class="d-flex justify-content-center">
      <tr>
        <td>
          <strong>
            <i class="bi-telephone-fill" style="color: #666690"></i>
            İletişim No.
          </strong>
        </td>
      </tr>
    </div>
    <div class="d-flex justify-content-center">
      <p>
        Müşteri hizmetlerimize Parcell hatlarınızdan 532'yi; diğer operatörlerden ve sabit hatlardan
        0 (532) 532 00 00'ı arayarak ulaşabilirsiniz.
      </p>
    </div>
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

<style type="application/javascript">
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
.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:450px;}
.mapouter{position:relative;text-align:right;height:250px;width:450px;}
#contact-address {
  margin-top: 40px;
  font-size: 16px;
  margin-right: 140px;
  margin-left: 20px;
}
</style>
