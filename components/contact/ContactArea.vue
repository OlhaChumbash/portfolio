<template>
  <ContactTopArea title="" :subtitle="$t('contacts.title')" />

  <div class="contact__item-area contact__translate-2">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in contactItems" :key="index" class="col-xl-4 col-lg-4 col-md-6">
          <div class="contact__item text-center mb-30 transition-3 white-bg">
            <!-- ЗАМІНЕНО: тепер тут універсальний тег <i> замість <img> -->
            <div class="contact__icon-box">
              <i :class="[item.iconClass, 'contact__main-icon']"></i>
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
                  <a v-else :href="link.url" target="_blank" rel="noopener noreferrer" class="social-link-item">
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
  <section class="contact__form-area pt-90 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2">
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

export default {
  components: {
    ContactTopArea,
    ContactForm
  },
  computed: {
    contactItems() {
      return [
        {
          // Клас для іконки слухавки / зв'язку (Font Awesome)
          iconClass: 'fas fa-phone-alt', 
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
          // Клас для іконки карти / локації
          iconClass: 'fas fa-map-marker-alt', 
          subtitle: this.$t('contacts.items.address.title'),
          links: this.$tm('contacts.items.address.values').map((_, index) => ({
            type: 'address',
            value: this.$t(`contacts.items.address.values.${index}`)
          }))
        },

        {
          // Клас для іконки "користувачі" або "мережі"
          iconClass: 'fas fa-share-alt', 
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
.content a, .content span {
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
  color: var(--bg-primary); 
  transition: color 0.3s ease;
}

.content a:hover {
  color: var(--accent-rose); 
}

.contact__icon-box {
  margin-bottom: 20px;
}

.contact__main-icon {
  font-size: 80px; 
  color: var(--accent-green); 
  transition: color 0.3s ease;
}

.contact__item:hover .contact__main-icon {
  color: var(--accent-rose); 
}

.social-link-item i {
  margin-right: 8px; 
  color: inherit; 
}
</style>