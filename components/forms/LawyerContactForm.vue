<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6">
        <div class="contact__input">
          <input name="first_name" type="text" v-model="formValue.first_name" :placeholder="`${$t('request.first_name')}*`" />
          <div v-if="errors.first_name" class="text-danger">{{ errors.first_name[0] }}</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="last_name" type="text" v-model="formValue.last_name" :placeholder="`${$t('request.second_name')}*`" />
          <div v-if="errors.last_name" class="text-danger">{{ errors.last_name[0] }}</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="email" type="email" v-model="formValue.email" :placeholder="`${$t('request.email')}*`" />
          <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="phone" type="text" v-model="formValue.phone" :placeholder="`${$t('request.phone')}*`" />
          <div v-if="errors.phone" class="text-danger">{{ errors.phone[0] }}</div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input">
          <input name="address" type="text" v-model="formValue.address" :placeholder="`${$t('request.address')}`" />
          <div v-if="errors.address" class="text-danger">{{ errors.address[0] }}</div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input">
          <textarea name="about_us" v-model="formValue.about_us" :placeholder="`${$t('request.about_us')}`"></textarea>
          <div v-if="errors.about_us" class="text-danger">{{ errors.about_us[0] }}</div>
        </div>
      </div>

      <div class="col-lg-12" v-if="error">
        <div class="text-danger mt-3">{{ error }}</div>
      </div>
      <div class="col-lg-12" v-if="successMessage">
        <div class="text-success mt-3">{{ successMessage }}</div>
      </div>

      <div class="col-md-12">
        <div class="contact__btn">
          <button type="submit" class="tp-btn blue-dark-color-bg" :disabled="disabled">
            {{$t('request.button')}}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'; 

export default {
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
      error: '', 
      successMessage: '' 
    }
  },
  computed: {
    disabled() {
      return !this.formValue.first_name || !this.formValue.last_name || !this.formValue.email || !this.formValue.phone
    }
  },
  methods: {
    async handleSubmit() {
      this.errors = {};
      this.error = '';
      this.successMessage = '';
     
      grecaptcha.ready(() => {
        grecaptcha.execute('6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP', { action: 'submit' }).then(async (token) => {
          const formData = new FormData();
          formData.append('organization_id', '73'); 
          formData.append('specializations', '6'); 
          formData.append('first_name', this.formValue.first_name);
          formData.append('last_name', this.formValue.last_name);
          formData.append('email', this.formValue.email);
          formData.append('phone', this.formValue.phone);
          formData.append('address', this.formValue.address);
          formData.append('about_us', this.formValue.about_us);
          formData.append('g-recaptcha-response', token);

          try {
            await axios.post('https://intita.com/api/v1/entrant', formData, { headers: { 'Content-Type': 'multipart/form-data' } });

            this.successMessage = this.$t('request.success'); 
            this.clearForm();

          } catch (e) {
            console.error("Помилка надсилання форми:", e);

            this.error = e.response?.data?.error || this.$t('request.error_generic'); 

            if (e.response?.data?.errors) {
              const raw = e.response.data.errors;
              this.errors = raw.reduce((acc, cur) => {
                const key = Object.keys(cur)[0];
                acc[key] = [cur[key]];
                return acc;
              }, {});
            }
          }
        }).catch(e => {
            console.error("reCAPTCHA execution error:", e);
            this.error = this.$t('request.recaptcha_error'); 
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
      };
      this.errors = {}; 
      this.error = ''; 
    }
  }
};
</script>

<style scoped>

.contact__input input,
.contact__input textarea {
  width: 100%;
  border: 1px solid #ddd; 
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.text-danger {
  color: red;
  font-size: 0.85em;
  margin-top: -15px; 
  margin-bottom: 10px;
}

.text-success {
  color: green;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}


.tp-btn {  
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}
.blue-dark-color-bg {
  background-color: #007bff; 
  color: white;
}

button:disabled {
  opacity: 0.6;
  /* cursor: not-allowed; */
}
</style>
