<template>
  <Swiper
    :slidesPerView="4"
    :spaceBetween="30"
    class="award__item-wrapper"
    style="z-index:-999"
    :loop="true"
    :breakpoints="{
      576: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 3,
      },
    }"
  >
    <SwiperSlide
      v-for="(img, i) in award_data"
      :key="i"
      class="award__item-4 mr-30"
    >
      <img :src="img" alt="image" class="teachers"/>
    </SwiperSlide>
  </Swiper>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import award_img_1 from "~/assets/img/licey/teachers/Artem_Stakhov.webp";
import award_img_2 from "~/assets/img/licey/teachers/Denys_Kovalenko.webp";
import award_img_3 from "~/assets/img/licey/teachers/GenadiyKrotik.png";
import award_img_4 from "~/assets/img/licey/teachers/MaksimManshos.jpeg";
import award_img_5 from "~/assets/img/licey/teachers/OleksandrMuzika.png";
import award_img_6 from "~/assets/img/licey/teachers/Serhii_Liaskovets.webp";

export default {
  data() {
    return {
      award_data: [
        award_img_1,
        award_img_2,
        award_img_3,
        award_img_4,
        award_img_5,
        award_img_6,
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.award__item-wrapper {
  z-index: -999;
}
</style>