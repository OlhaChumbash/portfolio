<template>
  <LayoutMain>
    <section class="legal__page py-5 py-lg-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="legal__card">
              <h1 class="legal__title">{{ content.title }}</h1>
              <p v-if="content.intro" class="legal__intro">{{ content.intro }}</p>
              <div v-for="(block, index) in content.blocks" :key="index" class="legal__block">
                <h2 v-if="block.title" class="legal__block-title">{{ block.title }}</h2>
                <p v-for="(paragraph, paragraphIndex) in block.paragraphs" :key="paragraphIndex" class="legal__paragraph">
                  {{ paragraph }}
                </p>
                <ul v-if="block.list" class="legal__list">
                  <li v-for="(item, itemIndex) in block.list" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutMain>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import LayoutMain from "~~/layouts/LayoutMain.vue";

const props = defineProps({
  pageKey: {
    type: String,
    required: true,
  },
});

const { t } = useI18n();

const content = computed(() => t(`legal.${props.pageKey}`, { returnObjects: true }));

useHead({
  title: () => `${t(`legal.${props.pageKey}.title`)} | ${t("seo.index.title")}`,
  meta: [
    {
      name: "description",
      content: () => t(`legal.${props.pageKey}.intro`),
    },
  ],
});
</script>

<style scoped>
.legal__card {
  background: var(--tp-common-white);
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  padding: 36px;
}

.legal__title {
  font-size: 2rem;
  margin-bottom: 12px;
}

.legal__intro {
  color: var(--tp-text-3);
  margin-bottom: 24px;
  line-height: 1.7;
}

.legal__block {
  margin-top: 24px;
}

.legal__block-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.legal__paragraph,
.legal__list {
  line-height: 1.8;
  color: var(--tp-text-2);
}

.legal__list {
  padding-left: 18px;
}
</style>
