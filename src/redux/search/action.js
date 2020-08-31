export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchRequest = (payload) => ({
  type: SEARCH_REQUEST,
  payload,
});
