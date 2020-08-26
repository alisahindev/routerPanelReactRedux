import { call, put, takeLatest } from "redux-saga/effects";
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE,
} from "./action";
import { push } from "react-router-redux";

import { removeLocalStorage, writeLocalStorage } from "../../helpers";
import { Post } from "../services";

function* login({ payload }) {
  try {
    const response = yield call(Post, "/auth/login/", payload, true);
    if (response && response.success) {
      writeLocalStorage("loginData", {
        user: response.user,
        token: response.token,
      });

      yield put(push("/dashboard"));
      yield put({ type: AUTH_SUCCESS, payload: response });
    } else {
      yield put({ type: AUTH_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: AUTH_FAILURE, payload: error });
  }
}

function* logout() {
  try {
    yield put({ type: AUTH_LOGOUT_SUCCESS });
    removeLocalStorage("admin");
    removeLocalStorage("token");
    yield put({ type: "RESET" });
    push("/login");
  } catch (error) {
    yield put({ type: AUTH_LOGOUT_FAILURE });
  }
}

function* Saga() {
  yield takeLatest(AUTH_REQUEST, login);
  yield takeLatest(AUTH_LOGOUT, logout);
}

export default Saga;
