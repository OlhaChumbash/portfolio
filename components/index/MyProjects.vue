<template>
  <section id="my-projects" class="elements__carousel-area pt-50 pt-md-110 pb-60 pb-md-140">
    <div class="container">
      <div class="row projects__titles-container">
        <div class="col-xxl-7 col-xl-7">
          <div class="tp-section-wrapper-3">
            <h2 class="projects__title">{{ $t("projects.title") }}</h2>
          </div>
        </div>

        <div class="col-xxl-5 col-xl-5 mt-10">
          <div class="projects__button_container d-flex justify-content-center">
            <nuxt-link to="projects" aria-label="Open page with all projects"
              class="tp-btn-green tp-style-border projects__button">
              {{ $t("projects.button") }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12">
        <div class="elements__carousel p-relative">
          <Carousel ref="detailsSlider" :items-to-show="4" :wrap-around="true" :snapAlign="'start'" :autoplay="5000"
            :breakpoints="{
              992: { itemsToShow: 4 },
              700: { itemsToShow: 2 },
              0: { itemsToShow: 1 }
            }" class="elements__carousel-active">
            <Slide v-for="project in projectsData" :key="project.id" class="project-slide">
              <div class="project-card">
                <img class="project-card__img" :src="project.image" alt="" />

                <div class="project-overlay">
                  <a :href="project.link" target="_blank" class="project-overlay__btn" aria-label="Open project"
                    role="button" tabindex="0">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="24.5" stroke="#DF5430" />
                      <path
                        d="M19.0006 29.6666C18.6331 30.0341 18.6331 30.6299 19.0006 30.9974C19.3681 31.3649 19.9639 31.3649 20.3314 30.9974L19.666 30.332L19.0006 29.6666ZM31.2737 19.6654C31.2737 19.1457 30.8524 18.7244 30.3327 18.7244L21.8637 18.7244C21.344 18.7244 20.9227 19.1457 20.9227 19.6654C20.9227 20.1851 21.344 20.6064 21.8637 20.6064L29.3917 20.6064L29.3917 28.1344C29.3917 28.6541 29.813 29.0754 30.3327 29.0754C30.8524 29.0754 31.2737 28.6541 31.2737 28.1344L31.2737 19.6654ZM19.666 30.332L20.3314 30.9974L30.9981 20.3308L30.3327 19.6654L29.6673 19L19.0006 29.6666L19.666 30.332Z"
                        fill="#DF5430" />
                    </svg>
                  </a>

                  <div class="project-overlay__info">
                    <h4 class="project-title">{{ project.title }}</h4>

                    <p v-if="project.description" class="project-subtitle">
                      {{ project.description }}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Pagination class="carousel-scrollbar" />
            </template>

          </Carousel>

          <div class="elements-arrow">
            <button @click="handlePrev" type="button" class="elements-button-prev slick-prev slick-arrow" tabindex="0">
              <i class="fa-solid fa-angle-left"></i>
            </button>

            <button @click="handleNext" type="button" class="elements-button-next slick-next slick-arrow" tabindex="0">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ProjectsData from '~/mixins/ProjectsData'

export default {
  components: {
    Carousel,
    Slide,
    Pagination
  },

  mixins: [ProjectsData],

  methods: {
    handlePrev() {
      this.$refs.detailsSlider?.prev();
    },

    handleNext() {
      this.$refs.detailsSlider?.next();
    },

  },

};
</script>

<style lang="scss" scoped>
.elements__carousel-area {
  a:focus-visible,
  button:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, 0.25);
  }

  .projects__titles-container {
    margin-bottom: 56px;
  }

  .projects__button_container {
    .tp-style-border.projects__button {
      margin-top: 10px;
    }

    @media (max-width: 1200px) {
      justify-content: flex-start !important;
    }

    @media (max-width: 767px) {
      justify-content: center !important;
    }
  }

  .projects__title {
    font-size: 60px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0px;
    margin-bottom: 32px;

    @media (max-width: 767px) {
      font-size: 45px;
      text-align: center;
    }

    @media (max-width: 575px) {
      font-size: 35px;
      margin-bottom: 12px;
    }
  }


  .tp-style-border.projects__button:hover {
    color: #fff;
  }

  ::v-deep(.elements__carousel-active) {
    margin-left: -8px;
    margin-right: -8px;
  }

  ::v-deep(.carousel__slide) {
    padding: 0 8px;
    box-sizing: border-box;
  }
}
.project-subtitle{
  text-align: left;
}

.elements__carousel {

  .elements-arrow,
  .elements-img-arrow {
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      background-color: white;
      color: black;
      border-radius: 50%;

      &:hover,
      &:active {
        color: gray !important;
        background-color: white !important;
        border-color: gray !important;

        @media (max-width: 1399px) {
          display: none;
        }
      }

      i {
        display: block;
        width: 20px;
        height: 15px;
        margin: 0 auto;
        background-image: url('/icons/arrow.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        content: '';
      }
    }

    .elements-button-prev i {
      transform: rotate(180deg);
    }

    .elements-button-prev,
    .slick-prev {
      left: 225px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .elements-button-next,
    .slick-next {
      right: 225px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .fa-angle-right:before,
  .fa-angle-left:before {
    content: "";
  }
}

.project-card {
  position: relative;
  overflow: hidden;
  width: 465px;
  height: 550px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.96);
    opacity: 0;
    transition: opacity 0.3s ease;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    pointer-events: none;
  }

  &:hover .project-overlay {
    opacity: 0.96;
    pointer-events: auto;
  }

  .project-overlay__btn {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, border-color 0.2s ease;

    ::v-deep(&:focus-visible) {
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    ::v-deep circle {
      stroke: var(--accent-green) !important;
      fill: transparent !important;
      transition: fill 0.2s ease, stroke 0.2s ease;
    }

    ::v-deep path {
      fill: var(--accent-green) !important;
      transition: fill 0.2s ease;
    }

    &:hover {
      ::v-deep circle {
        fill: var(--accent-green) !important;
        stroke: #ffffff !important;
      }

      ::v-deep path {
        fill: #ffffff !important;
      }
    }
  }

  .project-overlay__info {
    color: white;
    padding: 0 40px 32px;
  }

  .project-title {
    font-family: 'Gotham Pro', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--tp-common-black);
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 16px;
  }
}

.carousel__pagination.carousel-scrollbar {
  padding-left: 0;
}

::v-deep(.carousel__pagination) {
  margin-top: 64px;
}

::v-deep(.carousel__pagination-button--active) {
  background-color: var(--accent-green) !important;
}

::v-deep(.elements__carousel .carousel__pagination li .carousel__pagination-button) {
  height: 4px;
  min-height: 4px;
  width: 248px;
  margin: 0;
  border-radius: 0;
  padding: 0;
  background-color: #E0E0E0;

  @media (max-width: 1300px) {
    width: 120px;
  }

  @media (max-width: 767px) {
    width: 50px;
  }
}
</style>
