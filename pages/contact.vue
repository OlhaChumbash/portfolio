<template>
  <LayoutMain>
    <ContactArea />
  </LayoutMain>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LayoutMain from "~~/layouts/LayoutMain.vue";
import ContactArea from "~~/components/contact-page/ContactArea.vue";

const { t } = useI18n();

useHead({
  title: () => t("seo.contact.title"),
  meta: [
    {
      name: "description",
      content: () => t("seo.contact.description"),
    },
  ],
});
</script>