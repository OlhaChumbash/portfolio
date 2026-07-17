<template>
  <LayoutMain>
    <section class="legal__page pt-50 pt-md-110 pb-60 pb-md-140 py-5 py-lg-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="legal__card">
              <h1 class="legal__title">{{ t(`legal.${props.pageKey}.title`) }}</h1>
              <p v-if="hasIntro" class="legal__intro">
                {{ t(`legal.${props.pageKey}.intro`) }}
              </p>

              <div v-for="blockIndex in blockIndices" :key="blockIndex" class="legal__block">
                <h2 v-if="hasBlockTitle(blockIndex)" class="legal__block-title">
                  {{ t(`legal.${props.pageKey}.blocks.${blockIndex}.title`) }}
                </h2>

                <p v-for="pIndex in getParagraphIndices(blockIndex)" :key="pIndex" class="legal__paragraph">
                  <!-- Используем официальный компонент интерполяции. Линтер JSON будет доволен! -->
                  <i18n-t :keypath="`legal.${props.pageKey}.blocks.${blockIndex}.paragraphs.${pIndex}`" scope="global">
                    <!-- Связываем плейсхолдер {url} из JSON со слотом #url -->
                    <template #url>
                      <a 
                        href="https://ec.europa.eu/consumers/odr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="legal__link"
                      >
                        https://ec.europa.eu/consumers/odr
                      </a>
                    </template>
                  </i18n-t>
                </p>

                <ul v-if="hasList(blockIndex)" class="legal__list">
                  <li v-for="lIndex in getListIndices(blockIndex)" :key="lIndex">
                    {{ t(`legal.${props.pageKey}.blocks.${blockIndex}.list.${lIndex}`) }}
                  </li>
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
const { t, te, tm } = useI18n();
const hasIntro = computed(() => te(`legal.${props.pageKey}.intro`));

const blockIndices = computed(() => {
  const rawBlocks = tm(`legal.${props.pageKey}.blocks`);
  if (!rawBlocks || !Array.isArray(rawBlocks)) return [];
  return rawBlocks.map((_, index) => index);
});

const hasBlockTitle = (blockIndex) => {
  return te(`legal.${props.pageKey}.blocks.${blockIndex}.title`);
};

const getParagraphIndices = (blockIndex) => {
  const rawParagraphs = tm(`legal.${props.pageKey}.blocks.${blockIndex}.paragraphs`);
  if (!rawParagraphs || !Array.isArray(rawParagraphs)) return [];
  return rawParagraphs.map((_, index) => index);
};

const hasList = (blockIndex) => {
  return te(`legal.${props.pageKey}.blocks.${blockIndex}.list`);
};

const getListIndices = (blockIndex) => {
  const rawList = tm(`legal.${props.pageKey}.blocks.${blockIndex}.list`);
  if (!rawList || !Array.isArray(rawList)) return [];
  return rawList.map((_, index) => index);
};

useHead({
  title: () => {
    const pageTitle = te(`legal.${props.pageKey}.title`) ? t(`legal.${props.pageKey}.title`) : "";
    const siteTitle = t("seo.index.title") || "";
    return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  },
  meta: [
    {
      name: "description",
      content: () => (te(`legal.${props.pageKey}.intro`) ? t(`legal.${props.pageKey}.intro`) : ""),
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
  color: var(--bg-primary)
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
  color: var(--bg-primary);
}

.legal__paragraph,
.legal__list {
  line-height: 1.8;
  color: var(--tp-text-2);
}

.legal__list {
  padding-left: 18px;
}

/* Стилизация внешней ссылки */
:deep(.legal__link) {
  color: #0066cc;
  text-decoration: underline;
  word-break: break-all;
}
:deep(.legal__link:hover) {
  text-decoration: none;
}
</style>