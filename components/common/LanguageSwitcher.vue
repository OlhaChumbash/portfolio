<template>
  <div class="footer__lang d-flex align-items-center justify-content-md-end position-relative m-0" @click="handleToggle" @mouseenter="open = true" @mouseleave="open = false" :class="[directionClass, themeClass, { 'is-open': open }]">
    <div class="footer__lang-img mr-15">
      <img class="rounded-circle" :src="currentFlag" :alt="currentLangLabel" />
    </div>

    <div class="footer__lang-wrapper">
      <span class="footer__lang-selected-lang tp-lang-toggle-2" :class="{ 'is-open': open }">
        {{ currentLangLabel }}
      </span>

      <ul :class="['footer__lang-list', 'tp-lang-list-2', open ? 'tp-lang-list-open-2' : '']">
        <li v-if="$i18n.locale !== 'uk'" @click="switchLang('uk')" class="footer__lang-item">
          <img class="footer__lang-flag" :src="flagUa" alt="Українська" />
          <span>
            {{ labelFormat === "short" ? "UK" : "Українська" }}
          </span>
        </li>

        <li v-if="$i18n.locale !== 'en'" @click="switchLang('en')" class="footer__lang-item">
          <img class="footer__lang-flag" :src="flagEn" alt="English" />
          <span>
            {{ labelFormat === "short" ? "EN" : "English" }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import flagUa from "~/assets/img/common/lang-ua.webp";
import flagEn from "~/assets/img/common/lang-en.webp";

export default {
  props: {
    labelFormat: {
      type: String,
      default: "full",
    },
    direction: {
      type: String,
      default: "up",
    },
    theme: {
      type: String,
      default: "dark", // або "light"
    },
  },
  data() {
    return {
      open: false,
      flagUa,
      flagEn,
    };
  },
  computed: {
    currentLangLabel() {
      if (this.labelFormat === "short") {
        return this.$i18n.locale === "uk" ? "UK" : "EN";
      }
      return this.$i18n.locale === "uk" ? "Українська" : "English";
    },
    currentFlag() {
      return this.$i18n.locale === "uk" ? this.flagUa : this.flagEn;
    },
    directionClass() {
      return this.direction === "down" ? "lang-dropdown-down" : "lang-dropdown-up";
    },
    themeClass() {
      return this.theme === "light" ? "lang-light" : "lang-dark";
    },
  },
  methods: {
    handleToggle() {
      this.open = !this.open;
    },
    switchLang(lang) {
      this.$i18n.setLocale(lang);
      localStorage.setItem("lang", lang);
      this.open = false;
    },
  },
  mounted() {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== this.$i18n.locale) {
      this.$i18n.setLocale(savedLang);
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/mixins.scss" as *;

.footer__lang:hover .footer__lang-selected-lang,
.footer__lang:hover .footer__lang-selected-lang:after {
  color: var(--tp-common-orange-5);
}

.footer__lang-list {
  position: absolute;
  right: 0;
  background-color: var(--tp-common-white);
  z-index: 11;
  padding: 10px 18px;
  border-radius: unset;
  visibility: hidden;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: all 0.25s ease;

  @include rtl {
    right: auto;
    left: 0;
  }

  &.tp-lang-list-open-2 {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }

  .footer__lang-item {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: var(--tp-theme-1);
    }

    .footer__lang-flag {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
}

.lang-dropdown-up {
  .footer__lang-list {
    bottom: 150%;
    top: auto;
    transform-origin: bottom center;

    &.tp-lang-list-open-2 {
      bottom: 112%;
    }
  }
}

.lang-dropdown-down {
  .footer__lang-list {
    top: 120%;
    bottom: auto;
    transform-origin: top center;
  }
}

.footer__lang-selected-lang {
  position: relative;
  padding-right: 18px;

  &::after {
    position: absolute;
    content: "\f107";
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(0);
    color: inherit;
    font-size: 14px;
    font-family: var(--tp-ff-fontawesome);
    transition: transform 0.3s ease;
  }

  &.is-open::after {
    transform: translateY(-50%) rotate(180deg);
  }
}

.lang-dark {
  .footer__lang-selected-lang {
    color: var(--tp-theme-2);

    &::after {
      color: var(--tp-theme-2);
    }
  }
}

.lang-light {
  .footer__lang-selected-lang {
    color: var(--tp-common-black);

    &::after {
      color: var(--tp-common-black);
    }
  }
}
</style>
