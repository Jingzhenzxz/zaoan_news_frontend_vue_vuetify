// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** followTopic POST /api/userTopicFollowing/followTopic */
export async function followTopicUsingPost(
  body: API.UserTopicFollowingAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userTopicFollowing/followTopic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getFollowingTopic POST /api/userTopicFollowing/get */
export async function getFollowingTopicUsingPost(
  body: API.UserTopicFollowingQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopic_>('/api/userTopicFollowing/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getFollowingTopicVO POST /api/userTopicFollowing/get/vo */
export async function getFollowingTopicVoUsingPost(
  body: API.UserTopicFollowingQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTopicVO_>('/api/userTopicFollowing/get/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFollowingTopicsByPage POST /api/userTopicFollowing/list/page */
export async function listFollowingTopicsByPageUsingPost(
  body: API.UserTopicFollowingQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopic_>('/api/userTopicFollowing/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFollowingTopicVOsByPage POST /api/userTopicFollowing/list/page/vo */
export async function listFollowingTopicVOsByPageUsingPost(
  body: API.UserTopicFollowingQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTopicVO_>('/api/userTopicFollowing/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** unfollowTopic POST /api/userTopicFollowing/unfollowTopic */
export async function unfollowTopicUsingPost(
  body: API.UserTopicFollowingDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/userTopicFollowing/unfollowTopic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
