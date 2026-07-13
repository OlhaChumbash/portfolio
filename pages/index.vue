<template>
  <LayoutMain>
    <HeroBlock />
    <AboutMeInfo />
    <MyProjects />
    <SkillsBlock />
    <WorkExperienceBlock />
    <EducationBlock />
    <CertificatesGalleryBlock />
  </LayoutMain>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import LayoutMain from "~~/layouts/LayoutMain.vue";
import HeroBlock from "~/components/index/HeroBlock.vue";
import AboutMeInfo from "~/components/index/AboutMeInfo.vue";
import MyProjects from "~~/components/index/MyProjects.vue";
import SkillsBlock from "~~/components/index/SkillsBlock.vue";
import WorkExperienceBlock from "~~/components/index/WorkExperienceBlock.vue";
import EducationBlock from "~~/components/index/EducationBlock.vue";
import CertificatesGalleryBlock from "~~/components/index/CertificatesGalleryBlock.vue";

const { t } = useI18n();

useHead({
  title: () => t("seo.index.title"),
  meta: [
    {
      name: "description",
      content: () => t("seo.index.description"),
    },
  ],
});
</script>