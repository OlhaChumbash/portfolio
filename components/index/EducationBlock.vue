
<template>
  <section
    id="my-education"
    class="vision__area pt-50 pt-md-110 pb-60 pb-md-140 grey-bg-4"
  >
    <div class="container">
      <!-- Section title -->
      <div class="row">
        <div class="col-xxl-8 col-xl-9 col-lg-10">
          <div class="section__title-wrapper-10 mb-60">
            <h3 class="section__title">
              {{ $t('index.education.title') }}
            </h3>
          </div>
        </div>
      </div>

      <!-- DESKTOP: Vertical tabs -->
      <div class="row d-none d-md-flex">
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-5">
          <div class="vision__tab tp-tab">
            <ul
              class="nav nav-tabs flex-column"
              id="visionTab"
              role="tablist"
            >
              <li
                v-for="tab in tabs"
                :key="tab.key"
                class="nav-item"
                role="presentation"
              >
                <button
                  class="nav-link"
                  :class="{ active: activeTab === tab.id }"
                  :id="`${tab.id}-tab`"
                  type="button"
                  role="tab"
                  :aria-controls="tab.id"
                  :aria-selected="activeTab === tab.id"
                  @click.prevent="setActiveTab(tab.id)"
                >
                  <div class="tab-title">
                    {{ tab.title }}
                  </div>

                  <div class="tab-date">
                    {{ tab.date }}
                  </div>
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

      <!-- MOBILE: Accordion -->
      <div class="education-accordion d-md-none">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          class="education-accordion__item"
        >
          <!-- Accordion header -->
          <button
            class="education-accordion__header"
            :class="{
              'is-open': openAccordionId === tab.id
            }"
            type="button"
            :aria-expanded="openAccordionId === tab.id"
            :aria-controls="`mobile-${tab.id}-content`"
            @click="toggleAccordion(tab.id)"
          >
            <div class="education-accordion__text">
              <div class="education-accordion__title">
                {{ tab.title }}
              </div>

              <div class="education-accordion__date">
                {{ tab.date }}
              </div>
            </div>

            <span
              class="education-accordion__icon"
              aria-hidden="true"
            >
              {{ openAccordionId === tab.id ? '−' : '+' }}
            </span>
          </button>

          <!-- Accordion content -->
          <div
            v-if="openAccordionId === tab.id"
            :id="`mobile-${tab.id}-content`"
            class="education-accordion__content"
          >
            <SingleTabItem
              :key="`mobile-${tab.id}`"
              :id="`mobile-${tab.id}`"
              :item="tab.key"
              :active="true"
            />
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
  name: 'EducationSection',

  mixins: [SalScrollAnimationMixin],

  components: {
    SingleTabItem
  },

  data() {
    return {
      activeTab: 'education-1',
      openAccordionId: 'education-1'
    };
  },

  computed: {
    tabs() {
      const education = this.$tm('index.education');

      return Object.keys(education)
        .filter(key => key.startsWith('item_'))
        .map((key, index) => ({
          id: `education-${index + 1}`,
          key,
          title: this.$t(`index.education.${key}.title`),
          date: this.$t(`index.education.${key}.date`)
        }));
    },

    activeTabItem() {
      return (
        this.tabs.find(tab => tab.id === this.activeTab) ||
        this.tabs[0] ||
        null
      );
    }
  },

  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },

    toggleAccordion(tabId) {
      this.openAccordionId =
        this.openAccordionId === tabId ? null : tabId;
    }
  }
};
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

/* Mobile accordion */
.education-accordion {
  width: 100%;
}

.education-accordion__item {
  width: 100%;
  margin-bottom: 12px;
}

.education-accordion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px 36px;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: var(--bg-primary);
  box-shadow: 0 1px 3px rgba(3, 4, 28, 0.1);
  text-align: left;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    box-shadow 0.25s ease;
}

.education-accordion__text {
  flex: 1;
  min-width: 0;
}

.education-accordion__title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.education-accordion__date {
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
}

.education-accordion__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 25px;
  line-height: 1;
}

/* Open accordion header */
.education-accordion__header.is-open {
  background: var(--accent-rose);
  color: var(--bg-primary);  
  box-shadow: 0 1px 3px rgba(3, 4, 28, 0.1);
}

/* Accordion content */
.education-accordion__content {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 24px 36px;
  overflow-wrap: anywhere;

  border-radius: 0 0 10px 10px;
  box-shadow: 0 1px 3px rgba(3, 4, 28, 0.1);
  margin-top: -1px;
  margin-bottom: 12px;
}

/* Mobile layout */
@media (max-width: 767.98px) {
  .education-accordion__header {
    padding: 18px 20px;
  }

  .education-accordion__title {
    font-size: 15px;
  }

  .education-accordion__date {
    font-size: 12px;
  }

  .education-accordion__content {
    padding: 20px;
  }
}
</style>
