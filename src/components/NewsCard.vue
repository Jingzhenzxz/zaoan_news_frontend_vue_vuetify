<template>
  <v-card variant="flat">
    <v-card-title class="clickable" @click="navigateToNewsDetail">{{ news.title }}</v-card-title>
    <v-card-subtitle class="clickable pb-2" @click="navigateToNewsDetail">{{ news.description }}</v-card-subtitle>
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <div>
          <span class="clickable" @click="navigateToMediaDetail">{{ news.mediaName }}</span>
          <span class="separator">|</span>
          <span> {{ formattedPubDate }}</span>
        </div>
        <v-avatar v-if="news.previewImage" size="64" class="clickable" @click="navigateToNewsDetail">
          <img :src="news.previewImage" alt="Preview" />
        </v-avatar>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { format } from 'date-fns';

const props = defineProps<{
  news: API.NewsVO
}>();

const router = useRouter();

const navigateToNewsDetail = () => {
  router.push({ name: 'NewsDetail', params: { newsId: props.news.id } });
};

const navigateToMediaDetail = () => {
  router.push({ name: 'MediaDetail', params: { mediaId: props.news.mediaId } });
};

const formattedPubDate = computed(() => {
  return format(new Date(props.news.pubDate), 'yyyy-MM-dd HH:mm:ss');
});
</script>

<style scoped>
.v-avatar {
  display: inline-block;
}
.clickable {
  cursor: pointer;
  transition: color 0.3s;
}
.clickable:hover {
  color: blueviolet;
}
.separator {
  margin: 0 8px;
  color: grey;
}
</style>

