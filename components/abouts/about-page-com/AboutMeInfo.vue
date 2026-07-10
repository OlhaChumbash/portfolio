<template>
  <section class="about__me-info pb-90 pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-3">
          <span class="about__me-info-subtitle"> {{ $t('index.about_me.subtitle') }}</span>
        </div>
        <div class="col-xl-8 col-lg-9">
          <div
            class="about__me-info-content"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <h4 class="about__me-info-title">
              {{ $t('index.about_me.title') }}
              <img src="~/assets/img/about/about-me-title-icon.png" alt="" />
            </h4>
            <p>
             {{ $t('index.about_me.description_1') }}
            </p>

            <p>
              {{ $t('index.about_me.description_2') }}
            </p>

            <div
              class="about__me-info-bottom d-sm-flex align-items-center mt-40"
            >
              <div class="about__me-info-btn mr-30">
                <a
                  href="https://weblearnbd.net/wp/bioxlab/wp-content/uploads/2022/09/demo-cv.pdf"
                  target="_blank"
                  class="tp-btn"
                >
                   {{ $t('index.about_me.download_cv') }}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 1L13 7L7 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div class="about__me-info-social">
                <a href="#"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a>
                <a href="#"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="#"><i class="fa-brands fa-telegram"></i> Telegram</a>
                <a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>

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

};
</script>
