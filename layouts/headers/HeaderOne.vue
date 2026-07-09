 <template>
  <header>
    <div
      :class="`header__area ${
        header_solid ? 'header__white-solid' : 'header__transparent'
      } ${header_solid_2 ? 'header__white-solid-2 header__transparent' : ''} 
      ${header_black ? 'header__black' : ''}`"
    >
      <div v-if="top_bar" class="header__top header__border">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-10  d-none d-lg-block">
              <header-info />
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-2">
              <div
                class="header__top-right d-flex justify-content-end align-items-center"
              >
                <div class="header__lang ml-30">
                  <Language />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="`header__bottom header__sticky ${
          header_solid ? '' : `header__bottom-border${transparent ? '-3' : ''}`
        } ${isSticky ? 'header-sticky' : ''}`"
        id="header-sticky"
      >
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
          <div class="row"> <div class="header-main-content d-flex justify-content-between align-items-center w-100 flex-wrap">
          <div class="col-auto"> <div class="logo logo-border">
              <nuxt-link href="/" v-if="!header_solid && !header_black">
                <img class="logo-light" src="~/assets/img/logo/logo.svg" alt="logo" />
                <img class="logo-dark" src="~/assets/img/logo/logo-black.svg" alt="logo" />
              </nuxt-link>
              <nuxt-link href="/" v-if="header_solid">
                <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
              </nuxt-link>
              <nuxt-link href="/" v-if="header_black">
                <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
              </nuxt-link>
            </div>
          </div>

          <div class="d-none d-lg-flex align-items-center gap-4"> <div class="main-menu pl-55 main-menu-ff-space">
              <div class="">Приймаємо учнів 8–11 класів</div> </div>
            <div class="border-start border-secondary ps-3">Свідоцтво державного зразка</div>
          </div>

          <div class="d-flex align-items-center flex-wrap gap-3 mt-2 mt-md-0">
            <div class="d-flex align-items-center gap-2">
              <div class="rounded-circle border border-primary d-flex justify-content-center align-items-center icon-circle">
                <i class="bi bi-telephone text-primary"></i>
              </div>
              <span class="contact-text">
                <strong>Телефон:</strong>
                <span class="d-block contact-value">+38 063 189 22 56</span>
              </span>
            </div>

            <div class="d-flex align-items-center gap-2">
              <div class="rounded-circle border border-primary d-flex justify-content-center align-items-center icon-circle">
                <i class="bi bi-envelope text-primary"></i>
              </div>
              <span class="contact-text">
                <strong>Email:</strong>
                <span class="d-block contact-value">intita.hr@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>

    <!-- search popup start -->
    <SearchPopup ref="SearchPopup" />
    <!-- search popup end -->
  </header>

  <!-- off canvas full start -->
  <off-canvas-main ref="off_canvas" v-if="!commonOffcanvas"/>
  <!-- off canvas full end -->

  <!-- commonOffcanvas start -->
  <off-canvas-six ref="off_canvas" v-if="commonOffcanvas"/>
  <!-- commonOffcanvas end -->
</template>

<script>
import menus from "./menus.vue";
import HeaderInfo from "./component/HeaderInfo.vue";
import Language from "./component/Language.vue";
import SearchPopup from "./component/SearchPopup.vue";
import { useUtilsStore } from '~~/store/utils';
import OffCanvasMain from '~~/components/common/off-canvas/OffCanvasMain.vue';
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';

export default {
  data() {
    return {
      isSticky: false,
    };
  },
  props: {
    header_solid: {
      type: Boolean,
      default: false,
    },
    header_solid_2: {
      type: Boolean,
      default: false,
    },
    header_black: {
      type: Boolean,
      default: false,
    },
    top_bar: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    commonOffcanvas: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    menus,
    HeaderInfo,
    Language,
    SearchPopup,
    OffCanvasMain,
    OffCanvasSix,
  },
  methods: {
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  setup () {
    const utils = useUtilsStore();
    return {utils}
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
