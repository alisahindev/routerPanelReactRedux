import { Get } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_FAILURE,
  GET_USER_POSTS_SUCCESS,
} from "./action";
import { LOADER_START, LOADER_END } from "../loader/action";

import { token } from "../../common";

function* getUserPostsSaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(
      Get,
      `/post/get-user-posts?Username=${payload}`,
      {},
      token,
      false
    );
    if (response && response.length > 0) {
      yield put({
        type: GET_USER_POSTS_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: GET_USER_POSTS_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: GET_USER_POSTS_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

export default function* Saga() {
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPostsSaga);
}
