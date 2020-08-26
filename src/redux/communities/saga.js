import { Get, Post } from "../services";
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
} from "./action";

function* getCommunitiesSaga({ payload }) {
  try {
    const response = yield call(Get, "/community/get-all", {}, {}, false);
    if (response && response.length > 0) {
      yield put({
        type: GET_ALL_COMMUNITIES_SUCCESS,
        payload: response,
      });
    } else {
      yield put({
        type: GET_ALL_COMMUNITIES_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_ALL_COMMUNITIES_FAILURE,
      payload: error,
    });
  }
}

function* createCommunitySaga({ payload }) {
  try {
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
    } else {
      yield put({
        type: CREATE_COMMUNITY_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: CREATE_COMMUNITY_FAILURE,
      payload: error,
    });
  }
}

function* getCommunityDetail({ payload }) {
  try {
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
    } else {
      yield put({
        type: GET_COMMUNITY_DETAIL_FAILURE,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: GET_COMMUNITY_DETAIL_FAILURE,
      payload: error,
    });
  }
}

export default function* Saga() {
  yield takeLatest(GET_ALL_COMMUNITIES_REQUEST, getCommunitiesSaga);
  yield takeLatest(CREATE_COMMUNITY_REQUEST, createCommunitySaga);
  yield takeLatest(GET_COMMUNITY_DETAIL_REQUEST, getCommunityDetail);
}
