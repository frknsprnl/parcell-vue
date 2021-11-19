<template>
<navbar />
    <div id="googleForm" class="d-flex justify-content-center">
        
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd9wria5cr3EYOpMJRRaagHsdt3_kmULuYi7iQ2_xZqiW-B9w/viewform?embedded=true"
        width="640"
        height="1400"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Yükleniyor…</iframe
      >
    </div>
    <footer-bar />
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";

export default {
	components: { Navbar, FooterBar },
};
</script>