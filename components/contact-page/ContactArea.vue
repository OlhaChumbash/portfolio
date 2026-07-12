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
  <section class="contact__form-area pt-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2">
            <h3 class="contact__form-2-title">
              {{ $t('contacts.form_title') }}
            </h3>
            <contact-form />
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
import location_icon_1 from "~/assets/img/contact/icon/contact-icon-1.png";
import location_icon_2 from "~/assets/img/contact/icon/contact-icon-2.png";
import location_icon_3 from "~/assets/img/contact/icon/contact-icon-3.png";

export default {
  components: {
    ContactTopArea,
    ContactForm
  },
  computed: {
    contactItems() {
      return [
        {
          icon: location_icon_1,
          subtitle: this.$t('contacts.items.contact.title'),
          links: [
            {
              type: 'email',
              value: this.$t('contacts.items.contact.email')
            },
            ...this.$tm('contacts.items.contact.phones').map((_, index) => ({
              type: 'phone',
              value: this.$t(`contacts.items.contact.phones.${index}`)
            }))
          ]
        },

        {
          icon: location_icon_3,
          subtitle: this.$t('contacts.items.address.title'),
          links: this.$tm('contacts.items.address.values').map((_, index) => ({
            type: 'address',
            value: this.$t(`contacts.items.address.values.${index}`)
          }))
        },

        {
          icon: location_icon_2,
          subtitle: this.$t('contacts.items.social.title'),
          links: this.$tm('contacts.items.social.links').map((_, index) => ({
            type: 'social',
            name: this.$t(`contacts.items.social.links.${index}.name`),
            url: this.$t(`contacts.items.social.links.${index}.url`),
            icon: this.$t(`contacts.items.social.links.${index}.icon`)
          }))
        }
      ]
    }
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