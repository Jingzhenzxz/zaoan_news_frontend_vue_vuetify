<template>
<v-container id="userRegisterPage">
      <v-card
      class="mx-auto pa-12 pb-8"
      elevation="0"
      max-width="448"
      rounded="xl"
    >
      <v-card-title>
        <h2 style="margin-bottom: 16px">用户注册</h2>
      </v-card-title>

      <v-card-text>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          用户名
        </div>
        <v-text-field
          v-model="form.username"
          density="compact"
          placeholder="用户名"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          :rules="[rules.required]"
          class="custom-text-field"
        ></v-text-field>

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
          :rules="[rules.required, rules.email]"
          class="custom-text-field"
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
          :append-inner-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          density="compact"
          placeholder="请输入密码"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="showPassword = !showPassword"
          :rules="[rules.required, rules.min]"
          class="custom-text-field"
        ></v-text-field>

        <v-text-field
          v-model="form.confirmPassword"
          :append-inner-icon="!showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showConfirmPassword ? 'text' : 'password'"
          density="compact"
          placeholder="请再输一次密码"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="showConfirmPassword = !showConfirmPassword"
          :rules="[rules.required, rules.matchPassword]"
          class="custom-text-field"
        ></v-text-field>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="handleSubmit"
        >
          注册
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="/auth/login"
            rel="noopener noreferrer"
          >
            登录 <v-icon icon="mdi-chevron-right"></v-icon>
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
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { userRegisterUsingPost } from "@/api/userController";
import { log } from "console";

const router = useRouter();

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const valid = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const rules = {
  required: (value: string) => !!value || "此项不能为空！",
  min: (v: string) => v.length >= 8 || "最少8个字符！",
  matchPassword: () =>
    form.password === form.confirmPassword || "两次输入的密码不一致！",
  email: (value: string) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(value) || "请输入有效的邮箱地址！";
  },
};

let errorSnackbar = ref(false);
let errorMessage = ref("");
let successSnackbar = ref(false);
let successMessage = ref("");

watch(
  () => [form.username, form.email, form.password, form.confirmPassword],
  () => {
    console.log("enter watch valid, valid is", valid);

    valid.value =
      rules.required(form.username) &&
      rules.required(form.email) &&
      rules.email(form.email) &&
      rules.required(form.password) &&
      rules.min(form.password) &&
      rules.required(form.confirmPassword) &&
      rules.min(form.confirmPassword) &&
      rules.matchPassword() &&
      true;
  },
  { deep: true }
);

/**
 * 提交
 */
const handleSubmit = async () => {
  console.log("enter submit, valid is", valid)
  if (!valid.value) {
    errorSnackbar.value = true;
    errorMessage.value = "请确保所有字段均已正确填写。"
    return;
  }

  const res = await userRegisterUsingPost({
    username: form.username,
    email: form.email,
    password: form.password,
    confirmPassword: form.confirmPassword,
  });

  if (res.data.code === 0) {
    successSnackbar.value = true;
    successMessage.value = "注册成功，正在跳转……";
    // 延迟路由跳转
    setTimeout(() => {
      router.push({
        path: "/auth/login",
        replace: true,
      });
    }, 2000); // 延迟2秒（与Snackbar的timeout一致）
  } else {
    errorSnackbar.value = true;
    errorMessage.value = "注册失败，" + res.data.message;
  }
};
</script>

<style scoped>
.custom-text-field .v-input__control {
  background-color: white !important;
}
</style>
