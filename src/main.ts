/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";
// router
import router from "./router";
import Snackbar from "./components/Snackbar.vue";
import { createPinia } from "pinia";
// 导入权限校验
import "@/access";

const app = createApp(App);
const pinia = createPinia();

registerPlugins(app);

app.use(router);
app.component("Snackbar", Snackbar);
app.use(pinia);
app.mount("#app");
