<!-- <template>
  <span>
    <span @click="handleToggle" class="header__lang-selected-lang tp-lang-toggle" id="tp-header-lang-toggle">
      {{ currentLang.name }}
    </span>
    <ul :class="`header__lang-list tp-lang-list ${open ? 'tp-lang-list-open' : ''}`">
      <li v-for="loc in locales" :key="loc.code" @click="switchLanguage(loc.code)">
        {{ loc.name }}
      </li>
    </ul>
  </span>
</template>

<script>
export default {
  data() {
    return { open: false }
  },
  computed: {
    locales() {
      return this.$i18n.locales.value
    },
    currentLang() {
      return this.locales.find(l => l.code === this.$i18n.locale)
    }
  },
  methods: {
    handleToggle() {
      this.open = !this.open
    },
    switchLanguage(code) {
      this.$i18n.setLocale(code)
      this.open = false
    }
  }
}
</script> -->
