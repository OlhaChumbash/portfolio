<template>
  <LayoutOne>
    <HomeHero />
    <a name="university" style="margin-top: 50px"></a>
    <HomeAbout/>
    <HomeServices/>
    <HomeEvents/>
    <ServiceThreeAbout/>
    <HomeCounter/>
    <a name="faculties" style="margin-top: 50px"></a>
    <HomeTeams/>
    <a name="contacts" style="margin-top: 50px"></a>
    <ContactArea/>
<!--    <HomeFaq/>-->
<!--    <HomePortfolio/>-->
<!--    <HomeTestimonial/>-->
<!--    <HomeBlogs/>-->
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import HomeCounter from "~/components/counters/HomeCounter.vue";
import HomeServices from "~/components/services/HomeServices.vue";
import HomeEvents from "~/components/events/HomeEvents.vue";
import HomeTeams from "~/components/teams/HomeTeams.vue";
import HomeFaq from "~/components/faqs/HomeFaq.vue";
import HomePortfolio from "~/components/portfolios/HomePortfolio.vue";
import HomeTestimonial from "~/components/testimonials/HomeTestimonial.vue";
import HomeBlogs from "~/components/blogs/HomeBlogs.vue";
import ServiceThreeAbout from '~~/components/abouts/ServiceThreeAbout.vue';
import ContactArea from '~~/components/contact/ContactArea.vue';
useHead({
  title: "University INTITA",
}); 

</script>
