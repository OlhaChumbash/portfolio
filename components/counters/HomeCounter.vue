<template>
  <section class="counter__area counter__border pb-110">
    <div class="container">
      <div class="counter__inner black-bg fix">
        <div class="counter__shape">
          <img
            class="counter__shape-1"
            data-sal="slide-down"
            data-sal-delay="130"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-1.png"
            alt=""
          />
          <img
            class="counter__shape-2"
            data-sal="slide-down"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-2.png"
            alt=""
          />
          <img
            class="counter__shape-3"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-3.png"
            alt=""
          />
          <img
            class="counter__shape-4"
            data-sal="slide-up"
            data-sal-delay="120"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-4.png"
            alt=""
          />

          <img
            class="counter__shape-5"
            data-sal="slide-left"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-circle-1.png"
            alt=""
          />
          <img
            class="counter__shape-6"
            data-sal="slide-right"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-circle-2.png"
            alt=""
          />

          <img
            class="counter__shape-7 wow fadeInUp"
            data-sal="slide-up"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-1.png"
            alt=""
          />
          <img
            class="counter__shape-8"
            data-sal="slide-up"
            data-sal-delay="130"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-2.png"
            alt=""
          />
          <img
            class="counter__shape-9"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-3.png"
            alt=""
          />
        </div>
        <div class="row justify-content-center counter__list">
          <div v-for="(item,i) in counterData" :key="i" class="col-xxl-4 col-xl-4 col-lg-4 py-4">
            <div class="counter__item">
              <div class="counter__content">
                <p v-if="item.title">{{item.title}}</p>
                <ul v-else-if="item.list">
                  <li v-for="(el, index) in item.list" :key="index">{{el}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  data() {
    return {
      startCounter: false
    };
  },

  computed: {
    counterData() {
      return [
        { title: this.$t('counters.title_1')},
        { list: [this.$t('counters.list_1_1'), this.$t('counters.list_1_2')] },
        { list: [this.$t('counters.list_2_1'), this.$t('counters.list_2_2')] },
        { title: this.$t('counters.title_2') },
        { title: this.$t('counters.title_3') },
        { title: this.$t('counters.title_4') },
        { title: this.$t('counters.title_5') },
        { title: this.$t('counters.title_6') },
        { title: this.$t('counters.title_7') },
      ]
    }
  }
};
</script>
