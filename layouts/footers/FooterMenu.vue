<template>
  <ul>
    <li
      v-for="(menu, i) in footerMenu"
      :key="i"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import menuData from "~~/mixins/menuData";

export default {
  mixins: [menuData],
};
</script>
