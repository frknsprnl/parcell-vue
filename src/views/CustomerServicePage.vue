<template>
	<div class="d-flex flex-column min-vh-100 justify-content-sm-between">
		<div>
			<navbar />
			<customer-service-item />
		</div>
		<footer-bar />
	</div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import CustomerServiceItem from "../components/CustomerServiceItem.vue";

export default {
	components: { Navbar, FooterBar, CustomerServiceItem },
};
</script>
