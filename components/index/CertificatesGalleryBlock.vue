<template>
  <section id="my-sertificates" class="gallery pt-50 pt-md-110 pb-60 pb-md-140">
    <div class="gallery__wrapper">
      <div class="gallery__track" @mouseenter="paused = true" @mouseleave="paused = false" :class="{ paused }">
        <div v-for="(item, index) in galleryImages" :key="index" class="gallery__item" @click="openPopup(index)">
          <img :src="item" :alt="`gallery image ${index + 1}`" loading="lazy">
        </div>

        <div v-for="(item, index) in galleryImages" :key="'copy-' + index" class="gallery__item" @click="openPopup(index)">
          <img :src="item" :alt="`gallery image ${index + 1}`" loading="lazy">
        </div>
      </div>
    </div>
    <ImagePopup ref="imagePopup" :images="galleryImages" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRuntimeConfig } from "#imports";
import ImagePopup from "~/components/common/modals/ImagePopup.vue";

const config = useRuntimeConfig();
const baseAsset = (path) => {
  const base = config.app.baseURL || "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

const imagePopup = ref(null);
const paused = ref(false);
function openPopup(index) {
  imagePopup.value.showImg(index);
}

const galleryImages = [
  baseAsset("/index/education/certificates/certificate_1.webp"),
  baseAsset("/index/education/certificates/certificate_2.webp"),
  baseAsset("/index/education/certificates/certificate_3.webp"),
  baseAsset("/index/education/certificates/certificate_39.webp"),
  baseAsset("/index/education/certificates/certificate_4.webp"),
  baseAsset("/index/education/certificates/certificate_5.webp"),
  baseAsset("/index/education/certificates/certificate_6.webp"),
  baseAsset("/index/education/certificates/certificate_7.webp"),
  baseAsset("/index/education/certificates/certificate_34.webp"),
  baseAsset("/index/education/certificates/certificate_8.webp"),
  baseAsset("/index/education/certificates/certificate_9.webp"),
  baseAsset("/index/education/certificates/certificate_10.webp"),
  baseAsset("/index/education/certificates/certificate_35.webp"),
  baseAsset("/index/education/certificates/certificate_11.webp"),
  baseAsset("/index/education/certificates/certificate_38.webp"),
  baseAsset("/index/education/certificates/certificate_12.webp"),
  baseAsset("/index/education/certificates/certificate_13.webp"),
  baseAsset("/index/education/certificates/certificate_14.webp"),
  baseAsset("/index/education/certificates/certificate_15.webp"),
  baseAsset("/index/education/certificates/certificate_32.webp"),
  baseAsset("/index/education/certificates/certificate_16.webp"),
  baseAsset("/index/education/certificates/certificate_40.webp"),
  baseAsset("/index/education/certificates/certificate_17.webp"),
  baseAsset("/index/education/certificates/certificate_18.webp"),
  baseAsset("/index/education/certificates/certificate_19.webp"),
  baseAsset("/index/education/certificates/certificate_33.webp"),
  baseAsset("/index/education/certificates/certificate_20.webp"),
  baseAsset("/index/education/certificates/certificate_21.webp"),
  baseAsset("/index/education/certificates/certificate_22.webp"),
  baseAsset("/index/education/certificates/certificate_37.webp"),
  baseAsset("/index/education/certificates/certificate_23.webp"),
  baseAsset("/index/education/certificates/certificate_24.webp"),
  baseAsset("/index/education/certificates/certificate_25.webp"),
  baseAsset("/index/education/certificates/certificate_26.webp"),
  baseAsset("/index/education/certificates/certificate_36.webp"),

];
</script>
<style scoped>
.gallery {
  width: 100%;
  overflow: hidden;
}

.gallery__wrapper {
  overflow: hidden;
  width: 100%;
}

.gallery__track {
  display: flex;
  width: max-content;
  gap: 10px;
  animation: scroll 100s linear infinite;
}

@media (min-width: 768px) {
  .gallery__track {
    gap: 20px;
  }
}

.gallery__track.paused {
  animation-play-state: paused;
}
.gallery__item {
  width: 80vw; 
  height: 300px; 
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
}

@media (min-width: 576px) {
  .gallery__item {
    width: calc((100vw - 45px) / 2);
    height: 380px;
  }
}

@media (min-width: 992px) {
  .gallery__item {
    width: calc((100vw - 60px) / 4);
    height: 500px;
  }
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: .3s;
}

.gallery__item:hover img {
  transform: scale(1.05);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>