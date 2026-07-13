<template>
  <LayoutMain>
    privacy-policy
  </LayoutMain>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import LayoutMain from "~~/layouts/LayoutMain.vue";

const { t } = useI18n();

useHead({
  title: () => t("seo.privacy-policy.title"),
  meta: [
    {
      name: "description",
      content: () => t("seo.privacy-policy.description"),
    },
  ],
});
</script>