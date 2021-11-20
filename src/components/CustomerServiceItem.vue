<template>
  <div class="container mt-4">

    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2 class="heading1">Müşteri Hizmetleri</h2>
        <br />
        <h6>
          Parcell ailesi olarak müşteri odaklı hizmet anlayışımız ile müşterilerimizin sorularına en
          hızlı ve açık şekilde cevap vermek, servis kalitemizi ve müşteri memnuniyetini en üst
          düzeyde tutabilmek adına alanında uzman kadromuzla hizmetinizdeyiz.
        </h6>
      </div>
    </div>
    <!-- <form method="POST" id="contactForm" name="contactForm" class="contactForm">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label" for="name">Ad & Soyad</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Adınız ve Soyadınız"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label" for="email">Email Adresi</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Email Adresiniz"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="label" for="subject">Konu</label>
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Konu"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="label" for="#">Mesaj</label>
            <textarea
              name="message"
              class="form-control"
              id="message"
              cols="30"
              rows="4"
              placeholder="Mesajınız"
            ></textarea>
            <br />
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <input type="submit" value="Gönder" class="btn btn-primary" />
            <div class="submitting"></div>
          </div>
        </div>
      </div>
    </form> -->
    <h6><li> Siz müşterilerimize sunduğumuz hizmetlerimizden bir tanesi de canlı destek! Peki;</li></h6>
    <div class="mt-4">
      <vue-collapsible-panel-group accordion :baseColor="'#482c77'">
        <vue-collapsible-panel :expanded="false">
          <template #title> Canlı Destek Nedir? </template>
          <template #content>
            Canlı Destek, sitemize giren ziyaretçilerimize online olarak erişebilmemizi, iletişim
            kurmamızı sağlayan bir sistemdir. Bu sistem ana sayfamızda, iletişim sayfamızda, müşteri
            hizmetleri sayfamızda ..ufak bir pencere olarak bulunmaktadır. Müşterilerimiz bu alana
            tıklayıp ihtiyaç duyulan bilgileri doldurduğunda müşteri temsilcimize bağlanır.
            Müşterilerimiz ve temsilcilerimiz arasında anlık bir iletişim sağlanır. Sayfanın sağ alt köşesindeki konuşma baloncuğuna tıklayarak hemen sohbeti başlatabilirsiniz!
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    <h6 class="pt-3"><li> Canlı destek sizin için doğru tercih değilse;</li></h6>
    <div class="mt-4">
      <vue-collapsible-panel-group accordion :baseColor="'#482c77'">
        <vue-collapsible-panel :expanded="false">
          <template #title> Bizimle nasıl iletişime geçebilirsiniz? </template>
          <template #content>
            <li> Bir sorunuz varsa öncelikle internet sayfamızın altında yer alan ve her sayfadan erişebileceğiniz sık sorulan sorular sekmesine gidebilir,</li> 
            <li> Herhangi bir şikayetinizi iletmek için talep formunu doldurabilir,</li>
            <li> İletişim sayfamızdan işletme konumumuz hakkında bilgi alabilirsiniz.</li>
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
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
</template>

<script>
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";
import VueCollapsiblePanelGroup from "./VueCollapsiblePanelGroup.vue";

export default {
  components: {
    VueCollapsiblePanel,
    VueCollapsiblePanelGroup,
  },

  mounted() {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/618d36a56885f60a50bb5edd/1fk7pqtml";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },
};
</script>
