<template>
  <div class="social__wrapper" role="list">
    <a v-for="(item, i) in social_links" :key="i" :href="item.link" :target="item.target" class="social__link"
      :class="colorClass" role="listitem" :aria-label="item.name">
      <i v-if="!item.icomoon" :class="item.icon" class="social__icon"></i>
      <i v-else :class="item.icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "dark",
    },
  },
  computed: {
    colorClass() {
      return this.color === "light" ? "social__link--light" : "social__link--dark";
    },
  },

  data() {
    return {
      social_links: [
        {
          link: "https://www.linkedin.com/in/olha-chumbash-597568269/",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "LinkedIn",
        },
        {
          link: "https://github.com/OlhaChumbash",
          target: "_blank",
          icon: "fa-brands fa-github",
          name: "GitHub",
        },
        {
          link: "https://wa.me/380973246983",
          target: "_blank",
          icon: "fa-brands fa-whatsapp",
          name: "WhatsApp",
        },
        {
          link: "https://t.me/olya_from_m",
          target: "_blank",
          icon: "fa-brands fa-telegram",
          name: "Telegram",
        },
        {
          link: "https://www.instagram.com/olya_from_m?igsh=MXBlM2E5YzdwY2Rzbw==",
          target: "_blank",
          icon: "fa-brands fa-instagram",
          name: "Instagram",
        },
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;
.offcanvas__social .social__wrapper {
  display: flex;
  gap: 12px;
}
.social__link--dark {
  color: #757579;
}
.offcanvas__social .social__link--dark {
  color: var(--tp-common-white);
}
.offcanvas__social .social__link--dark:hover {
  transform: scale(1.1);
}
.social__link--dark:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.social__link--light:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.offcanvas__social .social__link {
  margin-right: unset;
  display: flex;
  justify-content: center;
  align-items: center;
}
.offcanvas__social a {
  width: 44px;
  height: 44px;
  border: unset;
}
.offcanvas__social a:hover {
  background: unset;
}
.offcanvas__social .social__icon {
  font-size: 22px;
}
</style>
