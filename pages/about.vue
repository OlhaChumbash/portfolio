<template>
  <Layout></Layout>
</template>

<script setup>
import Layout from '~/layouts/LayoutTwo.vue';

useHead({
  title: 'Про ліцей — IT-Ліцей INTITA',
  meta: [
    {
      name: 'description',
      content:
        'Дізнайтесь історію створення, переваги навчання та напрями підготовки в IT-Ліцеї INTITA. Ми поєднуємо академічну освіту з технологіями майбутнього.',
    },
    { property: 'og:title', content: 'Про ліцей — IT-Ліцей INTITA' },
    {
      property: 'og:description',
      content:
        'Технологічний Ліцей ІНТІТА — місце, де освіта поєднується з інноваціями. Ознайомтесь з історією, напрямами та перевагами навчання.',
    },
  ],
})
</script>
