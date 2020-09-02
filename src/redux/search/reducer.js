import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./action";

const initialState = {
  data: { results: [] },
  error: null,
  search: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_REQUEST:
      return { ...state, error: "" };
    case SEARCH_SUCCESS:
      return { ...state, search: payload };
    case SEARCH_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}
