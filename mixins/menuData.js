export default {
  computed: {
    menuData() {
      return [
        {
          id: 1,
          hasDropdown: false,
          title: this.$t('menu.university'),
          link: '#university',
        },
        {
          id: 2,
          title: this.$t('menu.faculties'),
          hasDropdown: false,
          link: '#faculties',
        },
        {
          id: 3,
          title: this.$t('menu.contacts'),
          hasDropdown: false,
          link: '#contacts',
        }
      ]
    }
  }
};
