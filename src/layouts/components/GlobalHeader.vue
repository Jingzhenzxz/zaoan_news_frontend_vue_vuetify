<template>
  <v-app-bar flat>
    <v-toolbar-title @click="goHome" class="toolbar-title-style">
      <v-icon large class="mr-2">mdi-sun-wireless</v-icon>
      午安资讯
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/followingTopics" class="mx-2 btn-style">关注</v-btn>
    <v-btn text to="/latest" class="mx-2 btn-style">最新</v-btn>
    <v-btn text to="/user" class="mx-2 btn-style">个人中心</v-btn>
  </v-app-bar>
</template>

<script setup>
import { VAppBar, VToolbarTitle, VSpacer, VBtn, VIcon } from 'vuetify/components';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.toolbar-title-style {
  /* padding-left: 24px; 距离左边界更远 */
  cursor: pointer; /* 添加手型鼠标指针 */
}

.btn-style {
  border: none; /* 移除按钮边框 */
  border-radius: 18px; /* 圆角 */
  text-transform: none; /* 移除大写字母样式 */
  color: #5C6BC0; /* 淡蓝色字体颜色 */
}

.user-btn-style {
  margin-right: 24px; /* 距离右边界更远 */
}
</style>
