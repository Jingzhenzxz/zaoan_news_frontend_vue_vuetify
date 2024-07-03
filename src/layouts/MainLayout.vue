<template>
  <div class="main-layout">
    <GlobalHeader />
    <v-main class="main-content">
      <router-view />
    </v-main>
    <Footer />
    <FloatingActionButton />
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from "@/layouts/components/GlobalHeader.vue";
import Footer from "@/layouts/components/Footer.vue";
import FloatingActionButton from '@/layouts/components/FloatingActionButton.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  overflow: auto;
  padding-bottom: 80px; /* 留出空间给footer */
}
</style>
