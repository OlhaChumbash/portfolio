export default {
  computed: {
    menuData() {
      return [
        {
          id: 1,
          title: this.$t("menu.about"),
          hasDropdown: false,
          link: "/#about-me",
          external: true,
        },
        {
          id: 2,
          title: this.$t("menu.experience"),
          hasDropdown: false,
          link: "/#my-experience",
          external: true,
        },
        {
          id: 3,
          title: this.$t("menu.skills"),
          hasDropdown: false,
          link: "/#my-skills",
          external: true,
        },
        {
          id: 4,
          title: this.$t("menu.education"),
          hasDropdown: false,
          link: "/#my-education",
          external: true,
        },
        {
          id: 5,
          title: this.$t("menu.projects"),
          hasDropdown: false,
          link: "/projects",
          external: true,
        },
        {
          id: 6,
          title: this.$t("menu.contact"),
          hasDropdown: false,
          link: "/contact",
          external: true,
        }
      ];
    },

    footerMenu() {
      return [
        {
          title: this.$t("menu.index"),
          link: "/"
        },
        {
          title: this.$t("menu.projects"),
          link: "/projects"
        },
        {
          title: this.$t("menu.contact"),
          link: "/contact"
        }
      ];
    },
  },
};