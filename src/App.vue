<template>
  <v-app>
    <Snackbar />
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到午安资讯");
};

onMounted(() => {
  doInit();
});
</script>

<style scoped></style>
