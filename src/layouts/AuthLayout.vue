<template>
  <div class="auth-layout">
    <v-app-bar flat>
      <v-toolbar-title @click="goHome" class="toolbar-title-style">
        <v-icon large class="mr-2">mdi-sun-wireless</v-icon>
        早安资讯
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="main-content">
      <router-view />
    </v-main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/layouts/components/Footer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  /* background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png") no-repeat center center; */
  background-size: cover;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
}

.toolbar-title-style {
  cursor: pointer; /* 添加手型鼠标指针 */
}
</style>
