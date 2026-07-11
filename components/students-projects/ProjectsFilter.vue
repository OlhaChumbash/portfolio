<template>
  <div class="projects-filter">
    <button
      v-for="filter in filters"
      :key="filter.value"
      class="projects-filter__item"
      :class="{ active: modelValue === filter.value }"
      @click="$emit('update:modelValue', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

defineProps({
  modelValue: {
    type: String,
    default: 'all'
  }
})

defineEmits(['update:modelValue'])

const filters = computed(() => [
  { value: 'all', label: t('students-projects.filters.all') },
  { value: 'education', label: t('students-projects.filters.education') },
  { value: 'creative', label: t('students-projects.filters.creative') },
  { value: 'health', label: t('students-projects.filters.health') }
])
</script>

<style scoped>
.projects-filter {
  display: flex;
  background: #f4f4f4;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-filter__item {
  padding: 16px 32px;
  background: transparent;
  border: none;
  color: #525252;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.projects-filter__item:first-child {
  padding: 16px 53px;
}

.projects-filter__item:hover,
.projects-filter__item.active {
  background: #f8931e;
  color: #fff;
}
</style>
