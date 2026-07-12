<template>
  <LayoutMain>
    <HeroBlock/>
    <AboutMeInfo/>
    <CertificatesGallery/>
    <WorkExperienceBlock/>
    <MyProjects/>
    <SkillsBlock/>
    <EducationBlock/>
    <!-- <personal-port-services :style_2="true" />
    <about-me-portfolio/>
    <about-me-testimonial/>
    <agency-brands :spacing="true" :style_2="true" />
    <about-cta/>  -->
   </LayoutMain>
</template>

<script>
import LayoutMain  from "~~/layouts/LayoutMain.vue"; 
import HeroBlock from '~/components/index/HeroBlock.vue';
import AboutMeInfo from '~/components/index/AboutMeInfo.vue';
import CertificatesGallery from '~~/components/index/CertificatesGallery.vue';
import WorkExperienceBlock from '~~/components/index/WorkExperienceBlock.vue';
import MyProjects from '~~/components/index/MyProjects.vue';
import SkillsBlock from '~~/components/index/SkillsBlock.vue';
import EducationBlock from '~~/components/index/EducationBlock.vue';

import AboutMeTopbar from '~~/components/abouts/about-page-com/AboutMeTopbar.vue';
import PersonalPortServices from "~~/components/services/PersonalPortServices.vue";
import AgencyBrands from '~~/components/brands/AgencyBrands.vue';
import AboutCta from '~~/components/cta/AboutCta.vue';
import AboutMePortfolio from '~~/components/abouts/about-page-com/AboutMePortfolio.vue';
import AboutMeTestimonial from '~~/components/testimonials/AboutMeTestimonial.vue';



export default {
  components: {
    LayoutMain,
    HeroBlock,
    CertificatesGallery,
    PersonalPortServices,
    AgencyBrands,
    AboutCta,
    AboutMeTopbar,
    AboutMeInfo,
    SkillsBlock,
    EducationBlock,
    AboutMePortfolio,
    MyProjects,
    AboutMeTestimonial,
    WorkExperienceBlock,
  },
  setup() {
    useHead({
      title: "About Me - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
