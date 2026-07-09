<template>
  <section class="slider__area p-relative">
    <Swiper
      class="slider__active swiper-container"
      :slidesPerView="1"
      :loop="true"
      :modules="modules"
      :effect="'fade'"
      :pagination="{
        el: '.main-slider-dot',
        clickable: true,
        renderBullet: renderBullet,
      }"
    >
      <SwiperSlide
        v-for="(item, i) in sliderData"
        :key="i"
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center"
      >
        <div class="slider__bg p-relative include-bg" :style="{ backgroundImage: `url(${item.bg})` }"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <span class="slider__title-pre">
                  {{ item.pre_title }}
                </span>
                <h3 class="slider__title" v-html="item.title"></h3>
                <h3 class="slider__title" v-html="item.title2"></h3>
                <h3 class="slider__title" v-html="item.title3"></h3>
<!--                <div class="slider__form">-->
<!--                  <SliderForm />-->
<!--                </div>-->
                <button type="button" class="tp-btn-4 tp-style-border" data-bs-toggle="modal" :data-bs-target="`#requestModal`">
                  {{$t('slider.button')}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="main-slider-dot d-none d-lg-flex"></div>
    </Swiper>
    <div class="mouse-scroll">
      <a href="#tpabout" class="mouse-scroll-btn"></a>
    </div>
    <RequestModal modal_id="requestModal"/>
  </section>
</template>

<script>
// internal
import bg_1 from "~/assets/img/slider/1.png";
import SliderForm from "~~/components/forms/SliderForm.vue";
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
import RequestModal from "~/components/common/modals/RequestModal.vue";

export default {
  components: {
    RequestModal,
    Swiper,
    SwiperSlide,
    SliderForm,
  },
  data() {
    return {
      bg_1,

    };
  },
  methods: {
    renderBullet: function (index, className) {
      return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
    },
  },
  computed: {
    sliderData() {
      return [
        {
          id: 1,
          pre_title: this.$t('slider.pre_title_1'),
          title: this.$t('slider.title_1'),
          title2: this.$t('slider.title_2'),
          title3: this.$t('slider.title_3'),
          bg: bg_1,
        },
        // {
        //   id: 2,
        //   pre_title: this.$t('slider.pre_title_2'),
        //   title: this.$t('slider.title_2'),
        //   // bg: bg_2,
        // }
      ]
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>
