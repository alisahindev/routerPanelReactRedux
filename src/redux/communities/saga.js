import { Get, Post, PutFormData } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_COMMUNITIES_SUCCESS,
  GET_ALL_COMMUNITIES_FAILURE,
  GET_ALL_COMMUNITIES_REQUEST,
  CREATE_COMMUNITY_REQUEST,
  CREATE_COMMUNITY_FAILURE,
  CREATE_COMMUNITY_SUCCESS,
  getAllCommunitiesRequest,
  GET_COMMUNITY_DETAIL_SUCCESS,
  GET_COMMUNITY_DETAIL_FAILURE,
  GET_COMMUNITY_DETAIL_REQUEST,
  UPDATE_COMMUNITY_REQUEST,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_FAILURE,
} from "./action";
import { readLocalStorage } from "../../helpers";
import { LOADER_START, LOADER_END } from "../loader/action";

function* getCommunitiesSaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(Get, "/community/get-all", {}, {}, false);
    if (response && response.length > 0) {
      yield put({
        type: GET_ALL_COMMUNITIES_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: GET_ALL_COMMUNITIES_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: GET_ALL_COMMUNITIES_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

function* createCommunitySaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(
      Post,
      "/community/create-community",
      payload,
      {},
      false
    );
    if (response && response.status && !response.error) {
      yield put({
        type: CREATE_COMMUNITY_SUCCESS,
        payload: response,
      });
      yield put(getAllCommunitiesRequest());
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: CREATE_COMMUNITY_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: CREATE_COMMUNITY_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

function* updateCommunitySaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const token = readLocalStorage("loginData").token;
    const response = yield call(
      PutFormData,
      "/community/update",
      payload,
      token,
      false
    );
    if (response && !response.error) {
      yield put({
        type: UPDATE_COMMUNITY_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
      yield put(getCommunityDetail(payload.slug));
    } else {
      yield put({
        type: UPDATE_COMMUNITY_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: UPDATE_COMMUNITY_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

function* getCommunityDetail({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(
      Get,
      `/community/get?slug=${payload}`,
      {},
      null,
      false
    );
    if (response && !response.error) {
      yield put({
        type: GET_COMMUNITY_DETAIL_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: GET_COMMUNITY_DETAIL_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: GET_COMMUNITY_DETAIL_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

export default function* Saga() {
  yield takeLatest(GET_ALL_COMMUNITIES_REQUEST, getCommunitiesSaga);
  yield takeLatest(CREATE_COMMUNITY_REQUEST, createCommunitySaga);
  yield takeLatest(GET_COMMUNITY_DETAIL_REQUEST, getCommunityDetail);
  yield takeLatest(UPDATE_COMMUNITY_REQUEST, updateCommunitySaga);
}
