<template>
  <div class="product__modal modal fade" :id="modal_id" tabindex="-1" aria-labelledby="productModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content ">
        <div class="product__modal-wrapper p-4 position-relative">

          <div class="product__modal-close position-absolute" style="top: 15px; right: 15px; z-index: 10;">
            <button class="product__modal-close-btn border-0 bg-transparent" type="button" data-bs-dismiss="modal"
              aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M21 1L1 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1 1L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>

          <div class="modal-body pt-4">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "~~/components/contact/ContactForm.vue";

export default {
  components: {
    ContactForm
  },
  props: {
    modal_id: {
      type: String,
      default: 'productModal'
    },
    // Оставляем props на случай, если они используются внешними компонентами
    item: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      active_img: this.item?.image || ''
    }
  },
  methods: {
    handleActiveImg(img) {
      this.active_img = img
    }
  },
}
</script>

<style scoped>
.product__modal-wrapper {
  background: #ffffff;
  border-radius: 8px;
}

.product__modal-close-btn {
  transition: transform 0.2s ease;
}

.product__modal-close-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 576px) {
  :deep(.modal-dialog) {
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 100%; 
  }

/*   
  :deep(.modal-body), 
  :deep(.modal-header), 
  :deep(.modal-footer) {
    padding-top: 60px;
    padding-left: 15px;  
    padding-right: 15px;
  } */
}
</style>