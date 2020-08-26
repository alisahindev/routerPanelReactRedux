import {
  GET_CATEGORY_DETAIL_REQUEST,
  GET_CATEGORY_DETAIL_FAILURE,
  GET_CATEGORY_DETAIL_SUCCESS,
} from "./action";

const initialState = {
  data: {},
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORY_DETAIL_REQUEST:
      return { ...state, error: "" };
    case GET_CATEGORY_DETAIL_SUCCESS:
      return { ...state, data: payload };
    case GET_CATEGORY_DETAIL_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
}
