export default {
  computed: {
    menuData() {
      return [       
         {
          id: 1,
          title: this.$t("menu.index"),
          hasDropdown: false,
          link: "/",
          external: true,
        },
        {
          id: 2,
          title: this.$t("menu.projects"),
          hasDropdown: false,
          link: "/projects",
          external: true,
        },
        {
          id: 3,
          title: this.$t("menu.contact"),
          hasDropdown: false,
          link: "/contact",
        },
      ];
    },
    footerMenu() {
      return [
        { title: this.$t("menu.lyceum_life"), link: "/index" },
        { title: this.$t("menu.about_lyceum"), link: "/projects" },
        { title: this.$t("menu.lyceum_life"), link: "/contact" },
      
      ];
    },
  },
};
