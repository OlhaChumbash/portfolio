<template>
  <section class="projects-section mt-60">
    <div class="projects-section__grid">
      <SingleProjectCard v-for="(project, index) in projectsData" :key="project.id" :title="project.title"
        :description="project.description" :date="project.date" :items="project.items"
        :technologies="project.technologies" :link="project.link" :image="project.image" :is-even="index % 2 === 1"
        :button-text="$t('projects.view_project')" />
    </div>
  </section>
</template>

<script>
import SingleProjectCard from './SingleProjectCard.vue'
import ProjectsData from '~/mixins/ProjectsData'

export default {
  name: 'ProjectsSection',

  components: {
    SingleProjectCard,
  },

  mixins: [ProjectsData],
}
</script>