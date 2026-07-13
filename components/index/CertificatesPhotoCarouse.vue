<template>
  <section class="certificates-carousel">
    <Carousel
      :key="carouselId"
      :items-to-show="1"
      :wrap-around="images.length > 1"
    >
      <Slide 
        v-for="(img, index) in images" 
        :key="`${carouselId}-slide-${index}`"
      >
        <div class="carousel__item">
          <img 
            :src="img"
            alt="certificate"
            class="certificate-image"
            @click="handleImageClick(index)"
          />
        </div>
      </Slide>
      
      <template #addons v-if="images.length > 1">
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "CertificatesPhotoCarouse",

  components: {
    Carousel,
    Slide,
    Navigation,
  },

  props: {
    images: {
      type: Array,
      default: () => []
    },
    carouselId: {
      type: String,
      default: ''
    }
  },

  emits: ['image-click'],

  methods: {
    handleImageClick(index) {
      this.$emit('image-click', index);
    }
  }
};
</script>

<style scoped>
.certificates-carousel {
  width: 100%;
  margin-bottom: 25px;
}
.carousel__item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.certificate-image {
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  cursor: zoom-in;
}

.carousel__item {
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>