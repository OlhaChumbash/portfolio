<template>
  <section id="my-skills" class="skill__area pt-50 pt-md-110 pb-60 pb-md-140 grey-bg-12 pb-125">
    <div class="container">
      <div class="row">
        <div class="section__title-wrapper-9 mb-55">
          <h3 class="section__title">
            {{ $t('index.skills.title_1') }}
            {{ $t('index.skills.title_2') }}
          </h3>
        </div>

        <!-- LEFT COLUMN (Technical Skills Only) -->
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="skill__wrapper-9">
            <div class="skill__item-wrapper-9">
              <div v-for="(category, index) in technicalSkills" :key="index" class="mb-35">
                <h4 class="mb-10 category-title">
                  {{ category.title }}
                </h4>

                <div class="row">
                  <div v-for="(item, i) in category.items" :key="i" 
                    class="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3">
                    <div class="skill__item-9">
                      <div class="skill__icon-9 d-flex align-items-center justify-content-center">
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

        <!-- RIGHT COLUMN (Languages, Soft Skills & Concepts) -->
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <div class="career__wrapper career__style-2 pl-60">

            <!-- Languages -->
            <div class="mb-35">
              <h4 class="mb-10 category-title">
                {{ $t('index.skills.languages_title') }}
              </h4>

              <div v-for="(item, index) in languages" :key="index"
                class="career__item transition-3 white-bg sal-animate mb-15">
                <div class="row w-100 align-items-center g-0">
                  <div class="col-auto career__icon pe-3">
                    <i :class="item.icon"></i>
                  </div>

                  <div class="col career__content">
                    <h4>
                      {{ item.title }}
                    </h4>
                  </div>

                  <div class="col-auto career__year text-end ps-3">
                    <span>
                      {{ item.level }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Soft Skills -->
            <div class="mb-35">
              <h4 class="mb-20 category-title">
                {{ $t('index.skills.softSkills_title') }}
              </h4>

              <div v-for="(item, index) in softSkills" :key="index"
                class="career__item transition-3 white-bg d-flex align-items-center justify-content-between sal-animate mb-15">
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

            <!-- Concepts & Methodologies -->
            <div v-if="conceptsSkill">
              <h4 class="mb-20 category-title">
                {{ conceptsSkill.title }}
              </h4>

              <div class="row">
                <div v-for="(item, i) in conceptsSkill.items" :key="i" class="col-6 mb-15">
                  <div class="career__item transition-3 white-bg d-flex align-items-center sal-animate h-100 m-0 py-3 px-4">
                    <div class="career__content w-100">
                      <h4 class="text-start m-0">
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
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    // Получаем сырой массив категорий из i18n
    rawSkills() {
      return this.$tm("index.skills.technicalSkills") || [];
    },

    // Левая колонка: исключаем концепции по индексу или по названию ключа
    technicalSkills() {
      if (!Array.isArray(this.rawSkills)) return [];
      
      return this.rawSkills
        .map((category, index) => ({
          title: this.$t(`index.skills.technicalSkills.${index}.title`),
          // Сохраняем оригинальный объект, чтобы проверить пути локализации, если нужно
          _raw: category, 
          items: this.getSkillItems(`index.skills.technicalSkills.${index}.items`)
        }))
        .filter((category, index) => {
          // Исключаем блок, если у него type === 'concepts' ИЛИ если это 5-й элемент (индекс 4),
          // ИЛИ если в его названии есть слово "концепц" / "concept"
          const isConcepts = 
            category._raw?.type === 'concepts' || 
            index === 4 || 
            category.title?.toLowerCase().includes('концепц') ||
            category.title?.toLowerCase().includes('concept');
            
          return !isConcepts;
        });
    },

    // Правая колонка: забираем только концепции
    conceptsSkill() {
      if (!Array.isArray(this.rawSkills)) return null;

      // Ищем индекс блока концепций по трем разным признакам для 100% гарантии
      const index = this.rawSkills.findIndex((category, idx) => {
        const title = this.$t(`index.skills.technicalSkills.${idx}.title`) || '';
        return (
          category?.type === 'concepts' || 
          idx === 4 || 
          title.toLowerCase().includes('концепц') ||
          title.toLowerCase().includes('concept')
        );
      });

      if (index === -1) return null;

      return {
        title: this.$t(`index.skills.technicalSkills.${index}.title`),
        items: this.getSkillItems(`index.skills.technicalSkills.${index}.items`)
      };
    },

    languages() {
      const languages = this.$tm("index.skills.languages") || [];
      return languages.map((_, index) => ({
        title: this.$t(`index.skills.languages.${index}.title`),
        level: this.$t(`index.skills.languages.${index}.level`),
        icon: this.$t(`index.skills.languages.${index}.icon`)
      }));
    },

    softSkills() {
      const skills = this.$tm("index.skills.softSkills") || [];
      return skills.map((_, index) => ({
        title: this.$t(`index.skills.softSkills.${index}.title`),
        icon: this.$t(`index.skills.softSkills.${index}.icon`)
      }));
    }
  },
  methods: {
    getSkillItems(path) {
      const items = this.$tm(path);
      if (!Array.isArray(items)) return [];

      return items.map((item, index) => {
        const result = {
          title: this.$t(`${path}.${index}.title`)
        };
        if (item && typeof item === 'object' && 'icon' in item) {
          result.icon = this.$t(`${path}.${index}.icon`);
        } else {
          result.icon = null;
        }
        return result;
      });
    }
  }
}
</script>

<style scoped lang="scss">
.career__icon {
  font-size: 38px;
}

.career__content h4 {
  font-size: 18px;
  margin-bottom: 0;
}

.career__year span {
  font-size: 18px;
}

.category-title {
  font-size: 24px;
  color: var(--accent-green);
}

.career__item.h-100 {
  min-height: 55px; 
}
</style>