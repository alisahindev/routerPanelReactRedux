import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./action";
import { Get } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import { LOADER_START, LOADER_END } from "../loader/action";

function* searchSaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(
      Get,
      `/community/search?text=${payload.text}`,
      {},
      {},
      false
    );
    if (response && !response.error) {
      yield put({ type: SEARCH_SUCCESS, payload: response });
      yield put({ type: LOADER_END });
    } else {
      yield put({ type: SEARCH_FAILURE, payload: response });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({ type: SEARCH_FAILURE, payload: error });
    yield put({ type: LOADER_END });
  }
}

export default function* Saga() {
  yield takeLatest(SEARCH_REQUEST, searchSaga);
}
