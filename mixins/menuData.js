export default {
  computed: {
    menuData() {
      return [
        {
          id: 1,
          title: this.$t("menu.index"),
          hasDropdown: true,
          link: "/",
          external: true,
          submenus: [
            {
              title: this.$t("menu.about"),
              link: "/#about-me",
            },
            {
              title: this.$t("menu.skills"),
              link: "/#my-skills",
            },
            {
              title: this.$t("menu.experience"),
              link: "/#my-experience",
            },
            {
              title: this.$t("menu.education"),
              link: "/#my-education",
            },
            {
              title: this.$t("menu.certificates"),
              link: "/#my-sertificates",
            }
          ]
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