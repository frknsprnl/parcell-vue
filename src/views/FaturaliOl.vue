<template>
  <navbar />
  <section class="gradient-custom d-flex justify-content-center pt-2">
    <div class="container row col-12 py-4">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 15px">
            <div class="card-body p-4 p-md-5">
              <figure class="text-center mb-5">
                <blockquote class="blockquote">
                  <h1>Faturalı Ol</h1>
                </blockquote>
              </figure>

              <div class="row justify-content-center mt-4">
                <div class="col-6 mb-3">
                  <input type="text" class="form-control text-center" v-model="nameSurname" disabled />
                </div>
              </div>
              <ul class="list-group list-unstyled row card mt-4">
                <h3 class="text-center mt-1">Paketler</h3>
                <li class="row justify-content-center align-items-center mt-3">
                  <div
                    class="img-cont d-flex justify-content-center align-items-center"
                    v-for="plan in plan"
                    :key="plan.id"
                    @click="openPlanSwal(plan)"
                  >
                    <img class="img-fluid rounded-start" :src="require('@/assets/' + plan.image)" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="form-check ms-1">
              <div class="ms-1" v-if="selectedPlan !== null">
                <h5 class="text-danger">
                  <span class="me-2">Seçilen Paket : </span> {{ selectedPlan.planName }}
                  <span class="ms-2">{{ selectedPlan.price }} ₺</span>
                </h5>
              </div>
              <div class="ms-1 d-flex align-items-center">
                <h5 class="me-2">Taahhüt Süresi</h5>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input
                    @click="setContractTime('6 Ay')"
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    checked
                  />
                  <label class="btn btn-outline-primary" for="btnradio1">6 Ay</label>

                  <input
                    @click="setContractTime('12 Ay')"
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                  />
                  <label class="btn btn-outline-primary" for="btnradio2">12 Ay</label>
                </div>
              </div>
              <input
                type="checkbox"
                class="form-check-input ms-1"
                v-model="userAggrement"
                id="trasferDoc1"
                @blur="v$.userAggrement.$touch()"
                :class="{
                  'is-invalid': v$.userAggrement.$error,
                }"
              />
              <label class="form-check-label ms-2" for="transferDoc1 ">
                <span @click="openContractSwal()" class="link-primary text-decoration-underline"
                  >Faturalı Ol</span
                >
                sözleşmesini kabul etmek için işaretleyin.
              </label>
            </div>

            <br />
            <div class="d-flex justify-content-center">
              <button @click="postData()" type="button" class="btn btn-primary">Şimdi Faturalı Ol</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-bar />
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, helpers } from "@vuelidate/validators";
const acceptLicense = (value) => (!helpers.req(value) || !value ? false : true);
export default {
  components: { Navbar, FooterBar },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      user: null,
      isLoading: false,
      plan: null,
      nameSurname:
        "Sn. " + this.$store.getters._getCurrentUser.name + " " + this.$store.getters._getCurrentUser.surname,
      userAggrement: null,
      selectedPlan: null,
      contractTime: "6 Ay",
    };
  },
  validations() {
    return { userAggrement: { required, acceptLicense } };
  },

  async created() {
    this.user = await this.$store.getters._getCurrentUser;
    this.isLoading = true;
    await this.getData();
    this.isLoading = false;
    console.log(this.getValue);
  },

  methods: {
    async getData() {
      this.$appAxios
        .get(`/Plan/GetInvoicePlans`)
        .then((response) => {
          console.log(response);
          this.plan = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postData() {
      this.v$.$validate();
      const userId = this.$store.getters._currentUserId;
      if (!this.v$.$error) {
        if (this.selectedPlan !== null) {
          this.$swal
            .fire({
              title: "Dikkat",
              icon: "warning",
              text: "Faturalı Hatta Geçmek Üzeresiniz Emin Misiniz ?",
              showConfirmButton: true,
              showDenyButton: true,
              confirmButtonText: "Eminim",
              denyButtonText: "İptal",
            })
            .then((response) => {
              if (response.isConfirmed) {
                this.$swal.close();
                this.$swal.fire({
                  title: "Lütfen Bekleyin",
                  didOpen: () => {
                    this.$swal.showLoading();
                  },
                });
                this.$appAxios
                  .post(
                    `Invoice/AddInvoice?userId=${userId}&planId=${this.selectedPlan.id}&contractTime=${this.contractTime}`
                  )
                  .then((response) => {
                    console.log(response);
                    this.$swal.close();
                    this.$swal.fire({
                      title: "İşlem Tamamlandı.",
                      icon: "success",
                      html: "<br/>",
                      showConfirmButton: true,
                      showDenyButton: true,
                      confirmButtonText: "Ana Sayfa",
                      denyButtonText: "Paket Görüntüle",
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                    this.$swal.close();
                    this.$swal.fire({
                      title: "İşlem Başarısız.",
                      icon: "error",
                      html: `<br/> <p>${error}</p>`,
                      showConfirmButton: true,
                      confirmButtonText: "Ana Sayfa",
                    });
                  });
              }
            });
        } else {
          this.$swal.fire({
            title: "Hata",
            icon: "error",
            text: "Lütfen Paket Seçin!",
            confirmButtonText: "Tamam",
          });
        }
      }
    },
    openPlanSwal(data) {
      this.$swal
        .fire({
          title: data.planName,
          // imageUrl: `src/assets/${data.image}`,
          imageUrl: require("@/assets/" + data.image),
          imageWidth: 300,
          imageHeight: 200,
          imageAlt: "Custom image",
          html: `
         <div class="">
              <ul class="list-unstyled" id="planlist">
                <li>
                  <i class="bi bi-globe me-2 " style="font-size: 1.15rem;"> </i>
                  <span class="me-5 " style="font-size: 1.15rem;"> ${data.internet} GB</span>
                </li>
                <li style="font-size: 1.15rem;">
                  <i class="bi bi-telephone me-2" style=" margin-left : 1rem;font-size: 1.15rem;"> </i>
                  <span class="me-5" style="font-size: 1.15rem;"> ${data.minutes} DK</span>
                </li>
                <li>
                  <i class="bi bi-envelope me-2" style=" margin-left : 0.2rem;"> </i>
                  <span class="me-4" style="font-size: 1.15rem;"> ${data.sms} SMS</span>
                </li>
              </ul>
            </div>
            <div class="m-4">
              <h1>${data.price} ₺</h1>
            </div>
          `,
          showCloseButton: true,
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: "Seç",
          denyButtonText: "Kapat",
        })
        .then((response) => {
          if (response.isConfirmed) {
            this.selectedPlan = data;
          }
        });
    },
    openContractSwal() {
      this.$swal.fire({
        title: "Sözleşme",
        html: `<div class="overflow-scroll" style="width : 55rem; height: 20rem">
              <div class="flex-wrap">
                MADDE 1 – (1) Bu Yönetmeliğin amacı; abonelik sözleşmelerine ilişkin uygulama usul ve
                esaslarını düzenlemektir. Kapsam MADDE 2 – (1) Bu Yönetmelik, tüketicinin belirli bir mal veya
                hizmeti sürekli veya düzenli aralıklarla edinmesini sağlayan her türlü abonelik sözleşmesini
                kapsar. (2) Elektrik, su, doğal gaz ve elektronik haberleşme sektörü dışındaki abonelik
                sözleşmelerine bu Yönetmeliğin yalnızca 5 inci, 6 ncı, 7 nci, 8 inci, 13 üncü, 22 nci, 23
                üncü, 24 üncü ve 25 inci maddeleri uygulanır. Dayanak MADDE 3 – (1) Bu Yönetmelik, 7/11/2013
                tarihli ve 6502 sayılı Tüketicinin Korunması Hakkında Kanunun 52 nci ve 84 üncü maddelerine
                dayanılarak hazırlanmıştır. Tanımlar MADDE 4 – (1) Bu Yönetmeliğin uygulanmasında; a) Abonelik
                sözleşmesi: Tüketicinin belirli bir mal veya hizmeti sürekli veya düzenli aralıklarla
                edinmesini sağlayan sözleşmeyi, b) Bakan: Gümrük ve Ticaret Bakanını, c) Elektronik
                haberleşme: 5/11/2008 tarihli ve 5809 sayılı Elektronik Haberleşme Kanununda yer alan tanımı,
                ç) Gecikme zammı oranı: 21/7/1953 tarihli ve 6183 sayılı Amme Alacaklarının Tahsil Usulü
                Hakkında Kanunun 51 inci maddesine göre belirlenen oranı, d) Hizmet: Bir ücret veya menfaat
                karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici
                işleminin konusunu, e) Kalıcı veri saklayıcısı: Tüketicinin gönderdiği veya kendisine
                gönderilen bilgiyi, bu bilginin amacına uygun olarak makul bir süre incelemesine elverecek
                şekilde kaydedilmesini ve değiştirilmeden kopyalanmasını sağlayan ve bu bilgiye aynen
                ulaşılmasına imkân veren kısa mesaj, elektronik posta, internet, disk, CD, DVD, hafıza kartı
                ve benzeri her türlü araç veya ortamı, f) Kanun: 6502 sayılı Tüketicinin Korunması Hakkında
                Kanunu, g) Mal: Alışverişe konu olan; taşınır eşya, konut veya tatil amaçlı taşınmaz mallar
                ile elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri her türlü
                gayri maddi malları, ğ) Sağlayıcı: Kamu tüzel kişileri de dahil olmak üzere ticari veya
                mesleki amaçlarla tüketiciye hizmet sunan ya da hizmet sunanın adına ya da hesabına hareket
                eden gerçek veya tüzel kişiyi, h) Satıcı: Kamu tüzel kişileri de dahil olmak üzere ticari veya
                mesleki amaçlarla tüketiciye mal sunan ya da mal sunanın adına ya da hesabına hareket eden
                gerçek veya tüzel kişiyi, ı) Tüketici: Ticari veya mesleki olmayan amaçlarla hareket eden
                gerçek ya da tüzel kişiyi, ifade eder. İKİNCİ BÖLÜM Sözleşmenin Şekli ve İçeriği Sözleşmenin
                şekli MADDE 5 – (1) Satıcı veya sağlayıcı, sunulan mal veya hizmete ilişkin olarak tüketici
                ile bir abonelik sözleşmesi kurmak zorundadır. Yazılı veya mesafeli olarak kurulan abonelik
                sözleşmelerinin bir örneğinin kâğıt üzerinde veya kalıcı veri saklayıcısı ile tüketiciye
                verilmesi zorunludur. (2) Abonelik sözleşmeleri; en az on iki punto büyüklüğünde,
                anlaşılabilir bir dilde, açık, sade ve okunabilir bir şekilde düzenlenir. Sözleşmenin zorunlu
                içeriği MADDE 6 – (1) Abonelik sözleşmelerinde aşağıdaki bilgilerin yer alması zorunludur: a)
                Tüketici ile satıcı veya sağlayıcının isim, unvan, açık adres, telefon ve varsa MERSİS
                numarası ile diğer iletişim bilgileri, b) Sözleşmenin konusu ve varsa süresi, c) Sözleşmenin
                düzenlendiği tarih, ç) Malın ilk teslim tarihi veya hizmetin ifasına başlama tarihi, d) Mal
                veya hizmetin tüm vergiler dahil toplam fiyatı, e) Sözleşme konusu mal veya hizmet bedelinin
                bir tarife üzerinden hesaplanması durumunda; tüketici tarafından seçilen tarifenin adı,
                içeriği ve sözleşmenin düzenlendiği tarihteki birim tüketim bedeli ile tüketim dönemi, f)
                Fatura bedelinin süresi içerisinde ödenmemesi durumunda, hizmet sunumunun ne şekilde ve ne
                kadar süre içerisinde durdurulabileceğine; fatura bedelinin sonradan ödenmesi durumunda ise
                hizmet sunumunun ne şekilde ve ne kadar süre içerisinde başlatılacağına ilişkin bilgi, g) Mal
                veya hizmetin temini için abonenin kullanımına sunulan sayaç, modem ve benzeri cihazların
                değişiminin yasal yükümlülüklere uygun olarak yapılabileceğine ilişkin bilgi, ğ) Sözleşme
                konusu mal veya hizmet sunumunun mücbir sebeplerle kesintiye uğrayabileceği belirtilmişse bu
                sebeplerin neler olduğuna ilişkin bilgi, h) Satıcı veya sağlayıcının kusurundan kaynaklanan
                nedenlerle sözleşmede belirtilen nitelikte mal veya hizmet sunulamaması halinde tüketicinin,
                Kanunun 11 inci veya 15 inci maddelerinde yer alan haklarına ilişkin bilgi, ı) Sayaç ve
                benzeri ölçüm cihazlarının kullanıldığı durumlarda, bu cihazlarda meydana gelen arızalar
                nedeniyle belli bir süreyle tüketim miktarının hiç veya doğru şekilde tespit edilememesi
                halinde, söz konusu süre için tüketim miktarının ne şekilde tespit edileceğine ilişkin bilgi,
                i) Tüketiciye sunulan mal veya hizmetin bedeli dışında tüketiciden ilgili mevzuat gereği
                tahsil edilmesi zorunlu bedeller söz konusu ise, bu bedellerin neler olduğu ile bunların
                sözleşmenin düzenlendiği tarihteki tutarı ve değişmesi durumunda yeni tutarların tüketiciye ne
                şekilde bildirileceğine ilişkin bilgi,
              </div>
            </div>`,
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "Tamam",
        denyButtonText: "Kapat",
      });
    },
    setContractTime(data) {
      this.contractTime = data;
    },
  },
  computed: {},
};
</script>

<style scoped>
#planlist > li > span {
  font-size: 1.15rem;
}
.img-cont {
  background-size: 12rem 12rem;
  width: 14rem;
  height: 12rem;
  resize: none;
  background-repeat: no-repeat;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.img-cont:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
  /* box-shadow: 0 22px 43px rgba(0, 0, 0, 0.32); */
  cursor: pointer;
  border-radius: 5px;
}
</style>
