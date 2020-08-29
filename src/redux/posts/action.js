export const GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS";
export const GET_USER_POSTS_FAILURE = "GET_USER_POSTS_FAILURE";
export const GET_USER_POSTS_REQUEST = "GET_USER_POSTS_REQUEST";

export const getUserPostsRequest = (payload) => {
  return {
    type: GET_USER_POSTS_REQUEST,
    payload,
  };
};
