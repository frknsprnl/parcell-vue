<template>
	<div :data-id-group="idGroup" :style="cssColorVars" class="vcpg">
		<slot />
	</div>
</template>

<script lang="ts">
import { v4 as uuid } from "uuid";
import { defineComponent, ref } from "vue";
import { useCollapsiblePanelStore } from "../components/composables/vue-collapsible-panel.store";

export default defineComponent({
	name: "VueCollapsiblePanelGroup",
	props: {
		accordion: {
			type: Boolean,
			default: false,
		},
		baseColor: {
			type: String,
			default: "#4c3a6e",
		},
	},
	setup(props) {
		const idGroup = ref(`group-${uuid()}`);
		const { setGroupAccordionStatus } = useCollapsiblePanelStore();
		const cssColorVars = {
			"--base-color": props.baseColor,
			"--border-color": LightenDarkenColor(props.baseColor, 20),
			"--bg-color-header": LightenDarkenColor(props.baseColor, 30),
			"--bg-color-header-hover": LightenDarkenColor(props.baseColor, 40),
			"--bg-color-header-active": LightenDarkenColor(props.baseColor, 10),
			"--bg-color-body": "#fff",
		};

		setGroupAccordionStatus(idGroup.value, props.accordion);

		return {
			idGroup,
			cssColorVars,
		};
		function LightenDarkenColor(col: string, amt: number) {
			var usePound = false;

			if (col[0] == "#") {
				col = col.slice(1);
				usePound = true;
			}

			var num = parseInt(col, 16);

			var r = (num >> 16) + amt;

			if (r > 255) r = 255;
			else if (r < 0) r = 0;

			var b = ((num >> 8) & 0x00ff) + amt;

			if (b > 255) b = 255;
			else if (b < 0) b = 0;

			var g = (num & 0x0000ff) + amt;

			if (g > 255) g = 255;
			else if (g < 0) g = 0;

			return (
				(usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
			);
		}
	},
});
</script>

<!--
<style>
:root {
	--colors-purple-logo: #482c77;
	--colors-purple-navy: #4f517d;
	--colors-purple-deep: #4c3a6e;
	--colors-languid-lavender: #dccfec;
	--colors-purple-navy: #c29eba;
	--colors-purple-gray: #595a6c;
	--colors-purple-light: #c2add3;
	--colors-purple-navy: #4f517d;
	--colors-purple-navy: #4f517d;
}

.vcpg {
	border: 2px solid var(--colors-purple-deep);
	border-radius: 4px;
	width: 100%;
}
.vcpg ::v-deep(.vcp) * {
	box-sizing: border-box;
}
.vcpg ::v-deep(.vcp)__header {
	background-color: var(--colors-purple-deep);
	height: 46px;
	transition: background-color 0.3s ease;
}
.vcpg ::v-deep(.vcp)__header:hover {
	background-color: var(--colors-purple-deep);
}
.vcpg ::v-deep(.vcp)__header:active {
	background-color: var(--colors-purple-deep);
}
.vcpg ::v-deep(.vcp):not(:first-of-type) .vcp__header {
	border-top: 1px solid var(--colors-purple-deep);
}
.vcpg ::v-deep(.vcp)__header-title {
	font-weight: 500;
}
.vcpg ::v-deep(.vcp)__body {
	border-top: 1px solid var(--colors-purple-deep);
	background-color: var(--colors-purple-deep);
}
</style>
-->
<!--
<style lang="scss" scoped>
.vcpg {
	border: 1px solid var(--border-color);
	border-radius: 4px;
	width: 100%;
	::v-deep(.vcp) {
		* {
			box-sizing: border-box;
		}
		&__header {
			background-color: var(--bg-color-header);
			height: 46px;
			transition: background-color 0.3s ease;
			&:hover {
				background-color: var(--bg-color-header-hover);
			}
			&:active {
				background-color: var(--bg-color-header-active);
			}
		}
		&:not(:first-of-type) {
			.vcp__header {
				border-top: 1px solid var(--border-color);
			}
		}
		&__header-title {
			font-weight: 500;
		}
		&__body {
			border-top: 1px solid var(--border-color);
			background-color: var(--bg-color-body);
		}
	}
}
</style>
-->
