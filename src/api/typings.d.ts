declare namespace API {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMedia_ = {
    code?: number;
    data?: Media;
    message?: string;
  };

  type BaseResponseMediaVO_ = {
    code?: number;
    data?: MediaVO;
    message?: string;
  };

  type BaseResponseNews_ = {
    code?: number;
    data?: News;
    message?: string;
  };

  type BaseResponseNewsVO_ = {
    code?: number;
    data?: NewsVO;
    message?: string;
  };

  type BaseResponsePageMedia_ = {
    code?: number;
    data?: PageMedia_;
    message?: string;
  };

  type BaseResponsePageNewsVO_ = {
    code?: number;
    data?: PageNewsVO_;
    message?: string;
  };

  type BaseResponsePageTopic_ = {
    code?: number;
    data?: PageTopic_;
    message?: string;
  };

  type BaseResponsePageTopicVO_ = {
    code?: number;
    data?: PageTopicVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseTopic_ = {
    code?: number;
    data?: Topic;
    message?: string;
  };

  type BaseResponseTopicVO_ = {
    code?: number;
    data?: TopicVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getMediaByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getMediaVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getNewsByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getNewsVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getTopicByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getTopicByNameUsingGETParams = {
    /** topicName */
    topicName: string;
  };

  type getTopicVOByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getTopicVOByNameUsingGETParams = {
    /** topicName */
    topicName: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createAt?: string;
    email?: string;
    id?: number;
    updateAt?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };

  type Media = {
    createdAt?: string;
    id?: number;
    name?: string;
    rssLink?: string;
    updatedAt?: string;
  };

  type MediaAddRequest = {
    name?: string;
    rssLink?: string;
  };

  type MediaQueryRequest = {
    current?: number;
    id?: number;
    name?: string;
    pageSize?: number;
    rssLink?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type MediaUpdateRequest = {
    id?: number;
    name?: string;
    rssLink?: string;
    userId?: number;
  };

  type MediaVO = {
    createdAt?: string;
    id?: number;
    name?: string;
    rssLink?: string;
  };

  type News = {
    author?: string;
    createdAt?: string;
    description?: string;
    id?: number;
    link?: string;
    mediaId?: number;
    mediaName?: string;
    previewImage?: string;
    pubDate?: string;
    title?: string;
    updatedAt?: string;
  };

  type NewsQueryRequest = {
    author?: string;
    current?: number;
    id?: number;
    link?: string;
    mediaId?: number;
    mediaName?: string;
    pageSize?: number;
    pubDate?: string;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    topicId?: number;
  };

  type NewsVO = {
    author?: string;
    description?: string;
    id?: number;
    link?: string;
    mediaId?: number;
    mediaName?: string;
    previewImage?: string;
    pubDate?: string;
    title?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageMedia_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Media[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNewsVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: NewsVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTopic_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Topic[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTopicVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TopicVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Topic = {
    createdAt?: string;
    id?: number;
    latestNews1Id?: number;
    latestNews2Id?: number;
    latestNews3Id?: number;
    name?: string;
    newContentTodayCount?: number;
    updatedAt?: string;
    userId?: number;
  };

  type TopicAddRequest = {
    name?: string;
  };

  type TopicQueryRequest = {
    current?: number;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type TopicUpdateRequest = {
    id?: number;
    name?: string;
    userId?: number;
  };

  type TopicVO = {
    id?: number;
    listOfNews?: News[];
    newContentTodayCount?: number;
    topicName?: string;
  };

  type User = {
    createdAt?: string;
    email?: string;
    id?: number;
    isDelete?: number;
    password?: string;
    updatedAt?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };

  type UserAddRequest = {
    email?: string;
    password?: string;
    userAvatar?: string;
    userRole?: string;
    username?: string;
  };

  type UserLoginRequest = {
    email?: string;
    password?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };

  type UserRegisterRequest = {
    confirmPassword?: string;
    email?: string;
    password?: string;
    username?: string;
  };

  type UserTopicFollowingAddRequest = {
    topicId?: number;
    userId?: number;
  };

  type UserTopicFollowingDeleteRequest = {
    topicId?: number;
    userId?: number;
  };

  type UserTopicFollowingQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    topicId?: number;
    userId?: number;
  };

  type UserUpdateMyRequest = {
    email?: string;
    password?: string;
    userAvatar?: string;
    userProfile?: string;
    username?: string;
  };

  type UserUpdateRequest = {
    email?: string;
    id?: number;
    password?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };

  type UserVO = {
    createAt?: string;
    id?: number;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };
}
