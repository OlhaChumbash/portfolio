<template>
  <Layout>
    <LawyerBanner/>
    <LawyerAwards/>
    <!-- <LawyerCases/> -->
    <LawyerAbout/>
    <LawyerFunFact/>
    <!-- <LawyerHistory/> -->
    <lawyerVideo/>
    <LawyerServices/>
    <!-- <LawyerBlogs/>
    <LawyerTestimonial/>
    <LawyerTeams/>
    <LawyerCounter/> -->
    <LawyerContact/>
  </Layout>
</template>

<script setup>
import Layout from '~/layouts/LayoutTwo.vue';
import LawyerBanner from '~/components/hero-banner/LawyerBanner.vue';
import LawyerAwards from '~/components/awards/LawyerAwards.vue';
// import LawyerCases from '~/components/portfolios/LawyerCases.vue';
import LawyerAbout from '~/components/abouts/LawyerAbout.vue';
import LawyerFunFact from '~/components/fun-facts/LawyerFunFact.vue';
// import LawyerHistory from '~/components/history/LawyerHistory.vue';
import LawyerServices from '~/components/services/LawyerServices.vue';

import lawyerVideo from '~/components/video-area/LawyerVideo.vue';

// import LawyerBlogs from '~/components/blogs/LawyerBlogs.vue';
// import LawyerTestimonial from '~/components/testimonials/LawyerTestimonial.vue';
// import LawyerTeams from '~/components/teams/LawyerTeams.vue';
// import LawyerCounter from '~~/components/counters/LawyerCounter.vue';
import LawyerContact from '~~/components/contact/LawyerContact.vue';


useHead({
  title: "IT-Ліцей INTITA Програмуй майбутнє",
  description: "IT-Ліцей INTITA - це навчальний заклад, що готує майбутніх IT-фахівців. Ми пропонуємо інноваційні програми навчання, які допомагають учням розвивати навички програмування та технологічного мислення.",
}); 

</script>
