<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <v-alert>
          访问的页面不存在, 将在 {{ countdown }} 秒后跳转到首页。
        </v-alert>
        <v-btn variant="text" @click="goHome">返回首页</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const countdown = ref(5); // 倒计时秒数

let countdownInterval: NodeJS.Timeout;

const goHome = () => {
  router.push('/');
};

onMounted(() => {
  countdownInterval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      goHome();
    }
  }, 1000); // 每秒减少1
});

onBeforeUnmount(() => {
  clearInterval(countdownInterval); // 清除计时器
});
</script>

<style scoped>
.v-alert {
  margin: 20px 0;
}
</style>
