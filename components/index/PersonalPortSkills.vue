<template>
  <section class="skill__area pt-60 grey-bg-12 pb-125">
    <div class="container">
      <div class="row">
         <div class="section__title-wrapper-9 mb-55">
              <h3 class="section__title-9">
                {{ $t('index.skills.title_1') }}
                {{ $t('index.skills.title_2') }}
              </h3>
            </div>
        <!-- LEFT COLUMN -->
        <div class="col-xxl-5 col-xl-5 col-lg-5">          
          <div class="skill__wrapper-9">           
            <div class="skill__item-wrapper-9">
              <div v-for="(category, index) in technicalSkills" :key="index" class="mb-35">
                <h4 class="mb-10">
                  {{ category.title }}
                </h4>

                <div class="row">
                  <div v-for="(item, i) in category.items" :key="i"
                    class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">

                    <div class="skill__item-9">
                      <div class="skill__icon-9">
                        <span>
                          <i :class="item.icon"></i>
                        </span>
                      </div>

                      <div class="skill__content-9">
                        <h4>
                          {{ item.title }}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- RIGHT COLUMN -->
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <div class="career__wrapper career__style-2 pl-60">
            <!-- Languages -->
            <div class="mb-40">
              <h4 class="mb-10">
                    {{ $t('index.skills.languages_title') }}
              </h4>

              <div v-for="(item, index) in languages" :key="index"
                class="career__item transition-3 white-bg sal-animate mb-15">

                <div class="row w-100 align-items-center g-0">

                  <div class="col-auto career__icon pe-3">
                    <i :class="item.icon"></i>
                  </div>

                  <div class="col career__content">
                    <h4>{{ item.title }}</h4>
                  </div>

                  <div class="col-auto career__year text-end ps-3">
                    <span>{{ item.level }}</span>
                  </div>

                </div>

              </div>
            </div>


            <!-- Soft Skills -->
            <div>
              <h4 class="mb-20">
                {{ $t('index.skills.softSkills_title') }}
              </h4>

              <div v-for="(item, index) in softSkills" :key="index"
                class="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between sal-animate">
                <div class="career__icon">
                  <i :class="item.icon"></i>
                </div>

                <div class="career__content">
                  <h4>
                    {{ item.title }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    technicalSkills() {
      const skills = this.$tm("index.skills.technicalSkills") || [];
      if (!Array.isArray(skills)) {
        return [];
      }

      return skills.map((category, index) => ({
        title: this.$t(`index.skills.technicalSkills.${index}.title`),
        items: this.getSkillItems(
          `index.skills.technicalSkills.${index}.items`
        )
      }));
    },
    languages() {
      const languages = this.$tm("index.skills.languages") || [];
      if (!Array.isArray(languages)) {
        return [];
      }

      return languages.map((_, index) => ({
        title: this.$t(`index.skills.languages.${index}.title`),
        level: this.$t(`index.skills.languages.${index}.level`),
        icon: this.$t(`index.skills.languages.${index}.icon`)
      }));

    },


    softSkills() {
      const skills = this.$tm("index.skills.softSkills") || [];
      if (!Array.isArray(skills)) {
        return [];
      }
      return skills.map((_, index) => ({
        title: this.$t(`index.skills.softSkills.${index}.title`),
        icon: this.$t(`index.skills.softSkills.${index}.icon`)
      }));
    }
  },
  methods: {
    getSkillItems(path) {
      const items = this.$tm(path);
      if (!Array.isArray(items)) {
        return [];
      }
      return items.map((_, index) => ({
        title: this.$t(`${path}.${index}.title`),
        icon: this.$t(`${path}.${index}.icon`)
      }));
    }
  }
}
</script>

<style lang="scss" scoped>
.career__icon {
  font-size: 38px;
}

.career__content h4 {
  font-size: 16px;
  margin-bottom: 0;
}

.career__year span {
  font-size: 16px;
}
</style>