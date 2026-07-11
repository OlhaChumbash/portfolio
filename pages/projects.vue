<template>
  <LayoutMain>
    <ProjectsHero :bg="heroBg"/>
    <ProjectsFilter v-model="selectedCategory" />
    <ProjectCard :selected-category="selectedCategory"/> 
    <!-- <UniversityFloatingMessengers/> -->
  </LayoutMain>
</template>

<script setup>
import LayoutMain  from "~~/layouts/LayoutMain.vue"; 
import ProjectsHero from "~/components/projects/ProjectsHero.vue.vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";
// import heroBg from "/projects/projects-hero-bg.webp";
import ProjectsFilter from "~/components/projects/ProjectsFilter.vue";

import { ref } from 'vue'

const heroBg = "/projects/projects-hero-bg.webp"

const selectedCategory = ref('all')

// usePageSeo("projects");

</script>
