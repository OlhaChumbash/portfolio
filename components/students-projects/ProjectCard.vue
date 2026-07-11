<template>
  <section class="projects-section">     
      <div class="projects-section__grid">
        <SingleProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id || index"
          :title="project.title"
          :items="project.items"
          :link="project.link"
          :image="project.image"
          :button-text="buttonText"
          :is-even="index % 2 === 1"
        />     
    </div>
  </section>
</template>

<script>
import SingleProjectCard from './SingleProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: {
    SingleProjectCard
  },
  computed: {
    dynamicProjects() {
      const projects = []
      let projectIndex = 1
      
      while (true) {
        const projectKey = `project_${projectIndex}`
        const title = this.$t(`projects.${projectKey}.title`, '')
        
        if (!title) break
        const items = []
        let itemIndex = 1
        
        while (true) {
          const itemKey = `item_${itemIndex}`
          const item = this.$t(`projects.${projectKey}.${itemKey}`, '')
          
          if (item) {
            items.push(item)
            itemIndex++
          } else {
            break
          }
        }
        
        const link = this.$t(`projects.${projectKey}.link`, '').trim()
        const image = this.$t(`projects.${projectKey}.image`, '')
        const category = this.$t(`projects.${projectKey}.category`, '')
        
        if (items.length > 0) {
          projects.push({
            id: projectIndex,
            title: title,
            items: items,
            link: link,
            image: image,
            category: category
          })
        }        
        projectIndex++
      }
      
      return projects
    },

    filteredProjects() {
      if (this.selectedCategory === 'all') {
        return this.dynamicProjects
      }

      return this.dynamicProjects.filter(
        project => project.category === this.selectedCategory
      )
    },
    
    buttonText() {
      return this.$t('projects.button') || 'Переглянути проєкт'
    }
  },
  props: {
    title: {
      type: String,
      default: 'Наші проєкти'
    },
    subtitle: {
      type: String,
      default: ''
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    selectedCategory: {
      type: String,
      default: 'all'
    }
  }
}
</script>

<style scoped>
.projects-section {
  margin: 0 auto;
  padding: 120px 0;
  max-width: 1920px;

}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.projects-section__grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 60px 0;
  }
  
  .projects-section__grid {
    gap: 40px;
  }
}

@media (max-width: 576px) {
  .projects-section {
    padding: 40px 0;
  }
  
  .projects-section__grid {
    gap: 30px;
  }
}
</style>