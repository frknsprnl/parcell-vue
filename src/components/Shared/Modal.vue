<template>
  <div v-show="isOpen" class="modaltor" :class="[`modaltor--${animationParent}`, { 'modaltor--show': open }]">
    <div :class="['modaltor__overlay']" :style="{ backgroundColor: bgOverlay }" @click="emitHideModal"></div>
    <div
      :class="['modaltor__panel', `modaltor__panel--${animationPanel}`, { 'modaltor__panel--show': open }]"
      :style="{ width: width, backgroundColor: bgPanel }"
    >
      <div class="modaltor__header">
        <slot name="header">
          <div class="float-end" @click="emitHideModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
              <path
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
              />
            </svg>
          </div>
        </slot>
      </div>
      <div class="modaltor__content">
        <slot name="body"> </slot>
      </div>
      <div class="modaltor__footer" v-if="$slots.footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  name: "ModaltorPerfect",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    resizeWidth: {
      type: Object,
    },
    animationPanel: {
      type: String,
      required: false,
      default: "modal__fade",
    },
    bgOverlay: {
      type: String,
      required: false,
      default: "#fff",
    },
    bgPanel: {
      type: String,
      required: false,
      default: "rgba(255, 255, 255, 0.57)",
    },
    animationParent: {
      type: String,
      required: false,
      default: "modal__fade",
    },
    defaultWidth: {
      type: String,
      required: false,
      default: "80%",
    },
    closeScroll: {
      type: Boolean,
      required: false,
      default: true,
    },
    spaceScroll: {
      type: String,
      required: false,
      default: "15px",
    },
  },
  data() {
    return {
      width: this.defaultWidth || "80%",
      open: false,
      isOpen: false,
      backups: {
        body: {
          height: null,
          overflow: null,
          paddingRight: null,
        },
      },
      timout: null,
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.openModal();
      } else {
        this.hiddenModal();
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  unmounted() {
    this.destroyModal();
  },
  mounted() {
    this.$nextTick(function () {
      if (this.visible) {
        this.openModal();
      }
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    clearTimoutModal() {
      clearTimeout(this.timout);
    },
    emitHideModal() {
      this.$emit("hideModal");
    },
    finishHiddenModal() {
      this.$emit("finishHidden");
    },
    destroyModal() {
      if (this.open) {
        if (this.closeScroll) {
          this._unlockBody();
        }
        this.open = false;
        this.clearTimoutModal();
        this.timout = setTimeout(() => (this.isOpen = false), 300);
      }
    },
    hiddenModal() {
      if (this.closeScroll) {
        this._unlockBody();
      }
      this.open = false;
      this.clearTimoutModal();
      this.timout = setTimeout(() => {
        this.isOpen = false;
        this.finishHiddenModal();
      }, 300);
    },
    openModal() {
      this.isOpen = true;
      this.clearTimoutModal();
      this.timout = setTimeout(() => (this.open = true), 30);
      if (this.closeScroll) {
        this._lockBody();
      }
    },
    getWindowWidth() {
      if (this.resizeWidth && Object.keys(this.resizeWidth).length > 0) {
        this.windowWidth = document.documentElement.clientWidth;
        const filter = Object.keys(this.resizeWidth).find((f) => f >= this.windowWidth);
        if (filter) {
          this.width = this.resizeWidth[filter];
        } else {
          this.width = this.defaultWidth;
        }
      }
    },
    _hasScrollbar() {
      return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    },
    _lockBody() {
      if (this._hasScrollbar()) {
        this.backups.body.height = document.body.style.height;
        this.backups.body.overflow = document.body.style.overflow;
        document.body.style.paddingRight = this.spaceScroll;
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      }
    },
    _unlockBody() {
      if (this._hasScrollbar()) {
        document.body.style.height = this.backups.body.height;
        document.body.style.overflow = this.backups.body.overflow;
        document.body.style.paddingRight = this.backups.body.paddingRight;
      }
    },
  },
};
</script>
