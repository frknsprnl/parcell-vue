<template>
	<div class="d-flex flex-column min-vh-100 justify-content-sm-between">
		<div>
			<navbar />
			<div class="container">
				<div class="mt-5">
					<vue-collapsible-panel-group
						accordion
						:baseColor="'#482c77'"
					>
						<faq-items />
					</vue-collapsible-panel-group>
				</div>
			</div>
		</div>
		<footer-bar />
	</div>
</template>

<script>
import Navbar from "../components/Shared/Navbar.vue";
import FooterBar from "../components/Shared/FooterBar.vue";
import FaqItems from "../components/FaqItems.vue";
import VueCollapsiblePanelGroup from "../components/VueCollapsiblePanelGroup.vue";
export default {
	components: {
		Navbar,
		FooterBar,
		FaqItems,
		VueCollapsiblePanelGroup,
	},
};
</script>

<style></style>
