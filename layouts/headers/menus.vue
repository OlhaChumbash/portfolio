<template>
  <ul>
    <li
      v-for="(menu, i) in menuData"
      :key="i"
      :class="`${menu.hasDropdown ? 'has-dropdown' : ''} ${menu.megaMenu ? 'has-mega-menu' : ''}`"
    >
      <NuxtLink
        :to="menu.link"
        active-class=""
        exact-active-class=""
        :class="{ 'active-link': isActive(menu.link) }"
      >
        {{ menu.title }}
      </NuxtLink>

      <ul v-if="menu.hasDropdown" class="submenu">
        <li v-for="(sub, i) in menu.submenus" :key="i">
          <NuxtLink
            :to="sub.link"
            active-class=""
            exact-active-class=""
            :class="{ 'active-link': isActive(sub.link) }"
          >
            {{ sub.title }}
          </NuxtLink>
        </li>
      </ul>

      <ul v-if="menu.mega_menus" class="mega-menu">
        <li v-for="(mega, i) in menu.mega_menus" :key="i">
          <NuxtLink
            :to="mega.link"
            active-class=""
            exact-active-class=""
            class="mega-menu-title"
            :class="{ 'active-link': isActive(mega.link) }"
          >
            {{ mega.title }}
          </NuxtLink>

          <ul>
            <li v-for="(sub_mega, i) in mega.submenus" :key="i">
              <NuxtLink
                :to="sub_mega.link"
                active-class=""
                exact-active-class=""
                :class="{ 'active-link': isActive(sub_mega.link) }"
              >
                {{ sub_mega.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import menuData from "~~/mixins/menuData";

export default {
  mixins: [menuData],

  methods: {
    isActive(link) {
      if (!link) return false;

      const currentPath = this.$route.path;
      const currentHash = this.$route.hash;

      if (link.includes("#")) {
        const [path, hash] = link.split("#");

        return (
          currentPath === (path || "/") &&
          currentHash === `#${hash}`
        );
      }

      return currentPath === link || currentPath === `${link}/`;
    }
  }
};
</script>

<style lang="scss" scoped>
a.active-link {
  color: var(--tp-theme-primary, #0d6efd) !important;
}
</style>