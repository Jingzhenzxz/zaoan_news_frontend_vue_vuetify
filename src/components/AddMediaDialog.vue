<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card rounded="lg">
      <v-card-title>添加内容源</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="newMediaName"
          label="内容源名称"
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="newMediaLink"
          label="RSS 链接"
          variant="outlined"
          :rules="[rules.required, rules.validRssLink]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="createMedia">确定</v-btn>
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
  createMediaUsingPost,
  getMediaVoByLinkUsingPost,
} from "@/api/mediaController";
import { API } from "@/api/types";
import { useRoute, useRouter } from "vue-router";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

const show = ref(props.modelValue);
const newMediaName = ref("");
const newMediaLink = ref("");
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
    newMediaName.value = "";
    newMediaLink.value = "";
    snackbar.value.show = false;
  }
});

const rules = {
  required: (value: string) => !!value || "此项不能为空",
  validRssLink: (value: string) => {
    const rssLinkPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w .-]*)*\/?$/;
    return rssLinkPattern.test(value);
  },
};

const createMedia = async () => {
  snackbar.value.show = false;

  const trimmedMediaName = newMediaName.value.trim();

  if (!trimmedMediaName) {
    showSnackbar("内容源名称不能为空", "error");
    return;
  }
  if (!newMediaLink.value) {
    showSnackbar("RSS 链接不能为空", "error");
    return;
  }
  if (!rules.validRssLink(newMediaLink.value)) {
    showSnackbar("请输入有效的 RSS 链接", "error");
    return;
  }

  const response = await getMediaVoByLinkUsingPost({
    rssLink: newMediaLink.value,
  });

  if (response.data.code === 0 && response.data.data) {
    showSnackbar("该内容源已存在", "error");
  } else {
    const addResponse = await createMediaUsingPost({
      name: trimmedMediaName,
      rssLink: newMediaLink.value,
    });

    if (addResponse.data.code === 0) {
      showSnackbar("内容源创建成功", "success");
      setTimeout(() => {
        close();
        router.push(route.fullPath).then(() => {
          window.location.reload();
        });
      }, 1000); // 延迟1秒后关闭对话框
    } else {
      showSnackbar("内容源创建失败：" + addResponse.data.message, "error");
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
