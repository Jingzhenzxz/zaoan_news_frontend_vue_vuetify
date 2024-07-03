// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** getNewsById GET /api/news/get */
export async function getNewsByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNewsByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseNews_>('/api/news/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getNewsVOById GET /api/news/get/vo */
export async function getNewsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNewsVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseNewsVO_>('/api/news/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listNewsByPage POST /api/news/list/page */
export async function listNewsByPageUsingPost(
  body: API.NewsQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/api/news/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listNewsVOByPage POST /api/news/list/page/vo */
export async function listNewsVoByPageUsingPost(
  body: API.NewsQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNewsVO_>('/api/news/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
