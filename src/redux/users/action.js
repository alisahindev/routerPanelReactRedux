export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAILURE = "GET_ALL_USERS_FAILURE";
export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";

export const GET_USER_DETAIL_SUCCESS = "GET_USER_DETAIL_SUCCESS";
export const GET_USER_DETAIL_FAILURE = "GET_USER_DETAIL_FAILURE";
export const GET_USER_DETAIL_REQUEST = "GET_USER_DETAIL_REQUEST";

export const getAllUsersRequest = () => {
  return {
    type: GET_ALL_USERS_REQUEST,
  };
};

export const getUserDetailRequest = (payload) => {
  return {
    type: GET_USER_DETAIL_REQUEST,
    payload,
  };
};
