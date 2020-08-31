import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./action";

const initialState = {
  data: { results: [] },
  error: null,
  search: null,
};

export const handleNonPaginatedResult = (stateArray, responseArray) => {
  for (let i = 0; i < stateArray.length; i++) {
    for (let x = 0; x < responseArray.length; x++) {
      if (stateArray[i].id === responseArray[x].id) {
        stateArray[i] = responseArray[x];
      }
    }
  }
  return stateArray;
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
