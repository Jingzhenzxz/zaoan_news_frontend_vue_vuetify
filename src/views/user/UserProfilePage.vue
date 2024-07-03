<template>
  <v-container>
    <v-card flat class="pa-6" max-width="800">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >用户名：{{ form.username }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>邮箱：{{ form.email }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn flat class="mt-4" @click="openUpdateDialog('all')">
              更新资料
            </v-btn>
            <v-btn flat color="pink" @click="logout" class="mt-4 mx-2">退出登录</v-btn>
            <!-- <v-btn flat color="pink" @click="deleteAccount" class="mt-4">注销账户</v-btn> -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-snackbar v-model="errorSnackbar" :timeout="2000" color="error">
      {{ errorMessage }}
    </v-snackbar>

    <v-snackbar v-model="successSnackbar" :timeout="2000" color="success">
      {{ successMessage }}
    </v-snackbar>

    <!-- 更新资料对话框 -->
    <UpdateProfileDialog
      v-model="showUpdateDialog"
      :update-field="updateField"
      @update-success="handleUpdateSuccess"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/store/userStore";
import { userLogoutUsingPost } from "@/api/userController";
import UpdateProfileDialog from "@/views/user/UpdateProfileDialog.vue";

const loginUserStore = useLoginUserStore();
const router = useRouter();

const form = ref({
  username: loginUserStore.loginUser.username,
  email: loginUserStore.loginUser.email || "",
});

const errorSnackbar = ref(false);
const errorMessage = ref("");
const successSnackbar = ref(false);
const successMessage = ref("");

const showUpdateDialog = ref(false);
const updateField = ref<"username" | "email" | "all">("all");

/**
 * 打开更新资料对话框
 */
const openUpdateDialog = (field: "username" | "email" | "all") => {
  updateField.value = field;
  showUpdateDialog.value = true;
};

/**
 * 更新成功处理
 */
const handleUpdateSuccess = (message: string) => {
  successSnackbar.value = true;
  successMessage.value = message;
};

/**
 * 退出登录
 */
const logout = async () => {
  try {
    await userLogoutUsingPost();
    loginUserStore.setLoginUser({ username: "未登录" });
    successSnackbar.value = true;
    successMessage.value = "退出登录成功";
    setTimeout(() => {
      router.push("/auth/login");
    }, 2000); // 延迟2秒后跳转
  } catch (err) {
    errorSnackbar.value = true;
    errorMessage.value = "退出登录失败，" + err.message;
  }
};

/**
 * 注销账户
 */
// const deleteAccount = async () => {
//   try {
//     const res = await deleteUserUsingPost({
//       userId: loginUserStore.loginUser.id, // 假设 loginUserStore 包含 userId
//     });
//     if (res.data.code === 0) {
//       loginUserStore.setLoginUser({ username: "未登录" });
//       successSnackbar.value = true;
//       successMessage.value = "账户已注销";
//       setTimeout(() => {
//         router.push("/register");
//       }, 2000); // 延迟2秒后跳转
//     } else {
//       errorSnackbar.value = true;
//       errorMessage.value = "账户注销失败，" + res.data.message;
//     }
//   } catch (err) {
//     errorSnackbar.value = true;
//     errorMessage.value = "账户注销失败，" + err.message;
//   }
// };
</script>

<style scoped>
.pa-6 {
  padding: 24px;
}
</style>
