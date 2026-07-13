<template>
  <div :class="`tab-pane fade ${active ? 'show active' : ''}`" :id="id">
    <CertificatesPhotoCarouse v-if="images.length" :key="item" :images="images" />
    <div class="vision__item">
      <div v-if="isImageExist" class="vision__thumb m-img mb-30" ref="imageBlock">
        <img :src="imageUrl" :alt="$t(`index.education.${item}.title`)">
      </div>

      <span>
        {{ $t(`index.education.${item}.place`) }}
      </span>

      <div class="vision__content">
        <p>
          {{ $t(`index.education.${item}.description`) }}
        </p>

        <div class="vision__list">
          <ul>
            <li v-for="(listItem, index) in $tm(`index.education.${item}.list`)" :key="index">
              <span>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {{ $rt(listItem) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CertificatesPhotoCarouse from './CertificatesPhotoCarouse.vue';
import { useRuntimeConfig } from '#imports';

export default {
  components: {
    CertificatesPhotoCarouse
  },
  props: {
    id: String,
    active: Boolean,
    item: String
  },
  data() {
    return {
      isImageExist: false
    }
  },
  computed: {
    images() {
      const config = useRuntimeConfig();
      const base = config.app.baseURL || "/";
      const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
      const key = `index.education.${this.item}.images`;
      const images = this.$tm(key);
      if (!Array.isArray(images)) {
        return [];
      }

      return images.map((_, index) => {
        const imagePath = this.$t(`${key}.${index}`);
        const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
        return `${cleanBase}${cleanPath}`;
      });
    },
    imageUrl() {
      if (!this.item) return null;
      const config = useRuntimeConfig();
      const base = config.app.baseURL || "/";
      const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
      const key = `index.education.${this.item}.image`;
      if (this.$te(key) && this.$t(key) !== key) {
        const imagePath = this.$t(key);
        const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
        return `${cleanBase}${cleanPath}`;
      }
      return null;
    }
  },

  watch: {
    item: {
      immediate: true,
      handler() {
        this.checkImagePath()
      }
    }
  },

  methods: {
    async checkImagePath() {
      if (!this.imageUrl) {
        this.isImageExist = false
        return
      }

      try {
        const response = await fetch(this.imageUrl, { method: 'HEAD' })
        this.isImageExist = response.ok
      } catch (error) {
        this.isImageExist = false
      }
    }
  }
}
</script>