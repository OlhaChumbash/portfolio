<template>
  <div
    class="text-danger form-field-error"
    role="alert"
    :aria-hidden="!message"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "FormFieldError",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
