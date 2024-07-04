<template>
  <v-container id="userRegisterPage">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="0"
      max-width="448"
      rounded="lg"
    >
      <v-card-title>
        <h2 style="margin-bottom: 16px">用户登录</h2>
      </v-card-title>

      <v-card-text>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          邮箱
        </div>
        <v-text-field
          v-model="form.email"
          density="compact"
          placeholder="邮箱"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          密码
          <!-- <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            忘记密码?
          </a> -->
        </div>
        <v-text-field
          v-model="form.password"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          density="compact"
          placeholder="请输入密码"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="handleSubmit"
        >
          登录
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="/auth/register"
            rel="noopener noreferrer"
          >
            注册 <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card-text>
    </v-card>
  </v-container>

  <v-snackbar v-model="errorSnackbar" :timeout="2000" color="error">
    {{ errorMessage }}
  </v-snackbar>

  <v-snackbar v-model="successSnackbar" :timeout="2000" color="success">
    {{ successMessage }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { userLoginUsingPost } from "@/api/userController";
import { useLoginUserStore } from "@/store/userStore";
import ACCESS_ENUM from "@/access/accessEnum";

const loginUserStore = useLoginUserStore();
const router = useRouter();

const showPassword = ref(false);

const form = reactive({
  email: "",
  password: "",
} as API.UserLoginRequest);

let errorSnackbar = ref(false);
let errorMessage = ref("");
let successSnackbar = ref(false);
let successMessage = ref("");

/**
 * 提交
 */
const handleSubmit = async () => {
  const res = await userLoginUsingPost(form);
  if (res.data.code === 0) {
    await loginUserStore.fetchLoginUser();
    successSnackbar.value = true;
    successMessage.value = "登录成功，正在跳转";
    // 延迟路由跳转
    setTimeout(() => {
      const redirectPath =
        loginUserStore.loginUser.userRole !== ACCESS_ENUM.NOT_LOGIN
          ? "/followingTopics"
          : "/latest";
      router.push({
        path: redirectPath,
        replace: true,
      });
    }, 1000); // 延迟1秒（与Snackbar的timeout一致）
  } else {
    errorSnackbar.value = true;
    errorMessage.value = "登录失败，" + res.data.message;
  }
};
</script>

<style scoped>
.pa-12 {
  padding: 48px;
}
.pb-8 {
  padding-bottom: 32px;
}
</style>
