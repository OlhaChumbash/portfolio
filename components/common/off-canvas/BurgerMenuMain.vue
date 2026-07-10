<template>
  <div :class="`offcanvas__area offcanvas__area-4 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-4 offcanvas-close-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/" target="_blank">
                  <!-- <img src="~/assets/img/logo/logo.webp" alt="logo"> -->
                  </nuxt-link>
              </div>
            </div>
           <div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>

            <div class="offcanvas__btn-switcher-wrapper">
              <div class="offcanvas__btn">
                <button class="tp-btn-offcanvas" data-bs-toggle="modal" :data-bs-target="`#requestModal`">{{ $t("slider.button") }}</button>
              </div>
              <div>
                <LanguageSwitcher labelFormat="short" direction="down" />
              </div>
            </div>

            
            
            <div class="offcanvas__contact mb-40">
              <!-- <p class="offcanvas__contact-call"><a href="tel:+380631892256">{{ $t("header-main-page.phone_number") }}</a></p>               -->
              <p class="offcanvas__contact-mail">
                <!-- <a :href="`mailto:${$t('header-main-page.mail_adress').replace('(at)','@')}`">
                          {{ $t('header-main-page.mail_adress').replace('(at)','@') }}
                 </a> -->
              </p>
            </div>
        </div>
      </div>

      <RequestModal modal_id="requestModal"/>
  </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import MobileMenus from './MobileMenus.vue';
import RequestModal from "~/components/common/modals/RequestModal.vue";
import LanguageSwitcher from "~~/components/common/LanguageSwitcher.vue";

  export default {
  components: { MobileMenus, RequestModal, LanguageSwitcher },
  data(){
    return {
      isOffCanvasOpen:false,
    }
  },
  methods:{
    openOffcanvas(){
      this.isOffCanvasOpen = true
    },
    closeOffcanvas(){
      this.isOffCanvasOpen = false
    }
  },
  }
</script>

<style scoped>
.offcanvas__btn-switcher-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.tp-btn-offcanvas {
  color: var(--tp-common-black);
  background-color: var(--tp-common-white);
}

.tp-btn-offcanvas:active {
  color: var(--tp-common-white);
  background-color: var(--tp-common-blue-7);
}
</style>
