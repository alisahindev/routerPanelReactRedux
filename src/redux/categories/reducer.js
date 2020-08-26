import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_SUCCESS,
} from "./action";

const initialState = {
  data: {},
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CATEGORIES_REQUEST:
      return { ...state, error: "" };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, data: payload };
    case GET_ALL_CATEGORIES_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}
