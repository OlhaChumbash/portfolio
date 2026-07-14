<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <h3 class="contact__form-2-title">
        {{ $t('contacts.form_title') }}
      </h3>
      <div class="col-md-6">
        <div class="contact__input-2">

          <input v-model="formValue.name" type="text" autocomplete="name" :placeholder="$t('contact-form.name')"
            @blur="validateField('name')">
          <FormFieldError :message="errors.name" />
        </div>
      </div>

      <div class="col-md-6">
        <div class="contact__input-2">
          <input v-model="formValue.email" type="email" autocomplete="email" :placeholder="$t('contact-form.email')"
            @blur="validateField('email')">
          <FormFieldError :message="errors.email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <VueTelInput v-model="formValue.phone" autocomplete="tel" mode="international" :defaultCountry="'DE'"
            @blur="validateField('phone')" />

          <FormFieldError :message="errors.phone" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input-2">
          <textarea v-model="formValue.message" :placeholder="$t('contact-form.message')"
            @blur="validateField('message')"></textarea>
          <FormFieldError :message="errors.message" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__agree d-flex mb-20">
          <input id="privacy" type="checkbox" v-model="termsAccepted" required @change="clearTermsError" />
          <label for="privacy">
            {{ $t('contact-form.privacy_text') }}
            <NuxtLink to="/privacy-policy" target="_blank">
              {{ $t('contact-form.privacy_link') }}
            </NuxtLink>
          </label>

        </div>
        <FormFieldError :message="termsError" />
      </div>
      <input type="checkbox" name="botcheck" class="hidden" style="display:none" />
      <div class="col-md-5 w-100 d-flex  justify-content-end">
        <button type="submit" class="tp-btn" :disabled="isSubmitting">
          {{ $t('contact-form.button') }}
        </button>
      </div>
    </div>
    <div v-if="submitError" class="text-danger mt-3">
      {{ $t('contact-form.error') }}
    </div>
    <div v-if="success" class="text-success mt-3">
      {{ $t('contact-form.success') }}
    </div>
  </form>
</template>

<script>
import FormFieldError from '@/components/forms/FormFieldError.vue'
import { isValidPhoneNumber } from 'libphonenumber-js'

export default {
  components: {
    FormFieldError
  },
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      accessKey: "7fb36cf8-5c17-4f30-837c-2319e2050073",
      errors: {},
      termsAccepted: false,
      termsError: "",
      success: false,
      isSubmitting: false,
      submitError: false
    }
  },
  methods: {
    validateField(field) {
      const value = String(this.formValue[field] || "").trim()
      let error = ""

      if (field === "name" && !value) {
        error = this.$t('contact-form.errors.required')
      }
      if (field === "email") {
        if (!value)
          error = this.$t('contact-form.errors.required')
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = this.$t('contact-form.errors.email')
      }

      if (field === "phone") {
        if (!value) {
          error = this.$t('contact-form.errors.required')
        }
        else if (!isValidPhoneNumber(value)) {
          error = this.$t('contact-form.errors.phone')
        }
      }

      if (field === "message") {
        if (!value)
          error = this.$t('contact-form.errors.required')
        else if (value.length < 10)
          error = this.$t('contact-form.errors.message')
      }
      if (error) {
        this.errors = {
          ...this.errors,
          [field]: error
        }
      } else {
        delete this.errors[field]
      }
    },
    clearTermsError() {
      if (this.termsAccepted) {
        this.termsError = "";
      }
    },
    async handleSubmit() {
      Object.keys(this.formValue).forEach(field => this.validateField(field))

      if (!this.termsAccepted) {
        this.termsError = this.$t('contact-form.errors.privacy')
        return
      }

      if (Object.keys(this.errors).length) {
        return
      }

      this.isSubmitting = true
      this.success = false
      this.submitError = false

      try {
        const formData = new FormData()
        formData.append("access_key", this.accessKey)

        Object.entries(this.formValue).forEach(([key, value]) => {
          formData.append(key, value)
        })

        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData
          }
        )
        const result = await response.json()
        if (result.success) {
          this.success = true
          // Очищаем форму после успешной отправки
          this.formValue = {
            name: "",
            email: "",
            phone: "",
            message: ""
          }
          this.termsAccepted = false
        } else {
          this.submitError = true
        }

      } catch (error) {
        this.submitError = true
        console.error("Form error:", error)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>