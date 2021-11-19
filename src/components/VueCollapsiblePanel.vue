<template>
	<section
		ref="panelRef"
		class="vcp"
		:class="{
			'vcp--expanded': isExpanded,
			'vcp--expandable': body.hasContent,
		}"
	>
		<header class="vcp__header p-4" @click="toggle">
			<div class="vcp__header-title">
				<slot name="title" />
			</div>
			<div v-if="body.hasContent" class="vcp__header-icon">
				<slot name="icon">
					<span v-html="toggleIcon" />
				</slot>
			</div>
		</header>

		<transition
			:data-key="body.dataKey"
			name="slide"
			@before-enter="collapse"
			@enter="expand"
			@before-leave="expand"
			@leave="collapse"
		>
			<div
				v-if="isExpanded"
				ref="bodyRef"
				class="vcp__body"
				style="border: 2px solid #482c77"
			>
				<div ref="bodyContentRef" class="vcp__body-content p-4">
					<slot name="content" />
				</div>
			</div>
		</transition>
	</section>
</template>

<script lang="ts">
import { v4 as uuid } from "uuid";
import {
	computed,
	defineComponent,
	nextTick,
	onUpdated,
	ref,
	onMounted,
} from "vue";
import { VNodeArrayChildren } from "@vue/runtime-core";
import { toggleIcon } from "../components/vue-collapsible-panel.constant";
import { useCollapsiblePanelStore } from "../components/composables/vue-collapsible-panel.store";

export default defineComponent({
	name: "VueCollapsiblePanel",
	props: {
		expanded: {
			type: Boolean,
			default: true,
		},
	},
	setup(props, context) {
		const idPanel = `panel-${uuid()}`;
		const panelRef = ref<HTMLElement>();
		const bodyRef = ref<HTMLElement>();
		const bodyContentRef = ref<HTMLElement>();
		const {
			panelExpanded,
			togglePanelExpandedStatus,
			setPanelExpandedStatus,
		} = useCollapsiblePanelStore();

		const body = computed(() => ({
			hasContent:
				context.slots.content &&
				(context.slots.content()[0].children as VNodeArrayChildren)
					.length > 0,
			dataKey: uuid(),
		}));

		const idGroup = computed(() => {
			return (
				panelRef.value?.parentElement?.getAttribute("data-id-group") ||
				""
			);
		});

		const isExpanded = computed(
			() =>
				panelExpanded(idGroup.value, idPanel).value &&
				body.value.hasContent
		);

		const toggle = (): void => {
			if (!body.value.hasContent) return;

			togglePanelExpandedStatus(idGroup.value, idPanel);
		};

		const collapse = (element: HTMLElement): void => {
			element.style.height = "0";
		};

		const expand = (element: HTMLElement): void => {
			element.style.height = `${element.scrollHeight}px`;
		};

		const updateBodyHeight = async (): Promise<void> => {
			await nextTick();

			if (!bodyRef.value || !bodyContentRef.value) return;

			bodyRef.value.style.height = `${Math.min(
				bodyContentRef.value.scrollHeight,
				bodyRef.value.scrollHeight
			)}px`;
		};

		onMounted(() => {
			setPanelExpandedStatus(idGroup.value, idPanel, props.expanded);
		});

		onUpdated(() => {
			updateBodyHeight();
		});

		return {
			body,
			panelRef,
			bodyRef,
			bodyContentRef,
			isExpanded,
			collapse,
			expand,
			toggle,
			toggleIcon,
		};
	},
});
</script>

<style lang="scss" scoped>
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

.vcp {
	$root: &;
	$timing-function: cubic-bezier(0.5, 0.25, 0, 1);

	&__header {
		display: flex;
		padding: 12px;
		pointer-events: none;

		#{$root}--expandable & {
			pointer-events: auto;
			cursor: pointer;
		}
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

	&__header-title {
		display: flex;
		align-items: center;
		flex: 1;
		font-weight: 500;
		font-size: 1.01rem;
		color: #fff;
	}

	&__header-icon {
		display: flex;
		align-items: center;
		transition: transform 0.3s $timing-function;
		color: white;

		#{$root}--expanded & {
			transform-origin: center;
			transform: rotate(180deg);
		}

		> span {
			display: flex;
			height: 24px;
			width: 24px;
		}

		::v-deep(svg) {
			height: 100%;
			width: 100%;
		}
	}

	&__body {
		overflow: hidden;
		transition: all 0.3s $timing-function;
		border-top: 1px solid var(--border-color);
		background-color: var(--bg-color-body);
	}

	&__body-content {
		padding: 12px;
	}
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0.25;
}
</style>
