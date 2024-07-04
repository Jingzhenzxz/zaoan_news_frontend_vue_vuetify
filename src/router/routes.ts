import { RouteRecordRaw } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import UserLoginPage from "@/views/user/UserLoginPage.vue";
import UserRegisterPage from "@/views/user/UserRegisterPage.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import FollowingTopicsPage from "@/views/topic/FollowingTopicsPage.vue";
import AllTopicsPage from "@/views/topic/AllTopicsPage.vue";
import UserProfilePage from "@/views/user/UserProfilePage.vue";
import TopicDetail from "@/views/topic/TopicDetail.vue";
import NewsDetail from "@/views/news/NewsDetail.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import NotFoundPage from "@/views/NotFoundPage.vue";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/latest" }, // 初始状态下重定向到 /latest
  {
    path: "/",
    name: "主页",
    component: MainLayout,
    children: [
      {
        path: "followingTopics",
        name: "关注",
        component: FollowingTopicsPage,
        meta: { access: ACCESS_ENUM.USER },
      },
      {
        path: "latest",
        name: "最新",
        component: AllTopicsPage,
      },
      {
        path: "topic/:topicId",
        name: "TopicDetail",
        component: TopicDetail,
      },
      {
        path: "news/:newsId",
        name: "NewsDetail",
        component: NewsDetail,
      },
      {
        path: "user",
        name: "个人中心",
        component: UserProfilePage,
        meta: { access: ACCESS_ENUM.USER },
      },
    ],
  },
  {
    path: "/auth",
    name: "用户",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "用户登录",
        component: UserLoginPage,
      },
      {
        path: "register",
        name: "用户注册",
        component: UserRegisterPage,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  // 捕获所有未定义路由的配置
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];
