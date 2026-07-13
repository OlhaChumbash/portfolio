<template>
  <LayoutMain>
      <HeroBlock/>
      <AboutMeInfo/>
      <MyProjects/>
      <SkillsBlock/>
      <WorkExperienceBlock/>
      <EducationBlock/>
      <CertificatesGallery/>
  </LayoutMain>
</template>

<script>
import LayoutMain  from "~~/layouts/LayoutMain.vue"; 
import HeroBlock from '~/components/index/HeroBlock.vue';
import AboutMeInfo from '~/components/index/AboutMeInfo.vue';
import MyProjects from '~~/components/index/MyProjects.vue';
import SkillsBlock from '~~/components/index/SkillsBlock.vue';
import WorkExperienceBlock from '~~/components/index/WorkExperienceBlock.vue';
import EducationBlock from '~~/components/index/EducationBlock.vue';
import CertificatesGallery from '~~/components/index/CertificatesGallery.vue';

export default {
  components: {
    LayoutMain,
    HeroBlock,
    AboutMeInfo,
    MyProjects,
    SkillsBlock,
    WorkExperienceBlock,
    EducationBlock,
    CertificatesGallery
  },
  setup() {
    useHead({
      title: "About Me - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
