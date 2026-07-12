<template>
    <LayoutMain>
     <ContactArea />
    </LayoutMain> 
</template>

<script>
import LayoutMain from "~~/layouts/LayoutMain.vue";
import ContactArea from '~~/components/contact-page/ContactArea.vue';
// import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    LayoutMain,
    ContactArea
  },
  setup() {
    useHead({
      title: "Contact - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
