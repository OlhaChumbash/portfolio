<template>
  <header>
    <div class="header__area">
      <div :class="`header__bottom-6 header__padding-6 header__sticky header__sticky-white ${isSticky ? 'header-sticky' : ''}`" id="header-sticky">
        <div class="container-fluid">
          <div class="mega-menu-wrapper p-relative">
            <div class="header-flex container">
              <div class="logo-flex-width">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.ico" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
              <div class="d-none d-lg-block menu-flex-width">
                <div class="main-menu main-menu-6">
                  <nav id="mobile-menu">
                    <menus />
                  </nav>
                </div>
              </div>
              <button class="mobile-menu-toggle d-lg-none" type="button" @click="handleOpenSidebar" aria-label="Open mobile menu">
                <span></span><span></span><span></span>
              </button>
              <div class="header__language-switcher language-switcher-flex-width">
                <LanguageSwitcher labelFormat="short" direction="down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductModal modal_id="requestModal"/>
  </header>

  <BurgerMenuMain ref="mobileMenu" />
</template>

<script>
import menus from "~/layouts/headers/menus.vue";
import BurgerMenuMain from "~/components/common/off-canvas/BurgerMenuMain.vue";
import ProductModal from '~/components/common/modals/ProductModal.vue'

import LanguageSwitcher from "~~/components/common/LanguageSwitcher.vue";

export default {
  components: { menus, BurgerMenuMain, ProductModal, LanguageSwitcher },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    handleSticky() {
      const header = document.getElementById("header-sticky");
      if (window.scrollY > 80) {
        this.isSticky = true;
        document.body.style.paddingTop = `${header.offsetHeight}px`;
      } else {
        this.isSticky = false;
        document.body.style.paddingTop = 0;
      }
    },
    handleOpenSidebar() {
      this.$refs.mobileMenu?.openOffcanvas();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;

.header__area {
  background-color: var(--tp-common-blue-9);
  border-bottom: 1px solid var(--tp-grey-19);
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-sticky {
  border-bottom: 1px solid var(--tp-grey-19);
}

.logo-flex-width {
  width: 17%;
}
.logo img{
  width: 60px;
}
.menu-flex-width {
  width: 68%;
}
.main-menu{
  text-align: end;
}
.language-switcher-flex-width {
  width: 15%;
}

.container-fluid {
  padding: unset;
}

@media #{$md}, #{$sm}, #{$xsx}, #{$xs4} {
  .header__language-switcher {
    display: none;
  }
}

.mobile-menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  padding: 6px;
  margin-right: 8px;
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--tp-common-black);
  margin: 4px 0;
}

@media (max-width: 991px) {
  .mobile-menu-toggle {
    display: inline-block;
  }
}

</style>