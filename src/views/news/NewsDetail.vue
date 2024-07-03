<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-avatar v-if="news?.previewImage" size="128" class="mb-4">
          <img :src="news.previewImage" alt="Preview Image" />
        </v-avatar>
        <h1>{{ news?.title }}</h1>
        <div class="subtitle-1 text-muted custom-text mb-4">
          {{ news?.author }} | {{ formattedPubDate }}
          <span v-if="news?.link">
            | <a :href="news.link" target="_blank">阅读原文</a>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card variant="flat">
          <v-card-text>
            <p v-html="news?.description"></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getNewsVoByIdUsingGet } from "@/api/newsController";
import { API } from "@/api/types";
import { format } from "date-fns";

const route = useRoute();
const newsId = route.params.newsId;

const news = ref<API.NewsVO | null>(null);

const formattedPubDate = computed(() => {
  return news.value?.pubDate
    ? format(new Date(news.value.pubDate), "yyyy-MM-dd HH:mm:ss")
    : "";
});

const fetchNews = async () => {
  const response = await getNewsVoByIdUsingGet({ id: Number(newsId) });
  if (response?.data?.code === 0) {
    news.value = response.data.data;
  }
};

onMounted(() => {
  fetchNews();
});
</script>

<style scoped>
.v-avatar {
  display: inline-block;
}
.subtitle-1 {
  margin-bottom: 16px;
}
.v-card {
  margin-bottom: 16px;
}
h1 {
  margin-bottom: 20px; /* 增加h1和下面的div之间的间距 */
}
.custom-text {
  color: #999999; /* 设置一个较浅的颜色 */
}
</style>
