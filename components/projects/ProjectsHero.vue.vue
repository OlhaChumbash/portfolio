<template>
  <section
    class="breadcrumb__area breadcrumb__style-10 p-relative"
    role="region"
    aria-labelledby="breadcrumb-title"
  >
    <div
      class="breadcrumb__bg-4 breadcrumb__bg-overlay m-img include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
      aria-hidden="true"
    ></div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="breadcrumb__content text-center">

          <h5
            class="breadcrumb__pretitle"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
          >
            {{ preTitleText.toUpperCase() }}
          </h5>

          <h1
            class="breadcrumb__title"
            id="breadcrumb-title"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
          >
            {{ titleText.toUpperCase() }}
          </h1>

          <nav
            class="breadcrumb__list"
            aria-label="Хлібні крихти"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
          >

            <span class="breadcrumb__item">
              <NuxtLink to="/">
                {{ $t("projects.hero.breadcrumb_main") }}
              </NuxtLink>
            </span>

            <span class="dvdr">
              <i class="fa-solid fa-circle-small"></i>
            </span>

            <span
              class="breadcrumb__item breadcrumb__item-current-page"
              aria-current="page"
            >
              {{ breadcrumbDefault }}
            </span>

          </nav>

          </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from "vue";
import sal from "sal.js";


const props = defineProps({
  preTitle: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "",
  },

  breadcrumbs: {
    type: String,
    default: "",
  },

  bg: {
    type: String,
    default: "",
  },
});


const { t } = useI18n();


const preTitleText = computed(() =>
  props.preTitle || t("projects.hero.pre_title")
);


const titleText = computed(() =>
  props.title || t("projects.hero.title")
);


const breadcrumbDefault = computed(() =>
  props.breadcrumbs || t("projects.hero.breadcrumb_current")
);


onMounted(() => {
  sal();
});
</script>


<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;

.breadcrumb {

  &__area {
    padding-top: 165px;
    height: 582px;

    @media #{$lg, $md, $sm} {
      padding-top: 135px;
    }

    @media #{$xs} {
      padding: 170px 0 100px;
      height: auto;
    }
  }


  &__content {
    width: 100%;
  }


  &__pretitle {
    color: var(--tp-common-white);
    line-height: 26px;
    font-weight: 500;
    letter-spacing: 8px;
    margin-bottom: 32px;

    @media #{$xs} {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 6px;
    }
  }


  &__title {
    font-family: var(--tp-ff-gotham);
    margin-bottom: 32px;

    @media #{$lg} {
      font-size: 60px;
      line-height: 60px;
    }

    @media #{$md} {
      font-size: 55px;
      line-height: 55px;
    }

    @media #{$sm} {
      font-size: 45px;
      line-height: 45px;
    }

    @media #{$xs} {
      font-size: 35px;
      line-height: 35px;
    }
  }


  &__list {
    margin-bottom: 48px;
  }


  &__item {
    line-height: 24px;
  }


  &__item-current-page {
    opacity: 0.7;
  }

}
</style>