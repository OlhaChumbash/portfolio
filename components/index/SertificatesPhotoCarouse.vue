<template>
  <section class="elements__carousel-area pb-110">
    <div class="container">
      <div class="elements__carousel elements__carousel-img p-relative fix">

        <Carousel v-if="images.length" :key="images.join('-')" ref="detailsSlider" :items-to-show="1"
          :wrap-around="images.length > 1" :snapAlign="'center'" class="elements__carousel-img-active">
          <Slide v-for="(img, i) in images" :key="i" class="elements__carousel-item w-img">
            <img :src="img" alt="project image" />
          </Slide>
        </Carousel>

        <div v-if="images.length > 1" class="elements-img-arrow">
          <button @click="handlePrev" type="button" class="elements-img-button-prev slick-prev slick-arrow">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button @click="handleNext" type="button" class="elements-img-button-next slick-next slick-arrow">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "ProjectsPhotoCarouse",
  components: {
    Carousel,
    Slide,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handlePrev() {
      if (this.$refs.detailsSlider) {
        this.$refs.detailsSlider.prev();
      }
    },
    handleNext() {
      if (this.$refs.detailsSlider) {
        this.$refs.detailsSlider.next();
      }
    },
  }
};
</script>