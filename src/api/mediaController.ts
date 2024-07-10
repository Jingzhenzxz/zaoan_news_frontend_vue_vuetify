// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** createMedia POST /api/media/add */
export async function createMediaUsingPost(
  body: API.MediaAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/media/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMedia DELETE /api/media/delete */
export async function deleteMediaUsingDelete(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/media/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMediaById GET /api/media/getById */
export async function getMediaByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMediaByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMedia_>('/api/media/getById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMediaVOById GET /api/media/getById/vo */
export async function getMediaVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMediaVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMediaVO_>('/api/media/getById/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMediaByLink POST /api/media/getByLink */
export async function getMediaByLinkUsingPost(
  body: API.MediaQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMedia_>('/api/media/getByLink', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMediaVOByLink POST /api/media/getByLink/vo */
export async function getMediaVoByLinkUsingPost(
  body: API.MediaQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMediaVO_>('/api/media/getByLink/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMediaByNameAndLink POST /api/media/getByNameAndLink */
export async function getMediaByNameAndLinkUsingPost(
  body: API.MediaQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMedia_>('/api/media/getByNameAndLink', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMediaVOByNameAndLink POST /api/media/getByNameAndLink/vo */
export async function getMediaVoByNameAndLinkUsingPost(
  body: API.MediaQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMediaVO_>('/api/media/getByNameAndLink/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMediaByPage POST /api/media/list/page */
export async function listMediaByPageUsingPost(
  body: API.MediaQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageMedia_>('/api/media/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMedia POST /api/media/update */
export async function updateMediaUsingPost(
  body: API.MediaUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/media/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
