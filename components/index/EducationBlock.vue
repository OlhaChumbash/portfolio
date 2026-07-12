<template>
  <section class="vision__area pt-110 pb-110 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-9 col-lg-10">
          <div class="section__title-wrapper-10 mb-60">
            <!-- <span class="section__title-pre-10">Vision for the city</span> -->
            <h3 class="section__title-10"> {{ $t(`index.education.title`) }}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-5">
          <div class="vision__tab tp-tab">
            <ul class="nav nav-tabs flex-column" id="visionTab" role="tablist">

              <li v-for="(tab, index) in tabs" :key="tab.key" class="nav-item" role="presentation">
                <button class="nav-link" :class="{ active: index === 0 }" :id="`${tab.id}-tab`" data-bs-toggle="tab"
                  :data-bs-target="`#${tab.id}`" type="button" role="tab" :aria-controls="tab.id"
                  :aria-selected="index === 0">
                  <div class="tab-title">{{ tab.title }}</div>
                  <div class="tab-date"> {{ tab.date }}</div>
                </button>
              </li>

            </ul>
          </div>
        </div>

        <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-7">
          <div class="vision__tab-content pl-70">
            <div class="tab-content" id="visionTabContent">

              <SingleTabItem v-for="(tab, index) in tabs" :key="tab.id" :id="tab.id" :item="tab.key"
                :active="index === 0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleTabItem from './SingleTabItem.vue';
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins: [SalScrollAnimationMixin],

  components: {
    SingleTabItem
  },

  computed: {
    tabs() {
      const education = this.$tm('index.education');

      return Object.keys(education)
        .filter(key => key.startsWith('item_'))
        .map((key, index) => ({
          id: `education-${index + 1}`,
          key: key,
          title: this.$t(`index.education.${key}.title`),
          date: this.$t(`index.education.${key}.date`)

        }));
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-title {
  font-size: 18px;
}

.tab-date {
  font-size: 11px;
  margin-bottom: 0;
}
</style>