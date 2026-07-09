<template>
  <section :class="`services__area ${style_2?'pt-100':''} ${el_style?'pt-110':''} pb-90`">
    <div class="container">
      <div v-if="!style_2 && !el_style" class="row align-items-end">
        <div class="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8">
          <div class="section__title-wrapper mb-60">
            <h3 class="section__title">
              {{$t('principles.title_1')}}
              <span class="section__title-highlight"
                >{{$t('principles.title_2')}}
                <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <SingleService v-for="(item, index) in services" :key="index"
          :icon='icon'
          :title="item.title"
          :desc="item.desc"
          :delay="(130 + index*20).toString()"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SingleService from "./single-service/SingleService.vue";
export default {
  components: {
    SingleService,
  },
  props:{
    style_2:{
      type:Boolean,
      default:false,
    },
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<rect x="0.5" y="0.5" width="31" height="31" rx="11.5" stroke="#DF5430"/>\n' +
          '<path d="M10 16L14.2426 20.2426L22.7279 11.7573" stroke="#14181F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>'
    }
  },
  computed: {
    services() {
      return [
        {title: this.$t('principles.label_1'), desc: this.$t('principles.desc_1')},
        {title: this.$t('principles.label_2'), desc: this.$t('principles.desc_2')},
        {title: this.$t('principles.label_3'), desc: this.$t('principles.desc_3')},
        {title: this.$t('principles.label_4'), desc: this.$t('principles.desc_4')},
        {title: this.$t('principles.label_5'), desc: this.$t('principles.desc_5')},
        {title: this.$t('principles.label_6'), desc: this.$t('principles.desc_6')},
        {title: this.$t('principles.label_7'), desc: this.$t('principles.desc_7')},
        {title: this.$t('principles.label_8'), desc: this.$t('principles.desc_8')},
        {title: this.$t('principles.label_9'), desc: this.$t('principles.desc_9')},
        {title: this.$t('principles.label_10'),desc: this.$t('principles.desc_10')},
        {title: this.$t('principles.label_11'),desc: this.$t('principles.desc_11')},
        {title: this.$t('principles.label_12'),desc: this.$t('principles.desc_12')}
      ]
    }
  }
};
</script>
