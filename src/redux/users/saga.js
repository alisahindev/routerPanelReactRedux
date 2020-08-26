import { Get } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_USER_DETAIL_REQUEST,
  GET_USER_DETAIL_FAILURE,
  GET_USER_DETAIL_SUCCESS,
} from "./action";

import { token } from "../../common";
import AlertNotify from "../../components/alerts/alertNotify";

function* getUsersSaga({ payload }) {
  try {
    const response = yield call(Get, "/admin/all-users", {}, token, false);
    if (response && response.length > 0) {
      yield put({
        type: GET_ALL_USERS_SUCCESS,
        payload: response,
      });
    } else {
      yield put({
        type: GET_ALL_USERS_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_ALL_USERS_FAILURE,
      payload: error,
    });
  }
}

function* getUserDetailSaga({ payload }) {
  try {
    const response = yield call(
      Get,
      `/user/get?username=${payload}`,
      {},
      {},
      false
    );
    if (response && !response.error) {
      yield put({
        type: GET_USER_DETAIL_SUCCESS,
        payload: response,
      });
    } else {
      yield put({
        type: GET_USER_DETAIL_FAILURE,
        payload: response,
      });
      AlertNotify("Bir hata oluştu", `Lütfen tekrar deneyin`, "error");
    }
  } catch (error) {
    yield put({
      type: GET_USER_DETAIL_FAILURE,
      payload: error,
    });
    AlertNotify("Bir hata oluştu", `Lütfen tekrar deneyin`, "error");
  }
}

export default function* Saga() {
  yield takeLatest(GET_ALL_USERS_REQUEST, getUsersSaga);
  yield takeLatest(GET_USER_DETAIL_REQUEST, getUserDetailSaga);
}
