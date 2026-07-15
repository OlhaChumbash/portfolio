<template>
  <section id="my-experience" class="history__area pt-50 pt-md-110 pb-60 pb-md-140">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">

            <h3 class="section__title-4">
              {{ $t('index.work_experience.title') }}
            </h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__thumb-wrapper d-sm-flex">

            <div class="history__thumb">
              <img src="~/assets/img/index/work-experience/work-experience-img.webp" alt="Work experience">
            </div>
          </div>
        </div>


        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__list">
            <div v-for="(item, i) in history_lists" :key="i"
              class="history__list-item d-flex flex-column flex-md-row align-items-stretch align-items-md-start">

              <div class="history__year" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000">
                <h5 class="history__year-title">
                  {{ item.year }}
                </h5>
              </div>


              <div class="history__list-content">
                <div class="history__list-dot">
                  <span></span>
                </div>


                <div class="history__list-content-inner" data-sal="slide-left" data-sal-delay="130"
                  data-sal-duration="1000">

                  <h4 class="history__list-title">
                    {{ item.title }}
                  </h4>

                  <p>
                    {{ item.text }}
                  </p>

                  <div class="history__list-meta">
                    <span>
                      {{ item.meta }}
                    </span>
                  </div>
                </div>
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

  computed: {
    history_lists() {
      return [
        {
          year: this.$t('index.work_experience.items.logistics_manager.year'),
          title: this.$t('index.work_experience.items.logistics_manager.title'),
          text: this.$t('index.work_experience.items.logistics_manager.text'),
          meta: this.$t('index.work_experience.items.logistics_manager.meta'),
        },
        {
          year: this.$t('index.work_experience.items.school_secretary.year'),
          title: this.$t('index.work_experience.items.school_secretary.title'),
          text: this.$t('index.work_experience.items.school_secretary.text'),
          meta: this.$t('index.work_experience.items.school_secretary.meta'),
        }
      ];
    }
  }
};
</script>




<style scoped>
.history__thumb-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.history__thumb {
  position: relative;
  width: 100%;
  margin: 80px 0 0 60px;
  max-width: 500px;
}

.history__thumb img {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 2;
}

.history__thumb::before {
  content: "";
  position: absolute;
  top: -80px;
  left: -60px;
  width: 320px;
  height: 140px;
  background: #101010;
  z-index: 1;
}
</style>
