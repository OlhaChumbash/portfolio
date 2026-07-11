export default {
 computed: {
  projectsData() {
    const projectKeys = Object.keys(
      this.$tm("my-projects.projects")
    );

    return projectKeys.map((key, index) => {
      return {
        id: index + 1,
        img: `/projects/${this.$t(`my-projects.projects.${key}.image`)}`,
        title: this.$t(`my-projects.projects.${key}.title`),
        description: this.$t(`my-projects.projects.${key}.description`),
        link: this.$t(`my-projects.projects.${key}.link`),
      };
    });
  },
},
};
