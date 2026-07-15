<template>
  <div class="fix">
    <HeaderMain />
    <main>
      <slot></slot>
    </main>
    <BasicFooter/>
    <BackToTop/>
  </div>
</template>

<script>
import HeaderMain from "~/layouts/headers/HeaderMain.vue";
import BasicFooter from "~/layouts/footers/BasicFooter.vue";
import BackToTop from "~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderMain,
    BasicFooter,
    BackToTop,
  },
};
</script>