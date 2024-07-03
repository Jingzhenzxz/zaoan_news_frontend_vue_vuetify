<template>
  <v-container>
    <v-row class="align-center mb-4">
      <v-avatar size="64" class="mr-4">
        <img :src="topic?.avatar" alt="Avatar" />
      </v-avatar>
      <div class="flex-grow-1">
        <h2 class="topic-title">{{ topic?.topicName }}</h2>
      </div>
      <v-btn variant="tonal" @click="toggleFollow">{{
        followButtonText
      }}</v-btn>
    </v-row>
    <v-row>
      <v-col cols="12" v-for="news in newsList" :key="news.id">
        <NewsCard :news="news" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-pagination
        v-model:page="searchParams.current"
        :length="totalPages"
        :total-visible="5"
        @next="onPageChange"
        @prev="onPageChange"
        @update:modelValue="onPageChange"
        class="my-4"
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getTopicVoByIdUsingGet } from "@/api/topicController";
import { listNewsVoByPageUsingPost } from "@/api/newsController";
import {
  getFollowingTopicUsingPost,
  followTopicUsingPost,
  unfollowTopicUsingPost,
} from "@/api/userTopicFollowingController";
import { API } from "@/api/types";
import NewsCard from "@/components/NewsCard.vue";
import { useLoginUserStore } from "@/store/userStore";

const route = useRoute();
const router = useRouter();
const topicId = route.params.topicId;

const topic = ref<API.TopicVO | null>(null);
const newsList = ref<API.NewsVO[]>([]);
const isFollowed = ref(false);
const totalPages = ref(1);

const loginUserStore = useLoginUserStore();
const userId = computed(() => loginUserStore.loginUser.id);

const searchParams = ref<API.NewsQueryRequest>({
  current: 1,
  pageSize: 10,
  topicId: Number(topicId),
});

const fetchTopic = async () => {
  const response = await getTopicVoByIdUsingGet({ id: topicId });
  if (response?.data?.code === 0) {
    topic.value = response.data.data;
  } else {
    router.push({ name: "NotFound", params: { catchAll: "not-found" } });
  }
};

const fetchNews = async () => {
  const response = await listNewsVoByPageUsingPost(searchParams.value);
  if (response?.data?.code === 0) {
    newsList.value = response.data.data.records;
    totalPages.value = Math.ceil(
      response.data.data.total / searchParams.value.pageSize
    );
  }
};

const checkIfFollowing = async () => {
  const response = await getFollowingTopicUsingPost({
    topicId: Number(topicId),
    userId: userId.value,
  });
  if (response?.data?.code === 0) {
    isFollowed.value = true;
  } else {
    isFollowed.value = false;
  }
};

const followButtonText = computed(() => (isFollowed.value ? "已关注" : "关注"));

const toggleFollow = async () => {
  if (isFollowed.value) {
    const response = await unfollowTopicUsingPost({
      topicId: Number(topicId),
      userId: userId.value,
    });
    if (response?.data?.code === 0) {
      isFollowed.value = false;
    }
  } else {
    const response = await followTopicUsingPost({
      topicId: Number(topicId),
      userId: userId.value,
    });
    if (response?.data?.code === 0) {
      isFollowed.value = true;
    }
  }
};

const onPageChange = (page: number) => {
  searchParams.value.current = page;
  fetchNews();
};

onMounted(() => {
  fetchTopic();
  fetchNews();
  checkIfFollowing();
});

watch(
  () => searchParams.value.current,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      fetchNews();
    }
  }
);
</script>

<style scoped>
.v-avatar {
  display: inline-block;
}
.topic-title {
  margin: 0;
  font-size: 24px;
  text-align: left;
}
.flex-grow-1 {
  flex-grow: 1;
}
</style>
