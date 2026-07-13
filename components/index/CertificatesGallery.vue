<template>
  <section id="my-sertificates" class="gallery mt-60 mb-60">
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

const imagePopup = ref(null);
const paused = ref(false);
function openPopup(index) {
  imagePopup.value.showImg(index);
}

const galleryImages = [
  "/index/education/certificates/certificate_1.webp",
  "/index/education/certificates/certificate_2.webp",
  "/index/education/certificates/certificate_3.webp",
  "/index/education/certificates/certificate_4.webp",
  "/index/education/certificates/certificate_5.webp",
  "/index/education/certificates/certificate_6.webp",
  "/index/education/certificates/certificate_7.webp",
  "/index/education/certificates/certificate_8.webp",
  "/index/education/certificates/certificate_9.webp",
  "/index/education/certificates/certificate_10.webp",
  "/index/education/certificates/certificate_11.webp",
  "/index/education/certificates/certificate_12.webp",
  "/index/education/certificates/certificate_13.webp",
  "/index/education/certificates/certificate_14.webp",
  "/index/education/certificates/certificate_15.webp",
  "/index/education/certificates/certificate_16.webp",
  "/index/education/certificates/certificate_17.webp",
  "/index/education/certificates/certificate_18.webp",
  "/index/education/certificates/certificate_19.webp",
  "/index/education/certificates/certificate_20.webp",
  "/index/education/certificates/certificate_21.webp",
  "/index/education/certificates/certificate_22.webp",
  "/index/education/certificates/certificate_23.webp",
  "/index/education/certificates/certificate_24.webp",
  "/index/education/certificates/certificate_25.webp",
  "/index/education/certificates/certificate_26.webp",
  "/index/education/certificates/certificate_27.webp",
  "/index/education/certificates/certificate_28.webp",
  "/index/education/certificates/certificate_29.webp",
  "/index/education/certificates/certificate_30.webp",
  "/index/education/certificates/certificate_31.webp",
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
  gap: 20px;
  animation: scroll 100s linear infinite;
}

.gallery__track.paused {
  animation-play-state: paused;
}

.gallery__item {
  width: calc((100vw - 60px) / 4);
  height: 500px;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
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