<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#fab-activator"
      offset-y
    >
      <v-list>
        <v-list-item @click="showTopicDialog = true">
          <v-list-item-title>创建话题</v-list-item-title>
        </v-list-item>
        <v-list-item @click="showMediaDialog = true">
          <v-list-item-title>添加内容源</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      id="fab-activator"
      variant="tonal"
      size="x-large"
      rounded="xl"
      dark
      class="fab"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <CreateTopicDialog v-model="showTopicDialog" />
    <AddMediaDialog v-model="showMediaDialog" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CreateTopicDialog from "@/components/CreateTopicDialog.vue";
import AddMediaDialog from "@/components/AddMediaDialog.vue";

const menu = ref(false);
const showTopicDialog = ref(false);
const showMediaDialog = ref(false);
</script>

<style scoped>
.fab {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
}
</style>
