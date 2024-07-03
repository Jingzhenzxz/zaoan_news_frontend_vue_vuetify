// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** addTopic POST /api/topic/add */
export async function addTopicUsingPost(
  body: API.TopicAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/topic/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteTopic POST /api/topic/delete */
export async function deleteTopicUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/topic/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTopicById GET /api/topic/getById */
export async function getTopicByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTopicByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopic_>('/api/topic/getById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTopicVOById GET /api/topic/getById/vo */
export async function getTopicVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTopicVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopicVO_>('/api/topic/getById/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTopicByName GET /api/topic/getByName */
export async function getTopicByNameUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTopicByNameUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopic_>('/api/topic/getByName', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTopicVOByName GET /api/topic/getByName/vo */
export async function getTopicVoByNameUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTopicVOByNameUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopicVO_>('/api/topic/getByName/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listTopicByPage POST /api/topic/list/page */
export async function listTopicByPageUsingPost(
  body: API.TopicQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopic_>('/api/topic/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listTopicVOByPage POST /api/topic/list/page/vo */
export async function listTopicVoByPageUsingPost(
  body: API.TopicQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicVO_>('/api/topic/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateTopic POST /api/topic/update */
export async function updateTopicUsingPost(
  body: API.TopicUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/topic/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
