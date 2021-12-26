<template>
  <div class="container py-5">
    <div class="py-5">
      <div class="container">
        <form class="row g-3 justify-content-center mb-2">
          <div class="col-sm-6">
            <button @click="goBack()" class="btn btn-secondary btn-md mb-3">Geri Dön</button>
            <div class="row">
              <h2 class="mb-3">Kart Bilgileri</h2>
            </div>
            <label for="firstName" class="form-label">Kart Numarası</label>
            <input type="tel" class="form-control" id="firstName" v-cardformat:formatCardNumber />
          </div>
        </form>
        <form class="row g-3 justify-content-center">
          <div class="col-sm-2">
            <label for="stateinf" class="form-label">Ay</label>
            <select class="form-select form-select" aria-label=".form-select-sm example" required>
              <option selected>Seçiniz</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="1">04</option>
              <option value="2">05</option>
              <option value="3">06</option>
              <option value="1">07</option>
              <option value="2">08</option>
              <option value="3">09</option>
              <option value="1">10</option>
              <option value="2">11</option>
              <option value="3">12</option>
            </select>
          </div>

          <div class="col-sm-2">
            <label for="stateinf" class="form-label">Yıl</label>
            <select class="form-select form-select" aria-label=".form-select-sm example" required>
              <option selected>Seçiniz</option>
              <option value="1">2021</option>
              <option value="2">2022</option>
              <option value="3">2023</option>
            </select>
          </div>

          <div class="col-sm-2">
            <label for="CVV" class="form-label">CVV</label>
            <input type="text" class="form-control" id="CVV" maxlength="3" required />
          </div>
        </form>
        <div class="row justify-content-center mt-3">
          <div class="col-sm-6">
            <button class="btn btn-primary btn-md mb-4" id="btn-pay">Ödeme yap</button>
            <vue-collapsible-panel-group accordion :baseColor="'#482c77'">
              <vue-collapsible-panel :expanded="false">
                <template #title> Sözleşmeler ve Formlar </template>
                <template #content>
                  <p>
                    E TİCARET MESAFELİ SATIŞ SÖZLEŞMESİ Madde 1- Taraflar 1.1. Satıcı Adı: Özdisan Elektronik
                    Sanayi ve Ticaret A.Ş. Adresi: DES Sanayi Sitesi 104 Sokak A07 Blok No: 54 - 56 Yukarı
                    Dudullu / Ümraniye / İstanbul - Türkiye Telefon: +902164201882 MERSIS NO:
                    0683-0033-7910-0011 E mail: info@ozdisan.com 1.2. Alıcı Adı – Soyadı: TCK. No: Adresi:
                    Telefon: E-mail: Madde 2- Konu İşbu sözleşmenin konusu, ALICI’ nın SATICI’ ya ait
                    www.ozdisan.com internet sitesinden elektronik ortamda siparişini yaptığı aşağıda
                    nitelikleri ve satış ücreti belirtilen ürünün satışı ve teslimi ile ilgili olarak Türk
                    Ticaret Kanunu, Borçlar Kanunu ve 6502 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve
                    Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve
                    yükümlülüklerinin saptanmasıdır. Alıcı, satıcının isim, unvan, açık adres, telefon ve
                    diğer erişim bilgileri, satışa konu malın temel nitelikleri, vergiler dahil olmak üzere
                    satış fiyatı, ödeme şekli, teslimat koşulları ve masrafları vs. satışa konu mal ile ilgili
                    tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu hakkın nasıl kullanılacağı, şikayet
                    ve itirazlarını iletebilecekleri resmi makamlar vs. konusunda açık, anlaşılır ve internet
                    ortamına uygun şekilde satıcı tarafından bilgilendirildiğini, bu ön bilgileri elektronik
                    ortamda teyit ettiğini ve sonrasında mal sipariş verdiğini is bu sözleşme hükümlerince
                    kabul ve beyan eder. www.ozdisan.com sitesinde yer alan ön bilgilendirme ve alıcı
                    tarafından verilen sipariş üzerine düzenlenen fatura is bu sözleşmenin ayrılmaz
                    parçalarıdır. Madde 3- Sözleşme Konusu Ürün/Ödeme/Teslimat Bilgileri Elektronik ortamda
                    alınan ürün/ürünlerin cinsi
                  </p>
                </template>
              </vue-collapsible-panel>
            </vue-collapsible-panel-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCollapsiblePanelGroup from "@/components/VueCollapsiblePanelGroup.vue";
import VueCollapsiblePanel from "@/components/VueCollapsiblePanel.vue";
export default {
  components: { VueCollapsiblePanelGroup, VueCollapsiblePanel },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

