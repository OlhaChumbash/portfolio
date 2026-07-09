// images
import img_1 from '~/assets/img/faculty/faculty-1.jpg';
import img_2 from '~/assets/img/faculty/faculty-2.jpg';
import img_3 from '~/assets/img/faculty/faculty-3.jpg';
import img_4 from '~/assets/img/faculty/faculty-4.jpg';

export default {
  computed: {
    facultyData(){
      return [
        {
          id:1,
          img:img_1,
          name: this.$t('faculties.label_1'),
          links: [
            { title: this.$t('faculties.link_1_1')},
            { title: this.$t('faculties.link_1_2')},
            { title: this.$t('faculties.link_1_3')},
            { title: this.$t('faculties.link_1_4')},
          ]
        },
        {
          id:2,
          img:img_2,
          name: this.$t('faculties.label_2'),
          links: [
            { title: this.$t('faculties.link_2_1')},
            { title: this.$t('faculties.link_2_2')},
            { title: this.$t('faculties.link_2_3')},
          ]
        },
        {
          id:3,
          img:img_3,
          name: this.$t('faculties.label_3'),
          links: [
            { title: this.$t('faculties.link_3_1')}
          ]
        },
        {
          id:4,
          img:img_4,
          name: this.$t('faculties.label_4'),
          links: [
            { title: this.$t('faculties.link_4_1')},
            { title: this.$t('faculties.link_4_2')}
          ]
        }
      ]
    }
  },
};
