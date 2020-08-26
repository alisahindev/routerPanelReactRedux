import {
  GET_COMMUNITY_DETAIL_REQUEST,
  GET_COMMUNITY_DETAIL_FAILURE,
  GET_COMMUNITY_DETAIL_SUCCESS,
  COMMUNITY_DETAIL_CLEAR,
} from "./action";

const initialState = {
  data: {},
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_COMMUNITY_DETAIL_REQUEST:
      return { ...state, error: "" };
    case GET_COMMUNITY_DETAIL_SUCCESS:
      return { ...state, data: payload };
    case GET_COMMUNITY_DETAIL_FAILURE:
      return { ...state, error: payload };
    case COMMUNITY_DETAIL_CLEAR:
      return { data: {}, error: "" };
    default:
      return state;
  }
}
