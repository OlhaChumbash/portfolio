<template>
  <header>
    <div class="header__area">
     <!-- <div class="header__top-4 header__padding-4">
         <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
              <div class="logo">
                <NuxtLink to="/">
                   <img src="~/assets/img/logo/logo-black.webp" alt="INTITA IT-Ліцей" /> 
                </NuxtLink>
              </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-3 d-none d-lg-block">
              <div class="header__welcome">
                <p class="d-none d-xl-inline-block">{{ $t("header-main-page.accept-students") }}</p>
                <p>{{ $t("header-main-page.certificate") }}</p>
              </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-6">
              <div class="header__top-right-4 d-flex align-items-center justify-content-end">
                <div class="header__info-wrapper-4 d-flex align-items-center justify-content-end">
                  <div class="header__info-item d-none d-lg-flex align-items-center">
                    <div class="header__info-icon">
                      <NuxtLink to="tel:380674317424" class="header__linked-icon">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14.979 12.431C14.979 12.683 14.923 12.942 14.804 13.194C14.685 13.446 14.531 13.684 14.328 13.908C13.985 14.286 13.607 14.559 13.18 14.734C12.76 14.909 12.305 15 11.815 15C11.101 15 10.338 14.832 9.533 14.489C8.728 14.146 7.923 13.684 7.125 13.103C6.32 12.515 5.557 11.864 4.829 11.143C4.108 10.415 3.457 9.652 2.876 8.854C2.302 8.056 1.84 7.258 1.504 6.467C1.168 5.669 1 4.906 1 4.178C1 3.702 1.084 3.247 1.252 2.827C1.42 2.4 1.686 2.008 2.057 1.658C2.505 1.217 2.995 1 3.513 1C3.709 1 3.905 1.042 4.08 1.126C4.262 1.21 4.423 1.336 4.549 1.518L6.173 3.807C6.299 3.982 6.39 4.143 6.453 4.297C6.516 4.444 6.551 4.591 6.551 4.724C6.551 4.892 6.502 5.06 6.404 5.221C6.313 5.382 6.18 5.55 6.012 5.718L5.48 6.271C5.403 6.348 5.368 6.439 5.368 6.551C5.368 6.607 5.375 6.656 5.389 6.712C5.41 6.768 5.431 6.81 5.445 6.852C5.571 7.083 5.788 7.384 6.096 7.748C6.411 8.112 6.747 8.483 7.111 8.854C7.489 9.225 7.853 9.568 8.224 9.883C8.588 10.191 8.889 10.401 9.127 10.527C9.162 10.541 9.204 10.562 9.253 10.583C9.309 10.604 9.365 10.611 9.428 10.611C9.547 10.611 9.638 10.569 9.715 10.492L10.247 9.967C10.422 9.792 10.59 9.659 10.751 9.575C10.912 9.477 11.073 9.428 11.248 9.428C11.381 9.428 11.521 9.456 11.675 9.519C11.829 9.582 11.99 9.673 12.165 9.792L14.482 11.437C14.664 11.563 14.79 11.71 14.867 11.885C14.937 12.06 14.979 12.235 14.979 12.431Z"
                              stroke="#5C94C5"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path d="M12.5497 5.89986C12.5497 5.47986 12.2207 4.83586 11.7307 4.31086C11.2827 3.82786 10.6877 3.44986 10.0997 3.44986" stroke="#5C94C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.9997 5.9C14.9997 3.191 12.8087 1 10.0997 1" stroke="#5C94C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </NuxtLink>
                    </div>
                    <div class="header__info-content">
                      <h4>{{ $t("header-main-page.phone") }}</h4>
                      <p>
                        <a class="gray-color" href="tel:380674317424">{{ $t("header-main-page.phone_number") }}</a>
                      </p>
                    </div>
                  </div>
                  <div class="header__info-item d-none d-lg-flex align-items-center">
                    <div class="header__info-icon">
                      <NuxtLink :to="`mailto:${$t('header-main-page.mail_adress').replace('(at)', '@')}`" class="header__linked-icon">
                        <span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                              stroke="#5C94C5"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="#5C94C5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </NuxtLink>
                    </div>
                    <div class="header__info-content">
                      <h4>{{ $t("header-main-page.mail") }}</h4>
                      <p>
                        <a class="gray-color" :href="`mailto:${$t('header-main-page.mail_adress').replace('(at)', '@')}`">
                          {{ $t("header-main-page.mail_adress").replace("(at)", "@") }}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="header__hamburger ml-50 d-lg-none">
                  <button @click="handleOpenSidebar" type="button" class="hamburger-btn hamburger-btn-brown offcanvas-open-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>-->
      <div :class="`header__style-4 header__sticky ${isSticky ? 'header-sticky' : ''}`" id="header-sticky">
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center justify-content-between">
              <div class="logo-flex-width">
                <div class="logo">
                  <NuxtLink to="/">
                    <!-- <img src="~/assets/img/logo/logo.webp" alt="" /> -->
                  </NuxtLink>
                </div>
              </div>
              <div class="d-none d-lg-block menu-flex-width">
                <div class="main-menu main-menu-4 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="header__language-switcher language-switcher-flex-width">
                <LanguageSwitcher labelFormat="short" direction="down" />
              </div>
              <div class="button-flex-width">
                <div class="header__style-4-right d-flex align-items-center justify-content-end">
                  <div class="header__hamburger ml-50 d-lg-none">
                    <button @click="handleOpenSidebar" type="button" class="hamburger-btn hamburger-btn-brown offcanvas-open-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header__bottom-4 d-none d-lg-block">
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-8 col-xl-9 col-lg-9">
                <div class="main-menu main-menu-4 main-menu-ff-space">
                  <nav>
                    <!-- menus start -->
                    <div>
                      <menus />
                    </div>

                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-3 col-lg-3">
                <!-- <div class="header__btn-4 text-end">
                  <nuxt-link href="/contacts" class="tp-btn-brown">Free Consultation</nuxt-link>
                </div> -->
                <LanguageSwitcher labelFormat="short" direction="down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>

  <!-- off canvas full start -->
  <BurgerMenuMain ref="off_canvas" />
  <!-- off canvas full end -->
</template>

<script>
import menus from "~/layouts/headers/menus.vue";
import BurgerMenuMain from "~/components/common/off-canvas/BurgerMenuMain.vue";
import LanguageSwitcher from "~~/components/common/LanguageSwitcher.vue";

export default {
  components: { menus, BurgerMenuMain, LanguageSwitcher },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOpenSidebar() {
      this.$refs.off_canvas.openOffcanvas();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;

.logo-flex-width {
  width: 15%;
}

.menu-flex-width {
  width: 48%;
}

.language-switcher-flex-width {
  width: 15%;
}

.button-flex-width {
  width: 20%;
  display: flex;
  justify-content: flex-end;
}

.header__linked-icon:hover span {
  border: 1px solid var(--tp-common-orange-5);
}

.header__linked-icon:hover path {
  stroke: var(--tp-common-orange-5);
}

@media #{$md}, #{$sm}, #{$xsx}, #{$xs4} {
  .header__language-switcher {
    display: none;
  }
}
</style>
