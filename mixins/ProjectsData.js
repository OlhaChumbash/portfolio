import projectCodeSnippets from "@/mixins/projectCodeSnippets";
export default {
  computed: {
   projectsData() {
  const projects = this.$tm("projects") || {};

  const projectKeys = Object.keys(projects).filter((key) =>
    key.startsWith("project_")
  );

  const result = projectKeys.map((key, index) => ({
    id: index + 1,
    image: this.$t(`projects.${key}.image`),
    title: this.$t(`projects.${key}.title`),
    description: this.$t(`projects.${key}.description`),
    date: this.$t(`projects.${key}.date`),
    link: this.$t(`projects.${key}.link`),
    items: this.getArrayTranslations(`projects.${key}.items`),
    technologies: this.getTechnologies(`projects.${key}.technologies`),
    codeSnippet: projectCodeSnippets[key] || []
  }));

  console.log(result);

  return result;
},
  },

 methods: {

  getArrayTranslations(path) {
    const array = this.$tm(path);

    if (!Array.isArray(array)) {
      return [];
    }

    return array.map((_, index) =>
      this.$t(`${path}.${index}`)
    );
  },


  getTechnologies(path) {
    const technologies = this.$tm(path);

    if (!Array.isArray(technologies)) {
      return [];
    }

    return technologies.map((technology, index) => ({
      name: this.$t(`${path}.${index}.name`),
      icon: this.$t(`${path}.${index}.icon`)
    }));
  }

}
};