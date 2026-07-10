export default {
  computed: {
    menuData() {
      return [       
       
        {
          id: 1,
          title: this.$t("menu.projects"),
          hasDropdown: false,
          link: "/projects",
          external: true,
        },
        {
          id: 2,
          title: this.$t("menu.contacts"),
          hasDropdown: false,
          link: "/contacts",
        },
      ];
    },
    footerMenu() {
      return [
        { title: this.$t("menu.about_lyceum"), link: "/about" },
        { title: this.$t("menu.lyceum_life"), link: "/lyceum-life" },
        { title: this.$t("menu.specializations"), link: "/specializations" },
        { title: this.$t("menu.educational_process"), link: "/education-process" },
        { title: this.$t("menu.admission"), link: "/admission" },
        { title: this.$t("menu.blog"), link: "/blog" },
        { title: this.$t("menu.university"), link: "https://university.intita.com/", external: true },
        { title: this.$t("menu.contacts"), link: "/contacts" },
      ];
    },
  },
};
