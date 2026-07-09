<template>
  <section
    ref="videoAreaSection" :class="`video__area pt-145 pb-125 include-bg ${el_style ? 'mb-120' : ''}`"
    data-overlay="dark"
    data-overlay-opacity="6"
    :style="{ backgroundImage: `url(${video_bg})` }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10">
          <div class="video__content text-center">
            <div class="video__play">
              <a href="#" class="video__play-btn tp-pulse-border popup-video">
                <img src="~/assets/img/licey/play_button.png" alt="" />
              </a>
            </div>
            <h3 class="video__title">Активність учнів під час навчання</h3>
            <div class="video__btn">
              <button
                type="button"
                class="tp-btn white-color blue-clolor-bg"
                data-bs-toggle="modal"
                :data-bs-target="`#requestModal`"
              >
                Дізнатися більше
                <i class="fa-regular fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RequestModal modal_id="requestModal" />
    </div>
  </section>
</template>

<script>
import video_bg from "~/assets/img/licey/school.png";
import RequestModal from "~/components/common/modals/RequestModal.vue";

export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    RequestModal,
  },
  data() {
    return {
      video_bg,
    };
  },
  mounted() {
   
    const requestModalEl = document.getElementById('requestModal');

    if (requestModalEl) {
      requestModalEl.addEventListener('show.bs.modal', () => {
        if (this.$refs.videoAreaSection) {
          this.$refs.videoAreaSection.style.zIndex = '-5';
        }
      });

      requestModalEl.addEventListener('hidden.bs.modal', () => {
        if (this.$refs.videoAreaSection) {
          this.$refs.videoAreaSection.style.zIndex = ''; 
        }
      });
    } else {
      console.warn("Element with ID 'requestModal' not found. Z-index logic will not apply.");
    }
  },
  beforeUnmount() {
    const requestModalEl = document.getElementById('requestModal');
    if (requestModalEl) {
      requestModalEl.removeEventListener('show.bs.modal', () => {
        if (this.$refs.videoAreaSection) {
          this.$refs.videoAreaSection.style.zIndex = '-5';
        }
      });
      requestModalEl.removeEventListener('hidden.bs.modal', () => {
        if (this.$refs.videoAreaSection) {
          this.$refs.videoAreaSection.style.zIndex = '';
        }
      });
    }
  },
  methods: {
    handleVideoPopup() {
    },
  },
};
</script>
<style scoped>
.video__area { 
  position: relative; 
  z-index: -1; 
}
</style>