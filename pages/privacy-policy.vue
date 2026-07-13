<template>
    <LayoutMain>
      privacy-policy
    </LayoutMain> 
</template>

<script>
import LayoutMain from "~~/layouts/LayoutMain.vue";
 
export default {
  components: {
    LayoutMain
  },
  setup() {
    useHead({
      title: "Contact - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
