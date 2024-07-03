<template>
  <v-footer class="footer" absolute>
    <v-col class="text-center">
      <span class="footer-text">
        &copy; {{ new Date().getFullYear() }} 午安资讯</span
      >
    </v-col>
  </v-footer>
</template>

<script setup lang="ts">
import { VFooter, VCol } from "vuetify/components";
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-text {
  color: #b0bec5;
}
</style>
