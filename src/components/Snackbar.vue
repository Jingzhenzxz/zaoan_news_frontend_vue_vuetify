<template>
  <v-snackbar v-model="visible" :color="color">
    {{ message }}
  </v-snackbar>
</template>

<script>
import { ref } from 'vue';

export const snackbar = ref({
  visible: false,
  message: '',
  color: '',
});

export function success(message, color = 'success') {
  snackbar.value = {
    visible: true,
    message,
    color,
  };
}

export function info(message, color = 'info') {
  snackbar.value = {
    visible: true,
    message,
    color,
  };
}

export function warning(message, color = 'warning') {
  snackbar.value = {
    visible: true,
    message,
    color,
  };
}

export function error(message, color = 'error') {
  snackbar.value = {
    visible: true,
    message,
    color,
  };
}

export default {
  setup() {
    return {
      ...snackbar.value,
    };
  },
};
</script>
