<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-banner__content">
      <h4>{{ $t('cookie_banner.title') }}</h4>
      <p>
        {{ $t('cookie_banner.description') }}
        <NuxtLink to="/cookies">{{ $t('cookie_banner.link') }}</NuxtLink>
      </p>
    </div>
    <div class="cookie-banner__actions">
      <button class="tp-btn tp-btn-sm" @click="acceptCookies">{{ $t('cookie_banner.accept') }}</button>
      <button class="tp-btn tp-btn-sm tp-btn-grey" @click="declineCookies">{{ $t('cookie_banner.reject') }}</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const showBanner = ref(false);

const storageKey = computed(() => `cookie-consent-${locale.value}`);

const hideBanner = () => {
  showBanner.value = false;
};

const acceptCookies = () => {
  localStorage.setItem(storageKey.value, "accepted");
  hideBanner();
};

const declineCookies = () => {
  localStorage.setItem(storageKey.value, "declined");
  hideBanner();
};

onMounted(() => {
  const consent = localStorage.getItem(storageKey.value);
  if (!consent) {
    showBanner.value = true;
  }
});
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: #111827;
  color: #fff;
  padding: 18px 20px;
  border-radius: 16px;
  box-shadow: 0 16px 45px rgba(17, 24, 39, 0.25);
}

.cookie-banner__content h4 {
  margin-bottom: 4px;
}

.cookie-banner__content a {
  color: #60a5fa;
  text-decoration: underline;
}

.cookie-banner__actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cookie-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
