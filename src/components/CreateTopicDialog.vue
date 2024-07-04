<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card rounded="lg">
      <v-card-title>创建话题</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="newTopicName"
          label="话题名称"
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="createTopic">确定</v-btn>
        <v-btn color="grey" text @click="close">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Snackbar notifications -->
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :timeout="5000"
    top
    right
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import {
  getTopicVoByNameUsingGet,
  addTopicUsingPost,
} from "@/api/topicController";
import { API } from "@/api/types";
import { useRoute, useRouter } from "vue-router";

const props = defineProps<{ modelValue: boolean }>();

const emit = defineEmits(["update:modelValue"]);

const show = ref(props.modelValue);
const newTopicName = ref("");
const snackbar = ref({
  show: false,
  message: "",
  color: "success",
});
const router = useRouter();
const route = useRoute();

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
    newTopicName.value = "";
    snackbar.value.show = false;
  }
});

const rules = {
  required: (value: string) => !!value || "此项不能为空",
};

const createTopic = async () => {
  snackbar.value.show = false;

  const trimmedTopicName = newTopicName.value.trim();

  if (!trimmedTopicName) {
    showSnackbar("话题名称不能为空", "error");
    return;
  }

  const response = await getTopicVoByNameUsingGet({
    topicName: trimmedTopicName,
  });
  if (response.data.code === 0 && response.data.data) {
    showSnackbar("该话题已存在", "error");
  } else {
    const addResponse = await addTopicUsingPost({ name: trimmedTopicName });
    if (addResponse.data.code === 0) {
      showSnackbar("话题创建成功", "success");
      setTimeout(() => {
        close();
        router.push(route.fullPath).then(() => {
          window.location.reload();
        });
      }, 1000); // 延迟1秒后关闭对话框
    } else {
      showSnackbar("话题创建失败", "error");
    }
  }
};

const close = () => {
  emit("update:modelValue", false);
};

const showSnackbar = (message: string, color: string) => {
  snackbar.value.message = message;
  snackbar.value.color = color;
  snackbar.value.show = true;
};
</script>

<style scoped></style>
