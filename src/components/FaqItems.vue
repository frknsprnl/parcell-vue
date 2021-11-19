<template>
	<vue-collapsible-panel :expanded="false" bg-color-body="#4c3a6e">
		<template #title>
			Mobil haberleşme hizmetlerinde abonelik tesis ederken dikkat etmem
			gereken hususlar nelerdir?
		</template>
		<template #content>
			Abonelik sözleşmesi imzalamadan önce abonelik sözleşmesindeki hak ve
			yükümlülüklerinizi dikkatlice okumanız, sözleşmenin ilk sayfasında
			bulunan abone tercihlerini işaretlemeniz, girilen kişisel
			bilgilerinizin doğruluğundan emin olmanız gerekmektedir. Özellikle
			seçmiş olduğunuz tarifenin isminin doğru bir şekilde abonelik
			sözleşmesine yazıldığından emin olunuz. Sözleşmenin imzalı bir
			suretini almayı unutmayınız!</template
		>
	</vue-collapsible-panel>
	<vue-collapsible-panel :expanded="false">
		<template #title> Aboneliğimi nasıl iptal edebilirim? </template>
		<template #content>
			Abonesi olduğunuz işletmeciye talebinizi, kimliğinizi ispatlayıcı
			belge ile birlikte yazılı olarak bildirmek veya işletmecinin faks
			numarasına imzalı olarak göndermek suretiyle sözleşmenizi sona
			erdirebilirsiniz. İşletmeci, yazılı talebin kendisine ulaşmasından
			itibaren; 24 saat içerisinde talebinizin alındığı bilgisini iletişim
			adresine iletmek zorundadır. Ayrıca işletmeci 7 gün içerisinde fesih
			talebini yerine getirerek posta, elektronik posta, kısa mesaj ya da
			arama yöntemlerinden birini kullanarak abonelik sözleşmesinin
			feshedildiğini tarafınıza bildirmekle yükümlüdür.
		</template>
	</vue-collapsible-panel>
	<vue-collapsible-panel :expanded="false">
		<template #title>
			Tarife ücreti değişikliği durumunda yapılması gerekenler?
		</template>
		<template #content>
			Tarife değişikliği yürürlüğe girmeden makul bir süre önce
			işletmeciler tarife değişikliğini abonelere SMS, arama ve/veya posta
			ile (faturada değişiklik belirtilebilmektedir) duyurmakla
			yükümlüdür. Bu nedenle işletmeciler tarafından SMS, telefon veya
			posta yoluyla yapılan bilgilendirmelerin dikkate alınması önem arz
			etmektedir.
		</template>
	</vue-collapsible-panel>
	<vue-collapsible-panel :expanded="false">
		<template #title>
			Kullanım miktarı sınırlı hizmetlerde paket, kota aşımı yapmamam için
			bilgilendirilme nasıl yapılmaktadır?
		</template>
		<template #content>
			Ses, SMS, internet (veri) ve benzeri hizmetlerin sunulduğu kullanım
			miktarı sınırlı (100 dk, 500 SMS veya 4GB vb.) hizmet kullanan
			aboneler, kullanım miktarının %80 ve %100 sınırına ulaşılması
			durumunda asgari olarak kısa mesaj ile bilgilendirilmektedirler.
			Ayrıca, aboneler tarafından kullanım miktarı sınırlı paketlerin ne
			kadarlık kısmının kullanıldığı bilgisi işletmecilerin internet
			sitelerinin online işlemler menüsünden veya SMS göndermek suretiyle
			ücretsiz olarak sorgulanabilmektedir. Söz konusu bilgilere
			işletmecinin müşteri hizmetlerinden de ulaşılabilmektedir.</template
		>
	</vue-collapsible-panel>
	<vue-collapsible-panel :expanded="false">
		<template #title>
			Onayım olmadan katma değerli hizmet satın aldığım gerekçesi ile
			hattıma ücret yansıtılmış. Ne yapmalıyım?
		</template>
		<template #content>
			Talebiniz ya da onayınız olmadan söz konusu hizmete üyelik
			yapıldığını düşünüyorsanız, mobil cihazınızı sadece sizin
			kullandığınızdan, SMS, wap vb. bir yöntemle ücret ve abonelik ile
			ilgili bir onay vermemiş olduğunuzdan veya hattınızı kullanan başka
			birinin (yakınlarınız gibi) hizmete üyelik yapmadığından emin
			olduktan sonra, şikâyetiniz için hizmet aldığınız işletmeciye
			başvurabilirsiniz. İşletmeciler tarafından sorunun çözülmediği
			takdirde yasal yollara başvurabilirsiniz.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Taahhütlü tarife nedir ve neden tercih edilmeli ya da edilmemelidir?
		</template>
		<template #content>
			<p>
				Taahhütlü tarifeler, belirli bir tarifede belirli bir süre için
				aboneliğinizi devam ettirmeniz veya belirlenen koşulları
				sağlamanız halinde bazı avantajlar sağlayan tarifelerdir. Bu
				nedenle taahhütlü tarifeleri seçerken;
			</p>
			<p>Taahhüt dönemi boyunca ilgili hizmet ihtiyacınızı,</p>
			<p>
				Taşınma ihtimalinizin olup olmadığını, mümkünse taşınacağınız
				bölgede işletmecinizin altyapısının bulunup bulunmadığını,
			</p>
			<p>
				Taahhüt bulunmayan tarifelere göre seçmeyi düşündüğünüz
				taahhütlü tarifenin avantaj ve dezavantajlarını değerlendirerek
				karar vermeniz uygun olacaktır.
			</p>
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Taahhütlü tarife aboneliğimi istediğim zaman sonlandırabilir miyim?
		</template>
		<template #content>
			Taahhüdünüzü istediğiniz zaman sonlandırabilirsiniz. Ancak
			süresinden önce taahhütlü sözleşmenizden caymanız halinde
			işletmeciler; taahhüde aykırılığın oluştuğu döneme kadar aboneye
			sağlanan indirim, cihaz veya sağlanan diğer faydaların bedelleri ile
			kampanya taahhütnamesi kapsamında belirlenen aylık tarife bedelinin
			taahhüt süresi bitimine kadar kalan aylara ilişkin ücretlerin toplam
			bedelini karşılaştırarak, abone açısından daha avantajlı olan
			tutarı, cayma bedeli olarak faturanıza yansıtabilmektedir.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title> Adresime fatura gelmiyor. Ne yapmalıyım? </template>
		<template #content>
			İşletmeciler abonelerine basılı fatura göndermekle yükümlüdür.
			Ancak, abonenin talebi veya onayı ile basılı fatura yerine
			elektronik ortamda da fatura gönderilebilir. Bununla birlikte,
			faturalarınızın adresinize ulaşmaması halinde, abonesi olduğunuz
			işletmecideki adres bilginizin doğru olup olmadığını kontrol
			etmenizde fayda görülmektedir.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			İşletmecilerin ayrıntılı fatura için ücret talep etmeleri uygun
			mudur?
		</template>
		<template #content>
			<p>Ayrıntılı faturanın;</p>
			<p>
				basılı olarak talep edilmesi durumunda işletmeciler tarafından
				ücretli veya ücretsiz şekilde,
			</p>
			<p>
				elektronik ortamda talep edilmesi durumunda ise ücretsiz bir
				şekilde aboneye sunulması gerekmektedir.
			</p>
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Faturam tarifemde belirtilen tutardan fazla geldi. Ne yapmalıyım?
		</template>
		<template #content>
			Faturanıza hangi ücretlerin yansıtıldığı bilgisini, hizmet aldığınız
			işletmecinin internet sitesinde yer alan online işlemler menüsünden
			(asgari 3 aylık kullanım detayları yer almaktadır) sorgulayarak ya
			da müşteri hizmetlerini arayarak öğrenebilirsiniz. Halen söz konusu
			fatura tutarının fazla olduğunu düşünüyorsanız işletmecinize
			başvurabilirsiniz. Başvurunuz neticesinde, sorunun işletmeciniz
			tarafından çözülmediğini değerlendirmeniz halinde yasal yollara
			başvurabilirsiniz.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Yurt dışı seyahatlarimde mobil hattımı kullanırken dikkat etmem
			gereken hususlar nelerdir?
		</template>
		<template #content>
			Mobil hattınızı yurt dışında kullanabilmek için hattınızın
			uluslararası dolaşım hizmetine (roaming) açık olması gerekmektedir.
			Ancak, yurt dışında iken arama yapmanın yanında aranmanın da ücrete
			tabi olması, yurt dışındaki arama/aranma ve veri kullanım (internete
			erişim) ücretlerinin, ülkeden ülkeye değişebilmekle birlikte, yurt
			içindeki aynı hizmetlere göre daha yüksek olması sebebiyle,
			işletmecinizin internet sitesinden, müşteri hizmetlerinden temin
			edebileceğiniz veya yurt dışına gittiğiniz ülkede tarafınıza SMS ile
			gönderilen yurt dışı ücretlerini göz önünde bulundurarak kullanım
			yapmanızda fayda görülmektedir. Ayrıca herhangi bir talebe gerek
			olmaksızın uluslararası mobil veri dolaşım (roaming) hizmetinden
			yararlanan abonelere, veri (data) kullanım tutarları 100 TL ve 250
			TL’ye ulaştığında işletmeciler tarafından bilgilendirilme
			yapılmaktadır.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Cihazımın diğer ülke şebekelerine bağlanmaması için ne yapmalıyım?
		</template>
		<template #content>
			Hattınız uluslararası dolaşım hizmetine (roaming) açılmadığı
			müddetçe diğer ülke şebekelerinde kullanılamayacaktır. Ancak hattın
			uluslararası dolaşım hizmetine açık olması durumunda kıyı veya sınır
			bölgelerimizde bulunan vatandaşlarımızın yurt dışındaki
			işletmecilerin şebekesi üzerinden hizmet alma ve bu durumda
			uluslararası dolaşım tarifesi üzerinden ücretlendirilerek yüksek
			faturalar ile karşılaşma ihtimalleri bulunmaktadır. Bu durum ile
			karşılaşmamak için; hizmet aldığınız işletmeci ile irtibata geçerek
			hattınızı uluslararası dolaşım hizmetine kapalı hale getirebilir
			veya mobil cihazınızın ayarlar menüsünden, kendi mobil operatörünüzü
			(ağ operatörleri/operatörler) manuel olarak seçerek yurt dışından
			hizmet veren şebekeye otomatik geçiş yapılmasını
			engelleyebilirsiniz.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title> 444'lü numaraları aramanın ücreti nedir? </template>
		<template #content>
			444’lü numaralara doğru yapılan aramalarda; abonenin mevcut
			tarifesinde yer alan sabit hatlara doğru yapılan aramalardaki
			ücretlendirmeden farklı bir ücretlendirme yapılmamaktadır.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title> Güvenli internet hizmeti nedir? </template>
		<template #content>
			Güvenli İnternet Hizmeti, talebiniz doğrultusunda işletmeciniz
			tarafından ücretsiz olarak sunulan, Çocuk Profili ve Aile Profili
			olmak üzere iki seçenekten oluşan ve internet ortamındaki zararlı
			içeriklerden internet kullanıcılarını büyük oranda koruyan
			alternatif bir güvenlik hizmetidir. Güvenli İnternet Hizmetinden
			yararlanabilmek için, internet erişiminizi sağlayan işletmecinin
			bayisi, çağrı merkezi, kısa mesaj servisi (SMS), online işlem
			merkezinden herhangi birine başvurarak söz konusu hizmeti
			etkinleştirilebilir, istediğiniz zaman profilleri değiştirilebilir
			ya da profilleri devre dışı bırakabilirsiniz. Konuya ilişkin detaylı
			bilgi www.guvenlinet.org adresinde yer almaktadır.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Numaramı değiştirmeden hizmet aldığım işletmeciyi değiştirebilir
			miyim?
		</template>
		<template #content>
			Numaranızı değiştirmeden işletmecinizi değiştirebilmeniz için,
			öncelikle abonesi olmak istediğiniz yeni işletmeciye "numara taşıma"
			talebinde bulunmanız ve ilgili formları doldurarak taşıma işleminin
			gerçekleşmesinden itibaren geçerli olacak şekilde abonelik
			sözleşmesi imzalamanız gerekmektedir. Konuya ilişkin ayrıntılı
			bilgiye http://www.nts.gov.tr/ internet adresinden sitesinden
			ulaşabilirsiniz.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Adıma kayıtlı hat sayısını nasıl öğrenebilirim?
		</template>
		<template #content>
			Aboneler, https://hat-sorgulama.btk.gov.tr internet adresinden
			gerekli bilgileri girerek üzerlerine kayıtlı aktif hatları
			öğrenebilmektedirler. Ayrıca herhangi bir aboneliği bulunmayan
			vatandaşlar da üzerlerine kayıtlı hatlara ilişkin bilgiyi e-Devlet
			üzerinden öğrenebilmektedirler.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Engelliler için sunulan hizmetler nelerdir?
		</template>
		<template #content>
			<p>
				Bilgi Teknolojileri ve İletişim Kurulu tarafından yapılan
				düzenlemeler kapsamında;
			</p>
			<ul>
				<li>
					Talep eden görme engellilerin abonelik sözleşme ve
					faturalarının "Braille" ya da sesli anons şeklinde sunulması
				</li>
				<br />
				<li>
					Tarifelerde ve hizmetin sunum koşullarında meydana gelen tüm
					değişikliklerin talep eden abonelere sesli mesaj olarak
					gönderilmesi
				</li>
				<br />
				<li>
					Engelli tüketicilere yönelik makul ölçüde ekonomik
					avantajlar ihtiva eden tarife ve kampanyalar sunulması
				</li>
				<br />
				<li>
					Internet sitelerinin engelli abonelerin yararlanabileceği
					şekilde erişilebilirliğinin sağlanması
				</li>
				<br />
				<li>
					Engellilere yönelik olarak sunulan tüm hizmetlerin internet
					sayfası üzerinde tek başlık altında toplanarak engelli
					tüketicilerin bilgiye erişimlerinin kolaylaştırılması
				</li>
				<br />
				<li>
					Talep eden abonelere ücretsiz sesli konum bilgisi verilmesi
				</li>
				<br />
				<li>
					Engelli abonenin konum bilgisinin, engelli abonenin talebi
					doğrultusunda asgari (1) telefon numarası tarafından da
					ücretsiz olarak (farklı operatörler arasında yapılacak
					sorgulamalarda yansıyabilecek kısa mesaj veya arama
					ücretleri hariç) öğrenilebilmesinin sağlanması
				</li>
				<br />
				<li>
					Talep eden abonelere fatura ve kota dolum bilgilerinin sesli
					mesaj olarak gönderilmesi
				</li>
				<br />
				<li>
					Abonenin talebi doğrultusunda "Aradığınız kişi işitme
					engellidir" bilgisinin ücretsiz olarak sunulması
				</li>
				<br />
				<li>
					Ses hizmetinden bağımsız olarak sadece SMSm veya sadece data
					paketi hizmeti sunulması gerekmektedir
				</li>
			</ul>
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Mobil telefon cihazı alırken nelere dikkat edilmelidir?
		</template>
		<template #content>
			<p>
				Mobil telefon cihazı alırken aşağıdaki hususlarına dikkat
				edilmesinde fayda görülmektedir.
			</p>
			<ul>
				<li>Satın alınacak cihazın ambalajının açılmamış olması</li>
				<li>
					Cihazın markası, modeli ve seri numarası veya IMEI
					numarasının faturada belirtilmiş olması ve faturanın
					muhafaza edilmesi
				</li>
				<li>Cihazda"CE" işaretinin varlığının kontrol edilmesi</li>
				<li>Türkçe kullanım kılavuzu olan cihazların satın alınması</li>
				<li>
					Garanti belgesinin satıcı tarafından tasdik edilip
					edilmediğinin kontrol edilmesi
				</li>
				<li>
					Satış sonrası montaj, bakım ve onarım hizmetleri ve yetkili
					servislere ilişkin bilgi alınması
				</li>
			</ul>
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Cihazımın ayıplı (kusurlu) olduğunu anlamam durumunda ne
			yapabilirim?
		</template>
		<template #content>
			<p>
				Cihazın ayıplı (kusurlu) olduğunun anlaşılması (teknik servis
				tarafından tespit edilmesi) durumunda;
			</p>
			<ul>
				<li>
					Satılanı geri vermeye hazır olduğunu bildirerek sözleşmeden
					dönme
				</li>
				<li>
					Satılanı alıkoyup ayıp oranında satış bedelinden indirim
					isteme
				</li>
				<li>
					Aşırı bir masraf gerektirmediği takdirde, bütün masrafları
					satıcıya ait olmak üzere satılanın ücretsiz onarılmasını
					isteme
				</li>
				<li>
					İmkân varsa, satılanın ayıpsız bir misli ile
					değiştirilmesini isteme,seçimlik haklarından birini
					kullanabilirsiniz. Satıcının yukarıda yer alan yükümlülüğünü
					yerine getirmemesi halinde yasal yollara başvurabilirsiniz
				</li>
			</ul>
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Yurt dışından cihaz aldım ve Türkiye’de kullanmak istiyorum. Ne
			yapmalıyım?
		</template>
		<template #content>
			Mobil işletmeciler tarafından hizmet verilen elektronik kimlik
			bilgisine (IMEI) sahip cihazların Türkiye’de kullanılabilmesi için
			kayıt altına alınmaları gerekmektedir. Cihaz kayıt işlemleri
			e-Devlet şifresi ile www.turkiye.gov.tr internet adresinden
			yapılabilmektedir. Cihaz kayıt işlemi için ödenmesi gereken ücretler
			dâhil ayrıntılı bilgiye "Mobil Cihazların Kayıt Altına Alınması ile
			İlgili Sıkça Sorulan Sorular" rehberinden/bağlantısından
			ulaşabilirsiniz.
		</template>
	</vue-collapsible-panel>

	<vue-collapsible-panel :expanded="false">
		<template #title>
			Cihazımı kaybettim/çaldırdım. Ne yapmam gerekir?
		</template>
		<template #content>
			Mobil cihazların sahibinin rızası dışında elden çıkması durumlarında
			tüketiciler, cihazlarının hizmet almasını engellemek için, e-Devlet
			üzerinden veya Bilgi Teknolojileri ve İletişim Kurumunun (BTK) Bilgi
			ve İhbar Merkezinin "120" numaralı telefonunu aramak sureti ile
			haftanın 7 günü 24 saat (7/24) ihbarda bulunabilirler. Ayrıca,
			tüketicinin hizmet aldığı işletmeciyi arayarak hattını kullanıma
			kapatmasında da fayda görülmektedir. Kayıp çalıntı cihazlarla ilgili
			ayrıntılı bilgiye "Kayıp/Çalıntı Mobil Cihazlarla İlgili Sıkça
			Sorulan Sorular" rehberinin yer aldığı https://tuketici.btk.gov.tr
			bağlantısından ulaşabilirsiniz.
		</template>
	</vue-collapsible-panel>
</template>

<!--
<script>
import { defineComponent } from "@vue/composition-api";
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";

export default defineComponent({
	setup() {},
});
</script>
-->

<script>
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";
export default {
	components: {
		VueCollapsiblePanel,
	},
};
</script>
