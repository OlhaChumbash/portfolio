<template>
  <footer id="footer" role="contentinfo">
    <div class="footer__area" data-bg-color="footer-bg">
      <div class="footer__top">
        <div class="container">
          <div class="footer__wrapper">
            <div>
              <div class="footer__widget footer-col-1">
                <div class="footer__logo">
                  <nuxt-link to="/" aria-label="Home page">
                    <img class="logo" src="~/assets/img/logo/logo-white.png" alt="logo" loading="lazy" />
                  </nuxt-link>
                </div>
                <div class="footer__widget-content">
                  <div class="footer__info">
                    <div class="footer__contact">
                      <div>
                        <span>
                          <a class="footer__contact-mail" href="mailto:olhachumbash@gmail.com" aria-label="Email me">
                            {{ $t("contacts.items.contact.email") }}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer__menu-wrapper">
              <div class="main-menu main-menu-ff-space">
                <nav id="mobile-menu" aria-label="Footer Navigation">
                   <menus />
                  <!-- <NavMenu role="navigation" /> -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner">
            <div class="row">

              <div class="col-sm-4">
                <div class="footer__privacy_policy">
                  <p>
                    <a :href="privacyPdf" class="policy-link" data-bs-toggle="modal"
                      data-bs-target="#privacyPolicyModal" aria-label="Open Privacy Policy">{{ $t("menu.privacy_policy")
                      }}</a>
                  </p>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="footer__copyright">
                  <p class="copyright-link">© {{ new Date().getFullYear() }} Olha Chumbash</p>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="text-sm-end">
                  <div class="footer__copyright footer__social">
                    <div class="footer__social">
                      <Social color="light" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- <PrivacyPolicyModal modal_id="privacyPolicyModal" :pdfSrc="privacyPdf" /> -->

  <!-- image popup start -->
  <!-- <image-popup ref="image_popup" :images="qrcodeImg" aria-label="Image popup" /> -->
  <!-- image popup end -->
</template>

<script>
// import ImagePopup from "~~/components/common/modals/ImagePopup.vue";
import Social from "~~/components/social/Social.vue";
// import qrcode from "~/assets/img/icon/qrcode.webp";
// import NavMenu from "./NavMenu.vue";
// import PrivacyPolicyModal from "~~/components/common/modals/PrivacyPolicyModal.vue";
import menus from "~/layouts/headers/menus.vue";

export default {
  // components: { Social, ImagePopup, NavMenu, PrivacyPolicyModal },
  components: { Social, menus},

  data() {
    return {
      // qrcodeImg: [qrcode],
    };
  },

  computed: {
    privacyPdf() {
      const locale = this.$i18n.locale || "ua";
      return locale === "en"
        ? "/files/Privacy.Policy.Vinnytsia.University.INTITA.en.pdf"
        : "/files/Privacy.Policy.Vinnytsia.University.INTITA.ua.pdf";
    },
  },

  methods: {
    handleImagePopup(index) {
      this.$refs.image_popup.showImg(index);
    },
  },
};

</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;

.footer__wrapper {
  display: flex;

  @media #{$xsx, $xs2} {
    flex-direction: column;
  }
}

.footer__widget {
  min-width: 215px;
  padding-right: 0;

  @media #{$xsx, $xs2} {
    text-align: center;
    padding-right: unset;
    margin-bottom: 30px;
  }
}

.footer__contact-call {
  margin-bottom: 19px;
}

.logo {
  width: 80px;
}

.footer__contact-mail {
  color: var(--tp-common-white);
}

.footer__menu-wrapper {
  margin: 0 0 0 -17px;

  @media #{$lg} {
    margin: 0 0 0 -81px;
  }

  @media #{$lg} {
    margin: 0 0 0 -81px;
  }

  @media #{$md, $sm} {
    margin: 0 0 0 auto;
  }

  @media #{$xs} {
    margin: unset;
  }
}

.main-menu {
  position: relative;
}

.menu__item {
  margin-right: 0 !important;
}

.footer__privacy_policy {
  text-align: center;

  .policy-link {
    color: var(--tp-text-3);
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0%;
  }
}

.col-sm-4:has(.footer__privacy_policy) {
  padding-left: 0;

  @media #{$xs} {
    padding-left: 12git px;
  }
}

.footer__copyright {
  text-align: center;

  @media #{$xsx, $xs2} {
    text-align: center;
  }
}

.footer__social {
  display: flex;
  justify-content: flex-end;

  @media #{$xs} {
    margin: 0 auto;
  }
}

.footer__area a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.footer__copyright a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.footer__bottom .container {
  border-top: 1px solid #FFFFFF33;
}
</style>
