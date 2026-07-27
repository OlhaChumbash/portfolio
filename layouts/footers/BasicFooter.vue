<template>
  <footer id="footer" role="contentinfo">
    <div class="footer__area" data-bg-color="footer-bg">
      <div class="footer__top">
        <div class="container">
          <div class="footer__wrapper">
            <div>
              <div class="footer__widget footer-col-1">
              </div>
            </div>
            <div class="footer__menu-wrapper">
              <div class="main-menu main-menu-ff-space d-flex justify-content-center align-items-center h-100">
                <nav id="mobile-menu" aria-label="Footer Navigation">
                  <FooterMenu />
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

              <div class="col-12 col-md-6 col-lg-4">
                <div class="footer__privacy_policy">
                  <p>
                    <NuxtLink class="policy-link" to="/privacy-policy">{{ $t('menu.privacy_policy') }}</NuxtLink>
                  </p>
                  <p>
                    <NuxtLink class="policy-link" to="/impressum">{{ $t('menu.impressum') }}</NuxtLink>
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6  col-lg-4">
                <div class="d-flex justify-content-center">
                  <div class="footer__copyright footer__social">
                    <div class="footer__social mb-4">
                      <Social color="light" />
                    </div>
                  </div>
                </div>
              </div>

              <div class=" col-12 col-lg-4">
                <div class="footer__copyright">
                  <p class="copyright-link">© {{ new Date().getFullYear() }} Olha Chumbash</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~~/components/social/Social.vue";
import FooterMenu from "~/layouts/footers/FooterMenu.vue";
export default {
  components: { Social, FooterMenu },
  computed: {
    privacyPdf() {
      const locale = this.$i18n.locale || "ua";
      return locale === "en"
        ? "/files/Privacy.Policy.Vinnytsia.University.INTITA.en.pdf"
        : "/files/Privacy.Policy.Vinnytsia.University.INTITA.ua.pdf";
    },
  },
};

</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils/_breakpoints.scss" as *;

.footer__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;

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
    margin: 0 auto;
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
