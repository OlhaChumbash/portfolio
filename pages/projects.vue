<template>
  <LayoutMain>
    <StudentsProjectsHero :bg="heroBg"/>
    <ProjectsFilter v-model="selectedCategory" />
    <ProjectCard :selected-category="selectedCategory"/> 
    <!-- <UniversityFloatingMessengers/> -->
  </LayoutMain>
</template>

<script setup>
import LayoutMain  from "~~/layouts/LayoutMain.vue"; 
// import StudentsProjectsHero from "~/components/students-projects/StudentsProjectsHero.vue";
import ProjectCard from "~/components/students-projects/ProjectCard.vue";
// import heroBg from "/projects/projects-hero-bg.webp";
import ProjectsFilter from "~/components/students-projects/ProjectsFilter.vue";

import { ref } from 'vue'

const selectedCategory = ref('all')

// usePageSeo("projects");

</script>
