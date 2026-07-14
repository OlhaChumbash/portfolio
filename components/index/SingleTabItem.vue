<template>
  <div :class="`tab-pane fade ${active ? 'show active' : ''}`" :id="id" role="tabpanel">
    <CertificatesPhotoCarouse 
      v-if="images.length && active"
      :key="id"
      :carousel-id="id"
      :images="images"
      @image-click="openPopup"
    />
    <ImagePopup ref="imagePopup" :images="images" />
    
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

<script setup>
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRuntimeConfig } from '#imports';
import CertificatesPhotoCarouse from './CertificatesPhotoCarouse.vue';
import ImagePopup from '~/components/common/modals/ImagePopup.vue';

const props = defineProps({
  id: String,
  active: Boolean,
  item: String,
});

const { t, te, tm } = useI18n();
const config = useRuntimeConfig();
const base = computed(() => {
  const baseURL = config.app.baseURL || '/';
  return baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
});

const resolveAsset = (path) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base.value}${cleanPath}`;
};

const images = computed(() => {
  const key = `index.education.${props.item}.images`;
  const rawImages = tm(key);
  if (!Array.isArray(rawImages)) {
    return [];
  }

  return rawImages
    .map((_, index) => {
      const imagePath = t(`${key}.${index}`);
      return imagePath ? resolveAsset(imagePath) : null;
    })
    .filter(Boolean);
});

const imageUrl = computed(() => {
  if (!props.item) return null;
  const key = `index.education.${props.item}.image`;
  if (te(key) && t(key) !== key) {
    return resolveAsset(t(key));
  }
  return null;
});

const imagePopup = ref(null);

const openPopup = (index) => {
  if (imagePopup.value?.showImg) {
    imagePopup.value.showImg(index);
  }
};

const isImageExist = ref(false);

const checkImagePath = async () => {
  if (!imageUrl.value) {
    isImageExist.value = false;
    return;
  }

  try {
    const response = await fetch(imageUrl.value, { method: 'HEAD' });
    isImageExist.value = response.ok;
  } catch (error) {
    isImageExist.value = false;
  }
};

watch(imageUrl, () => {
  checkImagePath();
}, { immediate: true });
</script>
