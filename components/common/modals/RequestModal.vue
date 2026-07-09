<template>
  <div class="product">
    <div class="product__modal modal fade" :id="modal_id" tabindex="-1" aria-labelledby="requestModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="col-12">
            <div class="contact__form-9 pt-20 pl-70">
              <h4 class="contact__form-9-title">{{$t('request.title')}}</h4>
              <div class="contact__form-9-inner">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="contact__input-9">
                      <input name="first_name" type="text" v-model="formValue.first_name" :placeholder="`${$t('request.first_name')}*`"/>
                      <div v-if="errors.first_name" class="text-danger">{{ errors.first_name[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="contact__input-9">
                      <input name="last_name" type="text" v-model="formValue.last_name" :placeholder="`${$t('request.second_name')}*`"/>
                      <div v-if="errors.last_name" class="text-danger">{{ errors.last_name[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="contact__input-9">
                      <input name="email" type="email" v-model="formValue.email" :placeholder="`${$t('request.email')}*`"/>
                      <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="contact__input-9">
                      <input name="phone" type="text" v-model="formValue.phone" :placeholder="`${$t('request.phone')}*`"/>
                      <div v-if="errors.phone" class="text-danger">{{ errors.phone[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="contact__input-9">
                      <input name="address" type="text" v-model="formValue.address" :placeholder="`${$t('request.address')}`"/>
                      <div v-if="errors.address" class="text-danger">{{ errors.address[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="contact__input-9">
                      <textarea name="about_us" v-model="formValue.about_us" :placeholder="`${$t('request.about_us')}`"></textarea>
                      <div v-if="errors.about_us" class="text-danger">{{ errors.about_us[0] }}</div>
                    </div>
                  </div>
                  <div class="col-lg-12" v-if="error">
                    <div class="text-danger">{{ error }}</div>
                  </div>
                  <div class="col-lg-12 mt-4">
                    <div class="contact__btn-9">
                      <button type="button" class="tp-btn-4 tp-style-border w-100" @click="handleSubmit" :disabled="disabled">{{$t('request.button')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" :id="successModalId" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4 text-center">
          <h3>{{$t('request.success')}}</h3>
          <img src="~/assets/img/modal/entrant_agree_modal.svg" alt="entrant agree modal poster">
          <button type="button" class="mt-4 tp-btn-4 tp-style-border w-100" data-bs-dismiss="modal" @click="clearForm()">
            {{$t('request.success_btn')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    modal_id: String
  },
  data() {
    return {
      formValue: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        about_us: ""
      },
      errors: {},
      error: ''
    }
  },
  computed: {
    successModalId() {
      return `${this.modal_id}Success`
    },
    disabled() {
      return !this.formValue.first_name || !this.formValue.last_name || !this.formValue.email || !this.formValue.phone
    }
  },
  methods: {
    async handleSubmit() {
      this.errors = {}
      this.error = ''

      grecaptcha.ready(() => {
        grecaptcha.execute('6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP', {action:'submit'}).then(async (token) => {
          const formData = new FormData()
          formData.append('organization_id', '73')
          formData.append('specializations', '6')
          formData.append('first_name', this.formValue.first_name)
          formData.append('last_name', this.formValue.last_name)
          formData.append('email', this.formValue.email)
          formData.append('phone', this.formValue.phone)
          formData.append('address', this.formValue.address)
          formData.append('about_us', this.formValue.about_us)
          formData.append('g-recaptcha-response', token)

          try {
            await axios.post('https://intita.com/api/v1/entrant', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            const reqEl = document.getElementById(this.modal_id)
            bootstrap.Modal.getInstance(reqEl).hide()
            const sucEl = document.getElementById(this.successModalId)
            new bootstrap.Modal(sucEl).show()
          } catch (e) {
            this.error = e.response.data.error
            if (e.response.data.errors) {
              const raw = e.response.data.errors
              this.errors = raw.reduce((acc, cur) => {
                const key = Object.keys(cur)[0]
                acc[key] = [cur[key]]
                return acc
              }, {})
            }
          }
        });
      });
    },
    clearForm() {
      this.formValue = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        about_us: ""
      }
      this.errors = {}
      this.error = ''
    }
  }
}
</script>.
<style scoped>
.modal-backdrop{
z-index:-10 !important;
}
</style>