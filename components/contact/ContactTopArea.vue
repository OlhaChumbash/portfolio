<template>
  <section class="tp-section-area p-relative z-index-1 tp-section-spacing">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="tp-section-wrapper-2 text-center">
            <h3 class="tp-section-title-2 font-70">
              {{subtitle}}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    title:String,
    subtitle:String,
  }
};
</script>
