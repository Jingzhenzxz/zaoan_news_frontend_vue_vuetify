<template>
  <v-container fluid>
    <v-row>
      <topic-card
        v-for="topicCard in dataList"
        :key="topicCard.topicName"
        :topicCard="topicCard"
      />
    </v-row>
    <v-pagination
      v-if="total > searchParams.pageSize"
      v-model:page="searchParams.current"
      :length="totalPages"
      @next="onPageChange"
      @prev="onPageChange"
      @update:modelValue="onPageChange"
      class="my-4"
    ></v-pagination>
  </v-container>
</template>

<script setup lang="ts">
import TopicCard from "@/components/TopicCard.vue";
import { ref, watchEffect } from "vue";
import { listTopicVoByPageUsingPost } from "@/api/topicController";

// 初始化搜索条件（不应该被修改）
const initSearchParams = {
  current: 1,
  pageSize: 12,
};

const searchParams = ref({
  ...initSearchParams,
});

const dataList = ref([]);
const total = ref(0);
const totalPages = ref(0);

/**
 * 加载数据
 */
const loadData = async () => {
  try {
    const params = {
      ...searchParams.value,
    };
    const res = await listTopicVoByPageUsingPost(params);
    if (res.data.code === 0) {
      dataList.value = res.data.data?.records || [];
      total.value = res.data.data?.total || 0;
      totalPages.value = Math.ceil(total.value / searchParams.value.pageSize);

    } else {
      console.error("获取数据失败", res.data.message);
    }
  } catch (error) {
    console.error("加载数据出错", error);
  }
};

/**
 * 当分页变化时，改变搜索条件，触发数据加载
 * @param page
 */
const onPageChange = (page: number) => {
  searchParams.value.current = page;
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});
</script>

<style scoped>
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
