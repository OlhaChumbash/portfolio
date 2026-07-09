<template>
  <section
    class="slider__area slider-mt-50 p-relative z-index-1"
    data-bg-color="green-dark"
  >
    <div
      class="slider__mouse-scroll slider__mouse-scroll-4 smooth d-flex align-items-center"
    >
      <a href="#cases" class="mouse-scroll-icon mouse-scroll-icon-4"></a>
      <p><a href="#cases">Scroll Down</a></p>
    </div>
    <div class="slider__shape">
      <img
        class="slider__shape-4-1"
        src="~/assets/img/licey/1.png"
        alt=""
      />
      <!-- <img
        class="slider__shape-4-2 jarallax"
        src="~/assets/img/slider/4/slider-shape-2.png"
        alt=""
      />
      <img
        class="slider__shape-4-3 jarallax"
        src="~/assets/img/slider/4/slider-shape-3.png"
        alt=""
      /> -->
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
          <div class="slider__content-4 font-banner">
            <span class="slider__title-pre-4">INTITA</span>
            <h3 class="slider__title-4 orange-color">IT-Ліцей</h3>
            <h3 class="slider__title-4">
              Програмуй майбутнє
            </h3>
            <div class="slider__btn-4">
             <button type="button" class="tp-btn white-color blue-clolor-bg" data-bs-toggle="modal" :data-bs-target="`#requestModal`">
                 <span class="font-banner">Хочу навчатися</span>
                </button>
            
              <!-- <nuxt-link href="#" class="tp-btn white-color blue-clolor-bg"><span class="font-banner">Хочу навчатися</span></nuxt-link> -->
            </div>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
          <div class="slider__thumb-4 m-img mbm-skip  bg-t">
            <img
              data-sal="slide-up"
              data-sal-delay="130"
              data-sal-duration="1000"
              src="~/assets/img/licey/top-girl.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
    <RequestModal modal_id="requestModal"/>
  </section>
</template>


<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';
import RequestModal from "~/components/common/modals/RequestModal.vue";

export default {
   components: {
    RequestModal  
  },
  mixins:[SalScrollAnimationMixin]
};
</script>
