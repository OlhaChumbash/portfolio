<template>
  <div class="project-card" :class="{ 'project-card--reverse': isEven }">

    <div class="project-card__image-container">
      <ProjectMediaCard :image="image" :title="title" :code-snippet="codeSnippet" />
    </div>

    <div class="project-card__content">
      <div class="project-card__content-top d-flex align-items-center justify-content-between">
        <h3 class="project-card__title">
          {{ title }}
        </h3>
        <div class="pr-20">
          <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" class="project-card__button"
            aria-label="Open project">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="24.5" stroke="#D49BB3" />
              <path
                d="M19.0006 29.6666C18.6331 30.0341 18.6331 30.6299 19.0006 30.9974C19.3681 31.3649 19.9639 31.3649 20.3314 30.9974L19.666 30.332L19.0006 29.6666ZM31.2737 19.6654C31.2737 19.1457 30.8524 18.7244 30.3327 18.7244L21.8637 18.7244C21.344 18.7244 20.9227 19.1457 20.9227 19.6654C20.9227 20.1851 21.344 20.6064 21.8637 20.6064L29.3917 20.6064L29.3917 28.1344C29.3917 28.6541 29.813 29.0754 30.3327 29.0754C30.8524 29.0754 31.2737 28.6541 31.2737 28.1344L31.2737 19.6654ZM19.666 30.332L20.3314 30.9974L30.9981 20.3308L30.3327 19.6654L29.6673 19L19.0006 29.6666L19.666 30.332Z"
                fill="#D49BB3" />
            </svg>
          </a>
        </div>
      </div>

      <div class="mb-30 blog__meta-10 has-date">
        <span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg> {{ date }}
        </span>
      </div>

      <div class="project-card__description">
        <p> {{ description }} </p>
      </div>

      <ul v-if="items.length" class="project-card__list">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>

      <div v-if="technologies.length" class="project-card__technologies">
        <div class="technology-list pb-30">
          <div v-for="(technology, index) in technologies" :key="index" class="technology-item">
            <i :class="[technology.icon, 'colored']"></i>
            <span>
              {{ technology.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProjectMediaCard from './ProjectMediaCard.vue';

export default {
  name: "SingleProjectCard",
  components: {
    ProjectMediaCard
  },
  props: {
    title: String,
    description: String,
    date: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    technologies: {
      type: Array,
      default: () => []
    },
    image: String,
    link: {
      type: String,
      required: true,
    },
    isEven: {
      type: Boolean,
      default: false
    },
    codeSnippet: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.project-card {
  display: flex;
  max-width: 1548px;
  overflow: hidden;
  margin-left: 0;
  margin-right: auto;
  gap: 56px;
}

.project-card--reverse {
  flex-direction: row-reverse;
  margin-left: auto;
  margin-right: 0;
  gap: 56px;
}

.project-card__image-container {
  width: 876px;
  height: 548px;
  flex-shrink: 0;
  overflow: visible;
}

.project-card__list {
  list-style-type: none;
  font-size: 18px;
  margin-bottom: 32px;
  padding-left: 10px;
  border-left: 2px solid var(--accent-green);
}

.project-card__list li {
  margin-bottom: 10px;
}

.project-card__content {
  width: calc(100% - 876px - 56px);
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
  box-sizing: border-box;
}

.project-card:not(.project-card--reverse) .project-card__content {
  padding-right: 40px;
}

.project-card--reverse .project-card__content {
  padding-left: 40px;
}

.project-card__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0;
}

.project-card__description {
  margin-bottom: 32px;
}

.project-card__description p {
  font-size: 18px;
  line-height: 1.7;
  margin: 0;
}

.project-card__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.project-card__button circle,
.project-card__button path {
  transition: all 0.3s ease;
}

.project-card__button:hover circle {
  fill: var(--accent-rose);
  stroke: var(--accent-rose);
}

.project-card__button:hover path {
  fill: #fff;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technology-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 14px;
}

.technology-item i {
  font-size: 24px;
}

@media (max-width: 1548px) {
  .project-card {
    max-width: 100%;
  }

  .project-card__image-container {
    height: auto;
    aspect-ratio: 876 / 548;
  }

  .project-card__content {
    width: 40%;
    min-width: 300px;
  }
}

@media (max-width: 1200px) {

  .project-card,
  .project-card--reverse {
    gap: 20px;
  }

  .project-card__image-container {
    width: 60%;
  }

  .project-card__image-container :deep(.project-card__image-container),
  .project-card__image-container :deep(.flip-card-inner),
  .project-card__image-container :deep(.flip-card-front),
  .project-card__image-container :deep(.flip-card-back),
  .project-card__image-container :deep(.project-card__image),
  .project-card__image-container :deep(.terminal) {
    width: 100% !important;
    height: 100% !important;
  }

  .project-card__content {
    width: 45%;
  }
}

@media (max-width: 992px) {

  .project-card,
  .project-card--reverse {
    flex-direction: column;
    gap: 0px;
    margin: 0;
  }

  .project-card__image-container {
    width: 100%;
    height: auto;
    aspect-ratio: 876 / 548;
    max-height: 500px;
  }

  .project-card__image-container :deep(.project-card__image-container),
  .project-card__image-container :deep(.flip-card-inner),
  .project-card__image-container :deep(.flip-card-front),
  .project-card__image-container :deep(.flip-card-back),
  .project-card__image-container :deep(.project-card__image),
  .project-card__image-container :deep(.terminal) {
    width: 100% !important;
    height: 100% !important;
  }

  .project-card__content {
    width: 100%;
    padding: 20px 30px 60px !important;
  }

  .project-card__title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .project-card__content {
    padding: 10px 25px 90px !important;
  }
}

@media (max-width: 576px) {
  .project-card__image-container {
    aspect-ratio: 4 / 3;
    max-height: 300px;
  }

  .project-card__description p {
    font-size: 15px;
    line-height: 1.6;
  }

  .project-card__image-container :deep(.terminal-close) {
    padding: 3px 8px;
    font-size: 11px;
    border-radius: 4px;
  }

  .project-card__image-container :deep(.terminal-body code) {
    font-size: 12px;
  }
}
</style>