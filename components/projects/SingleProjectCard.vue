<template>
  <div class="project-card" :class="{ 'project-card--reverse': isEven }">

    <div class="project-card__image-container">
      <img 
        :src="image" 
        :alt="title" 
        class="project-card__image" 
      />
    </div>


    <div class="project-card__content">

      <h3 class="project-card__title">
        {{ title }}
      </h3>

      <span class="project-card__date">
        {{ date }}
      </span>


      <div class="project-card__description">
        <p>
          {{ description }}
        </p>
      </div>


      <ul 
        v-if="items.length"
        class="project-card__list"
      >
        <li
          v-for="(item,index) in items"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>


      <div 
        v-if="technologies.length"
        class="project-card__technologies"
      >

        <h4>
          Технології
        </h4>

        <div class="technology-list">

          <span
            v-for="(technology,index) in technologies"
            :key="index"
            class="technology-item"
          >
            {{ technology }}
          </span>

        </div>

      </div>


 <a
  v-if="link"
  :href="link"
  target="_blank"
  rel="noopener noreferrer"
  class="project-card__button"
>
  {{ $t('projects.view_project') }}
</a>

    </div>

  </div>
</template>


<script>
export default {
  name: "SingleProjectCard",
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

  link: String,

  image: String,

 link: {
  type: String,
  required: true,
},

  isEven: {
    type: Boolean,
    default: false
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
  gap: 96px;
}
.project-card--reverse {
  flex-direction: row-reverse;
  margin-left: auto;
  margin-right: 0;
  gap: 96px;
}
.project-card__image-container {
  width: 876px;
  height: 548px;
  flex-shrink: 0;
  overflow: hidden;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.project-card__content {
  width: calc(100% - 876px - 96px);
  display: flex;
  flex-direction: column;
  padding-top: 56px;
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
  color: #03041c;
  line-height: 1.2;
  margin-bottom: 32px;
}
.project-card__description {
  margin-bottom: 32px;
}
.project-card__description p {
  font-size: 18px;
  line-height: 1.7;
  color: #525252;
  margin: 0;
}

.project-card__button {
  display: inline-block;
  padding: 8px 40px;
  color: #03041c;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 1px solid #03041c;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  margin-top: auto;
}

.project-card__button:hover {
  transform: translateY(-2px);
  background-color: #03041c;
  color: white;
}

@media (max-width:1548px) {
  .project-card {
    max-width: 100%;
  }
  .project-card__image-container {
    width: 60%;
    height: auto;
    aspect-ratio: 876 / 548;
  }
  .project-card__content {
    width: 40%;
    min-width: 300px;
  }
}
@media (max-width:1200px) {
  .project-card,
  .project-card--reverse {
    gap: 40px;
  }

  .project-card__image-container {
    width: 55%;
  }

  .project-card__content {
    width: 45%;
  }
}

@media (max-width:992px) {

  .project-card,
  .project-card--reverse {
    flex-direction: column;
    gap: 40px;
    margin: 0;
  }

  .project-card__image-container {
    width: 100%;
    height: auto;
    aspect-ratio: 876 / 548;
    max-height: 500px;
  }
  .project-card__content {
    width: 100%;
    padding: 40px 30px !important;
  }
  .project-card__title {
    font-size: 28px;
  }
}

@media (max-width:768px) {
  .project-card__content {
    padding: 35px 25px !important;
  }
}

@media (max-width:576px) {

  .project-card__image-container {
    aspect-ratio: 4 / 3;
    max-height: 300px;
  }

  .project-card__content {
    padding: 30px 20px !important;
  }

  .project-card__description p {
    font-size: 15px;
    line-height: 1.6;
  }


}
</style>