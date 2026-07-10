<template>
  <Teleport to="body">
    <div v-if="visible" class="image-popup-overlay" @click.self="handleHide">
      <button type="button" class="image-popup-close" aria-label="Close image" @click="handleHide">
        ×
      </button>
      <div class="image-popup-content">
        <img v-if="currentImage" :src="currentImage" :alt="altText" />
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      visible: false,
      index: 0,
      currentImage: "",
    };
  },
  computed: {
    altText() {
      return this.currentImage ? "Certificate preview" : "Image preview";
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    showImg(index) {
      if (!this.images || !this.images.length) return;

      const safeIndex = Math.max(0, Math.min(index, this.images.length - 1));
      this.index = safeIndex;
      this.currentImage = this.images[safeIndex];
      this.visible = true;
      document.body.style.overflow = "hidden";
    },
    handleHide() {
      this.visible = false;
      document.body.style.overflow = "";
    },
    handleKeydown(event) {
      if (event.key === "Escape" && this.visible) {
        this.handleHide();
      }
    },
  },
};
</script>

<style scoped>
.image-popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.85);
}

.image-popup-content {
  max-width: min(95vw, 1200px);
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-popup-content img {
  max-width: 100%;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.image-popup-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #111;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}
</style>
