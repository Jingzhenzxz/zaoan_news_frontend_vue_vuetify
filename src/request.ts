import axios from 'axios';
import { warning } from '@/components/Snackbar.vue';

// 创建一个 axios 实例，配置基础 URL、超时时间和跨域请求是否携带凭证
const myAxios = axios.create({
  baseURL: 'http://localhost:8087', // 基础 URL，所有请求都会基于这个 URL 发送
  timeout: 60000, // 请求超时时间，单位为毫秒
  withCredentials: true, // 跨域请求时是否携带凭证（如 cookie）
});

// 全局请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // 在请求发送之前做一些处理
    // 可以在这里添加通用的请求头，或进行一些其他的配置
    return config;
  },
  function (error) {
    // 请求错误时做一些处理
    return Promise.reject(error);
  }
);

// 全局响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    // 响应成功时触发的函数
    console.log(response);
    // 对响应数据进行处理
    const { data } = response;

    // 未登录处理
    if (data.code === 40100) {
      // 如果不是获取用户信息的请求，并且用户目前不在登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('user/get/login') && // 请求 URL 中不包含 'user/get/login'
        !window.location.pathname.includes('/auth/login') // 当前路径中不包含 '/auth/login'
      ) {
        // 显示警告信息
        warning('请先登录', 'warning');
        // 重定向到登录页面，并携带当前页面的 URL 以便登录后跳转回来
        window.location.href = `/auth/login?redirect=${window.location.href}`;
      }
    }

    return response;
  },
  function (error) {
    // 响应错误时触发的函数
    // 任何状态码在 2xx 以外的都会触发这个函数
    return Promise.reject(error);
  }
);

export default myAxios;
