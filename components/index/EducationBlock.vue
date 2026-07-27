<template>
  <section id="my-education" class="vision__area pt-50 pt-md-110 pb-60 pb-md-140 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-9 col-lg-10">
          <div class="section__title-wrapper-10 mb-60">
            <!-- <span class="section__title-pre-10">Vision for the city</span> -->
            <h3 class="section__title"> {{ $t(`index.education.title`) }}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-5">
          <div class="vision__tab tp-tab">
            <ul class="nav nav-tabs flex-column" id="visionTab" role="tablist">

              <li v-for="(tab, index) in tabs" :key="tab.key" class="nav-item" role="presentation">
                <button class="nav-link" :class="{ active: activeTab === tab.id }" :id="`${tab.id}-tab`"
                  type="button" role="tab" :aria-controls="tab.id"
                  :aria-selected="activeTab === tab.id"
                  @click.prevent="setActiveTab(tab.id)">
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
              <SingleTabItem
                v-if="activeTabItem"
                :key="activeTabItem.id"
                :id="activeTabItem.id"
                :item="activeTabItem.key"
                :active="true"
              />
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

  data() {
    return {
      activeTab: 'education-1'
    };
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
    },
    activeTabItem() {
      return this.tabs.find(tab => tab.id === this.activeTab) || this.tabs[0];
    }
  },

  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-title {
  font-size: 18px;
  color: var(--bg-primary);
}

.tab-date {
  font-size: 11px;
  margin-bottom: 0;
}
</style>