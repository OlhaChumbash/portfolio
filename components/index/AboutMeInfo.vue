<template>
  <section id="about-me" class="about__me-info pt-50 pt-md-110 pb-60 pb-md-140">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-3">
          <span class="about__me-info-subtitle"> {{ $t('index.about_me.subtitle') }}</span>
        </div>
        <div class="col-xl-8 col-lg-9">
          <div class="about__me-info-content" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <h4 class="about__me-info-title">
              {{ $t('index.about_me.title') }}
              <img src="~/assets/img/index/hero-block/about-me-title-icon.png" alt="" />
            </h4>
            <p>
              {{ $t('index.about_me.description_1') }}
            </p>

            <p>
              {{ $t('index.about_me.description_2') }}
            </p>

         <div class="about__me-info-bottom d-flex d-sm-flex justify-content-end align-items-center mt-40">  
            <div class="about__me-info-btn ms-auto me-sm-0">
              <button type="button" class="tp-btn-green align-items-center" @click="downloadCv">
                {{ $t('index.about_me.download_cv') }}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  methods: {
    downloadCv() {
      const locale = this.$i18n.locale || 'uk';
      const fileName = locale === 'de' ? 'cv-de.pdf' : locale === 'en' ? 'cv-en.pdf' : 'cv-ua.pdf';
      const link = document.createElement('a');
      const config = useRuntimeConfig()
      link.href = `${config.app.baseURL}cv/${fileName}`
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
<style>
/* Изолируем и выталкиваем контент на отдельный аппаратный слой */
.about__me-info-content,
.about__me-info-content p,
.about__me-info-content h4 {
  position: relative !important;
  z-index: 999999 !important;
  
  /* Включаем выделение */
  user-select: text !important;
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  
  /* Разрешаем все действия мыши */
  pointer-events: auto !important;
  cursor: text !important;
  
  /* Фикс для багов рендеринга видеокарты/браузера (Magic Fix) */
  transform: translateZ(0) !important;
  will-change: transform, opacity;
}

/* Принудительно чистим псевдоэлементы, которые могли остаться от анимации */
.about__me-info-content::before,
.about__me-info-content::after {
  display: none !important;
}
</style>
