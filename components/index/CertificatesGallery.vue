<template>
  <div>
    <section id="my-sertificates" class="portfolio__area p-relative z-index-1 pt-110 pb-140 blue-bg-5">
      <div class="portfolio__bg-6 p-relative include-bg"></div>
      <div class="portfolio__shape">
        <img class="portfolio__shape-8" src="~/assets/img/index/certificates/portfolio-shape-1.webp"
          alt="portfolio__shape" loading="lazy" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xxl-6 col-xl-7 col-lg-6">
            <div class="section__title-wrapper-6 section__title-wrapper-6-white mb-60">
              <h3 class="section__title-6">
                {{ $t("index.certificates.title") }} <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid g-0">
        <div class="row gx-0">
          <div class="col-xxl-12">
            <div class="portfolio__slider-6">
<ClientOnly>
  <Swiper
    class="portfolio__slider-active-6 swiper-container"
    :modules="modules"
    :slides-per-view="3"
    :space-between="20"
    :loop="true"
    :speed="800"
    :grab-cursor="true"
    :allow-touch-move="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      1600: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }"
  >

    <SwiperSlide
      v-for="(item, i) in portfolio_items"
      :key="item.id"
    >

      <div class="portfolio__thumb-6 fix">

        <button
          type="button"
          class="portfolio__thumb-button"
          @click.stop="handleImagePopup(i)"
        >
          <img
            :src="item.img"
            :alt="getAltText(item.img)"
            loading="lazy"
          />
        </button>

      </div>

    </SwiperSlide>

  </Swiper>
</ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- image popup start -->
    <image-popup ref="image_popup" :images="portfolio_items.map((item) => item.img)" />
    <!-- image popup end -->
  </div>
</template>

<script>
// external 
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import port_1 from "~/assets/img/index/certificates/certificate_1.webp";
import port_2 from "~/assets/img/index/certificates/certificate_2.webp";
import port_3 from "~/assets/img/index/certificates/certificate_3.webp";
import port_4 from "~/assets/img/index/certificates/certificate_4.webp";
import port_5 from "~/assets/img/index/certificates/certificate_5.webp";
import port_6 from "~/assets/img/index/certificates/certificate_6.webp";
import port_7 from "~/assets/img/index/certificates/certificate_7.webp";
import port_8 from "~/assets/img/index/certificates/certificate_8.webp";
import port_9 from "~/assets/img/index/certificates/certificate_9.webp";
import port_10 from "~/assets/img/index/certificates/certificate_10.webp";
import port_11 from "~/assets/img/index/certificates/certificate_11.webp";
import port_12 from "~/assets/img/index/certificates/certificate_12.webp";
import port_13 from "~/assets/img/index/certificates/certificate_13.webp";
import port_14 from "~/assets/img/index/certificates/certificate_14.webp";
import port_15 from "~/assets/img/index/certificates/certificate_15.webp";
import port_16 from "~/assets/img/index/certificates/certificate_16.webp";
import port_17 from "~/assets/img/index/certificates/certificate_17.webp";
import port_18 from "~/assets/img/index/certificates/certificate_18.webp";
import port_19 from "~/assets/img/index/certificates/certificate_19.webp";
import port_20 from "~/assets/img/index/certificates/certificate_20.webp";
import port_21 from "~/assets/img/index/certificates/certificate_21.webp";
import port_22 from "~/assets/img/index/certificates/certificate_22.webp";
import port_23 from "~/assets/img/index/certificates/certificate_23.webp";
import port_24 from "~/assets/img/index/certificates/certificate_24.webp";
import port_25 from "~/assets/img/index/certificates/certificate_25.webp";
import port_26 from "~/assets/img/index/certificates/certificate_26.webp";



import ImagePopup from "~/components/common/modals/ImagePopup.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ImagePopup,
  },

  data() {
    return {
      isActive: false,
      portfolio_items: [
        { id: 1, img: port_1 },
        { id: 2, img: port_2 },
        { id: 3, img: port_3 },
        { id: 4, img: port_4 },
        { id: 5, img: port_5 },
        { id: 6, img: port_6 },
        { id: 7, img: port_7 },
        { id: 8, img: port_8 },
        { id: 9, img: port_9 },
        { id: 10, img: port_10 },
        { id: 11, img: port_11 },
        { id: 12, img: port_12 },
        { id: 13, img: port_13 },
        { id: 14, img: port_14 },
        { id: 15, img: port_15 },
        { id: 16, img: port_16 },
        { id: 17, img: port_17 },
        { id: 18, img: port_18 },
        { id: 19, img: port_19 },
        { id: 20, img: port_20 },
        { id: 21, img: port_21 },
        { id: 22, img: port_22 },
        { id: 23, img: port_23 },
        { id: 24, img: port_24 },
        { id: 25, img: port_25 },
        { id: 26, img: port_26 },
      ],
    };
  },
 methods: {
  handleImagePopup(index) {
    console.log("CLICK", index);

    this.$nextTick(() => {
      if (
        this.$refs.image_popup &&
        typeof this.$refs.image_popup.showImg === "function"
      ) {
        this.$refs.image_popup.showImg(index);
      }
    });
  },

  getAltText(path) {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1].split(".")[0];
    return fileName;
  },
},
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style scoped>
.portfolio__area {
  background-color: #37648b;
}

.portfolio__slider-active-6 {
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.portfolio__thumb-6 {
  width: 100%;
  height: auto;
  display: block;
  overflow: hidden;
}

.portfolio__thumb-button {
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.portfolio__thumb-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

.section__title-6 {
  font-weight: 700;
  font-size: 60px;
  font-family: "Space Grotesk", sans-serif;
  padding-left: 0;
  line-height: 60px;
}

.description {
  font-weight: 400;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  line-height: 24px;
}
.portfolio__thumb-button {
  width:100%;
  padding:0;
  border:0;
  background:none;
  cursor:pointer;
}

.portfolio__thumb-button img {
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
@media (max-width: 992px) {
  .portfolio__area {
    padding-top: 80px;
  }

  .portfolio__shape-8 {
    left: 45%;
  }

  .section__title-6 {
    font-size: 44px;
  }
}

@media (max-width: 768px) {
  .portfolio__shape-8 {
    left: 80%;
  }
}

@media (max-width: 576px) {
  .portfolio__shape-8 {
    top: 9%;
  }
}

@media (max-width: 478px) {
  .portfolio__shape-8 {
    top: 14%;
    left: 70%;
  }
}

@media (max-width: 375px) {
  .section__title-6 {
    font-size: 40px;
  }
}
</style>
