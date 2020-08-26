import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
} from "./action";

const initialState = {
  data: {},
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_USERS_REQUEST:
      return { ...state, error: "" };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, data: payload };
    case GET_ALL_USERS_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
}
