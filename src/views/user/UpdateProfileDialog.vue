<template>
  <v-dialog v-model="show" max-width="600px">
    <v-card rounded="lg">
      <v-card-title>
        更新{{
          updateField === "all"
            ? "资料"
            : updateField === "username"
            ? "用户名"
            : "电子邮件"
        }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-if="updateField === 'username' || updateField === 'all'"
          v-model="form.username"
          label="用户名"
          prepend-icon="mdi-account"
          :rules="[rules.required]"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-if="updateField === 'email' || updateField === 'all'"
          v-model="form.email"
          label="电子邮件"
          prepend-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-if="updateField === 'all'"
          v-model="form.password"
          label="密码"
          prepend-icon="mdi-lock"
          :type="'password'"
          :rules="passwordRules"
          variant="outlined"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="updateProfile">更新</v-btn>
        <v-btn color="grey" @click="close">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import { useLoginUserStore } from "@/store/userStore";
import {
  updateMyUserUsingPost,
  updateUserUsingPost,
} from "@/api/userController";

const props = defineProps<{
  modelValue: boolean;
  updateField: "username" | "email" | "all";
}>();

const emit = defineEmits(["update:modelValue", "update-success"]);

const loginUserStore = useLoginUserStore();

const show = ref(props.modelValue);
const form = ref({
  username: loginUserStore.loginUser.username,
  email: loginUserStore.loginUser.email || "",
  password: "",
});

const rules = {
  required: (value: string) => !!value || "此项不能为空！",
  email: (value: string) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(value) || "请输入有效的电子邮件地址！";
  },
  minPasswordLength: (value: string) =>
    value.length >= 8 || "密码最少8个字符！",
};

const passwordRules = computed(() => {
  const rulesArray = [];
  if (form.value.password.length > 0) {
    rulesArray.push(rules.minPasswordLength);
  }
  return rulesArray;
});

watch(
  () => props.modelValue,
  (newVal) => {
    show.value = newVal;
  }
);

watch(show, (newVal) => {
  emit("update:modelValue", newVal);
  if (!newVal) {
    // 对话框关闭时重置状态
    form.value.password = "";
  }
});

/**
 * 更新用户资料
 */
const updateProfile = async () => {
  try {
    const res = await updateMyUserUsingPost({
      username: form.value.username,
      email: form.value.email,
      password: form.value.password || undefined, // 如果密码为空则不更新
    });
    if (res.data.code === 0) {
      loginUserStore.setLoginUser(res.data.data);
      emit("update-success", "资料更新成功");
      close();
    } else {
      emit("update-success", "资料更新失败，" + res.data.message);
    }
  } catch (err) {
    emit("update-success", "资料更新失败，" + err.message);
  }
};

const close = () => {
  emit("update:modelValue", false);
};
</script>

<style scoped></style>
