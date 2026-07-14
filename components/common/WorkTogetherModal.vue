<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="closeModal">
    <div class="modal-panel" role="dialog" aria-modal="true">
      <button class="modal-close" type="button" @click="closeModal" aria-label="Close">×</button>
      <h3 class="modal-title">{{ $t('modal_work_together.title') }}</h3>
      <form @submit.prevent="submitForm" class="modal-form">
        <div class="form-group">
          <label>{{ $t('modal_work_together.name') }}</label>
          <input v-model="form.name" type="text" required />
        </div>
        <div class="form-group">
          <label>{{ $t('modal_work_together.email') }}</label>
          <input v-model="form.email" type="email" required />
        </div>
        <div class="form-group">
          <label>{{ $t('modal_work_together.message') }}</label>
          <textarea v-model="form.message" rows="4" required></textarea>
        </div>
        <button class="tp-btn" type="submit" :disabled="isSubmitting">
          {{ $t('modal_work_together.submit') }}
        </button>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const { t } = useI18n();
const isOpen = ref(props.modelValue);
const isSubmitting = ref(false);
const successMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const closeModal = () => {
  emit("update:modelValue", false);
};

const submitForm = async () => {
  isSubmitting.value = true;
  successMessage.value = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f8f139c9-f2fb-4a6f-9c81-8991f4b0d1b3",
        name: form.name,
        email: form.email,
        message: form.message,
        subject: "Portfolio contact request",
      }),
    });

    if (response.ok) {
      successMessage.value = t("modal_work_together.success");
      form.name = "";
      form.email = "";
      form.message = "";
    }
  } finally {
    isSubmitting.value = false;
  }
};

const handleEscape = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
});

watch(() => props.modelValue, (value) => {
  isOpen.value = value;
});
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 16px;
}

.modal-panel {
  position: relative;
  width: min(100%, 560px);
  background: #fff;
  border-radius: 20px;
  padding: 28px;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: 0;
  background: transparent;
  font-size: 28px;
  cursor: pointer;
}

.modal-title {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

input,
textarea {
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 10px 12px;
}

.success-message {
  color: #15803d;
  margin-top: 12px;
}
</style>
