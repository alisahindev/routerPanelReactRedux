export const GET_ALL_COMMUNITIES_SUCCESS = "GET_ALL_COMMUNITIES_SUCCESS";
export const GET_ALL_COMMUNITIES_FAILURE = "GET_ALL_COMMUNITIES_FAILURE";
export const GET_ALL_COMMUNITIES_REQUEST = "GET_ALL_COMMUNITIES_REQUEST";

export const CREATE_COMMUNITY_REQUEST = "CREATE_COMMUNITY_REQUEST";
export const CREATE_COMMUNITY_SUCCESS = "CREATE_COMMUNITY_SUCCESS";
export const CREATE_COMMUNITY_FAILURE = "CREATE_COMMUNITY_FAILURE";

export const UPDATE_COMMUNITY_REQUEST = "UPDATE_COMMUNITY_REQUEST";
export const UPDATE_COMMUNITY_SUCCESS = "UPDATE_COMMUNITY_SUCCESS";
export const UPDATE_COMMUNITY_FAILURE = "UPDATE_COMMUNITY_FAILURE";

export const GET_COMMUNITY_DETAIL_REQUEST = "GET_COMMUNITY_DETAIL_REQUEST";
export const GET_COMMUNITY_DETAIL_SUCCESS = "GET_COMMUNITY_DETAIL_SUCCESS";
export const GET_COMMUNITY_DETAIL_FAILURE = "GET_COMMUNITY_DETAIL_FAILURE";

export const COMMUNITY_DETAIL_CLEAR = "COMMUNITY_DETAIL_CLEAR";

export const getAllCommunitiesRequest = () => {
  return {
    type: GET_ALL_COMMUNITIES_REQUEST,
  };
};

export const createCommunityRequest = (payload) => {
  return {
    type: CREATE_COMMUNITY_REQUEST,
    payload,
  };
};

export const getCommunityDetail = (payload) => {
  return {
    type: GET_COMMUNITY_DETAIL_REQUEST,
    payload,
  };
};

export const communityDetailClear = () => {
  return {
    type: COMMUNITY_DETAIL_CLEAR,
  };
};

export const updateCommunityRequest = (payload) => {
  return {
    type: UPDATE_COMMUNITY_REQUEST,
    payload,
  };
};
