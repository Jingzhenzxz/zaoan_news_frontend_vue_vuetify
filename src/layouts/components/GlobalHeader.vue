<template>
  <v-app-bar flat>
    <v-toolbar-title @click="goHome" class="toolbar-title-style">
      <v-icon large class="mr-2">mdi-sun-wireless</v-icon>
      早安资讯
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/followingTopics" class="mx-2 btn-style">关注</v-btn>
    <v-btn text to="/latest" class="mx-2 btn-style">最新</v-btn>
    <v-btn text to="/user" class="mx-2 btn-style user-btn-style"
      >个人中心</v-btn
    >
  </v-app-bar>
</template>

<script setup>
import {
  VAppBar,
  VToolbarTitle,
  VSpacer,
  VBtn,
  VIcon,
} from "vuetify/components";
import { useLoginUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const loginUserStore = useLoginUserStore();

onMounted(async () => {
  await loginUserStore.fetchLoginUser();
});

const goHome = () => {
  const redirectPath =
    loginUserStore.loginUser.userRole !== ACCESS_ENUM.NOT_LOGIN
      ? "/followingTopics"
      : "/latest";
  router.push({
    path: redirectPath,
    replace: true,
  });
};
</script>

<style scoped>
.toolbar-title-style {
  /* padding-left: 24px; 距离左边界更远 */
  cursor: pointer; /* 添加手型鼠标指针 */
}

.btn-style {
  color: #5c6bc0; /* 移除按钮边框 */
  text-transform: none; -radius: 18px;
  border: none;
  border-radius: 18px; /* 写字母样式 */
}

.user-btn-style {
  margin-right: 24px; /* 距离右边界更远 */
}
</style>
