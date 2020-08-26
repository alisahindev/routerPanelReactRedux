import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./action";

const initialState = {
  data: {},
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_REQUEST:
      return { ...state, error: "" };
    case AUTH_SUCCESS:
      return { ...state, data: payload };
    case AUTH_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
}
