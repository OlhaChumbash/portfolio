<template>
  <section class="slider__area pt-100 pb-100 slider__overlay-2 slider__overlay-2-2 p-relative z-index-1">
    
    <div class="slider__shape-2">
      <MatrixRain />
    </div>

    <div class="slider__portfolio-btn">
      <nuxt-link href="/projects" class="slider-portfolio-btn">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 2.25001C3.5 1.28351 2.7165 0.500001 1.75 0.500001C0.783502 0.500001 0 1.28351 0 2.25001C0 3.2165 0.783502 4 1.75 4C2.7165 4 3.5 3.2165 3.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M3.5 12.25C3.5 11.2835 2.7165 10.5 1.75 10.5C0.783502 10.5 0 11.2835 0 12.25C0 13.2165 0.783502 14 1.75 14C2.7165 14 3.5 13.2165 3.5 12.25Z"
            fill="currentColor" />
          <path
            d="M13.5 2.25001C13.5 1.28351 12.7165 0.500002 11.75 0.500002C10.7835 0.500002 10 1.28351 10 2.25001C10 3.2165 10.7835 4 11.75 4C12.7165 4 13.5 3.2165 13.5 2.25001Z"
            fill="currentColor" />
          <path
            d="M13.5 12.25C13.5 11.2835 12.7165 10.5 11.75 10.5C10.7835 10.5 10 11.2835 10 12.25C10 13.2165 10.7835 14 11.75 14C12.7165 14 13.5 13.2165 13.5 12.25Z"
            fill="currentColor" />
        </svg>
        {{ $t('index.all_projects') }}
      </nuxt-link>
    </div>

    <div class="slider__mouse-scroll smooth d-flex align-items-center">
      <a href="#footer" class="mouse-scroll-icon"></a>
      <p>
        <a href="#footer">{{ $t('index.scroll_down') }}</a>
      </p>
    </div>

    <div class="container slider__content-wrapper">
      <div class="row align-items-center justify-content-between gx-5">
        
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="slider__content-2">
            <span class="slider__title-pre-2" data-sal="slide-up" data-sal-delay="130" data-sal-duration="700">
              {{ $t('index.pre_title_1') }}
            </span>
            <h3 class="slider__title-2" data-sal="slide-up" data-sal-delay="140" data-sal-duration="900">
              <TypewriterText :text="$t('index.title_1')" :speed="70" :keepCursor="false" />
              <br>
              <TypewriterText :text="$t('index.title_2')" :speed="70" :delay="1500" :keepCursor="true" />
            </h3>

            <div class="slider__btn-2" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1100">
              <button type="button" class="tp-btn-green" data-bs-toggle="modal" data-bs-target="#requestModal">
                {{ $t('index.button') }}
              </button>
            </div>
          </div>
        </div>

        <div class="col-xxl-5 col-xl-6 col-lg-5">
          <div class="slider__thumb-wrapper-2 pt-20 ml-60" data-overlay="green" data-overlay-opacity="3">
            <div class="slider__thumb-2 m-img text-center" data-sal="slide-left" data-sal-delay="180"
              data-sal-duration="1200">
              <img src="~/assets/img/index/hero-block/hero_photo3.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
    <ProductModal modal_id="requestModal" />
  </section>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin'
import ProductModal from '~/components/common/modals/ProductModal.vue'
import TypewriterText from "@/components/common/TypewriterText.vue";
import MatrixRain from "@/components/index/MatrixRain.vue"; 

export default {
  components: {
    ProductModal,
    TypewriterText,
    MatrixRain
  },

  mixins: [SalScrollAnimationMixin],

  data() {
    return {
      isModalOpen: false
    }
  }
}
</script>

<style scoped>
.slider__area {
  position: relative;
}

.slider__shape-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none; 
}

.slider__content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
}

/* Збільшуємо відстань між текстом та картинкою на великих моніторах */
@media (min-width: 1200px) {
  .ml-60 {
    margin-left: 60px !important;
  }
}
</style>