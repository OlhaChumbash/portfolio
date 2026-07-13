<template>
  <LayoutMain>
    <ProjectsHero :bg="heroBg"/>
    <ProjectCard :selected-category="selectedCategory"/> 
    <!-- <UniversityFloatingMessengers/> -->
  </LayoutMain>
</template>

<script setup>
import LayoutMain  from "~~/layouts/LayoutMain.vue"; 
import ProjectsHero from "~/components/projects/ProjectsHero.vue.vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";

import { ref } from 'vue'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig();
const base = config.app.baseURL || '/';
const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
const heroBg = `${cleanBase}/projects/projects-hero-bg.webp`

const selectedCategory = ref('all')

// usePageSeo("projects");

</script>
