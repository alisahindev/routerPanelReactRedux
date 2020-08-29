import { Get } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_FAILURE,
  GET_USER_POSTS_SUCCESS,
} from "./action";

import { token } from "../../common";

function* getUserPostsSaga({ payload }) {
  try {
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
    } else {
      yield put({
        type: GET_USER_POSTS_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_USER_POSTS_FAILURE,
      payload: error,
    });
  }
}

export default function* Saga() {
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPostsSaga);
}
