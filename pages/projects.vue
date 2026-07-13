<template>
  <LayoutMain>
    <ProjectsHero :bg="heroBg" />
    <ProjectCard :selected-category="selectedCategory" />
  </LayoutMain>
</template>

<script setup>
import { ref } from "vue";
import { useRuntimeConfig } from "#imports";
import { useI18n } from "vue-i18n";

import LayoutMain from "~~/layouts/LayoutMain.vue";
import ProjectsHero from "~/components/projects/ProjectsHero.vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";

const { t } = useI18n();

useHead({
  title: () => t("seo.projects.title"),
  meta: [
    {
      name: "description",
      content: () => t("seo.projects.description"),
    },
  ],
});

const config = useRuntimeConfig();
const base = config.app.baseURL || "/";
const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;

const heroBg = `${cleanBase}/projects/projects-hero-bg.webp`;

const selectedCategory = ref("all");
</script>