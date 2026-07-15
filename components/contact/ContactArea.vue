<template>
  <ContactTopArea title="" :subtitle="$t('contacts.title')" />
  <div class="contact__item-area contact__translate-2">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in contactItems" :key="index" class="col-xl-4 col-lg-4 col-md-6">
          <div class="contact__item text-center mb-30 transition-3 white-bg">
            <div class="contact__icon">
              <img :src="item.icon" alt="">
            </div>
            <div class="contact__content">
              <span class="contact-item-subtitle">
                {{ item.subtitle }}
              </span>

              <template v-if="item.links">
                <p class="content" v-for="(link, i) in item.links" :key="i">
                  <a v-if="link.type === 'email'" :href="`mailto:${link.value}`">
                    {{ link.value }}
                  </a>
                  <a v-else-if="link.type === 'phone'" :href="`tel:${link.value}`">
                    {{ link.value }}
                  </a>
                  <span v-else-if="link.type === 'address'">
                    {{ link.value }}
                  </span>
                  <a v-else :href="link.url" target="_blank" rel="noopener noreferrer">
                    <i :class="link.icon"></i>
                    {{ link.name }}
                  </a>
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="contact__form-area pt-50 pt-md-110 pb-60 pb-md-140">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2">
            <ContactForm />
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue';
import ContactTopArea from './ContactTopArea.vue';


export default {
  components: {
    ContactTopArea,
    ContactForm
  }
}
</script>

<style scoped>
.content a, .content span{
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
}
</style>