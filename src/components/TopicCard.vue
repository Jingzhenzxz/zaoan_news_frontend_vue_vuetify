<template>
  <v-col cols="12" sm="6" md="4">
    <v-card flat class="mb-5">
      <v-card-title class="card-title-custom">
        <v-chip
          class="ma-2"
          color="primary"
          text-color="white"
          @click="onChipClick(topicCard.id)"
        >
          {{ topicCard.topicName }}
        </v-chip>
      </v-card-title>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="news in topicCard.listOfNews"
            :key="news?.title"
            class="list-item-custom"
          >
            <v-list-item-content>
              <v-list-item-title
                class="clickable"
                @click="onNewsClick(news?.id)"
                >{{ news?.title }}</v-list-item-title
              >
              <v-list-item-subtitle
                class="clickable"
                @click="onNewsClick(news?.id)"
                >{{ news?.description }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions>
        <v-btn text color="primary" @click="onNewContentClick(topicCard.id)"
          >今日新增 {{ topicCard.newContentTodayCount }} 条内容</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  topicCard: {
    id: number;
    topicName: string;
    listOfNews: Array<{ id: number; title: string; description: string }>;
    newContentTodayCount: number;
  };
}>();

const router = useRouter();

const onChipClick = (topicId: number) => {
  router.push({ name: "TopicDetail", params: { topicId } });
};

const onNewsClick = (newsId: number) => {
  router.push({ name: "NewsDetail", params: { newsId } });
};

const onNewContentClick = (topicId: number) => {
  router.push({ name: "TopicDetail", params: { topicId } });
};
</script>

<style scoped>
/* .v-card {
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
} */
.v-btn {
  border-radius: 18px;
}
.card-title-custom {
  padding-left: 6px; /* 根据需要调整左侧内边距以与列表项对齐 */
}

.list-item-custom .v-list-item-content {
  padding-left: 0; /* 移除列表项的默认左侧内边距 */
}

.clickable {
  cursor: pointer;
  transition: color 0.3s;
}
.clickable:hover {
  color: blueviolet;
}
</style>
