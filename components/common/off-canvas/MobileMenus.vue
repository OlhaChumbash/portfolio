<template>
  <nav class="mean-nav">
    <ul>
      <li v-for="item in items" :key="item.to">
        <NuxtLink :to="item.to" @click="closeMenu">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const emit = defineEmits(["close"]);
const { t } = useI18n();

const items = computed(() => [
  { to: "/", label: t("menu.index") },
  { to: "/#about-me", label: t("menu.about") },
  { to: "/projects", label: t("menu.projects") },
  { to: "/#my-experience", label: t("menu.experience") },
  { to: "/#my-skills", label: t("menu.skills") },
  { to: "/#my-education", label: t("menu.education") },
  { to: "/contact", label: t("menu.contact") },
  { to: "/#my-sertificates", label: t("menu.certificates") },
]);

const closeMenu = () => {
  emit("close");
};
</script>