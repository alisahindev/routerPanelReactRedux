import { Get, Post } from "../services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  CREATE_CATEGORIE_SUCCESS,
  CREATE_CATEGORIE_FAILURE,
  CREATE_CATEGORIE_REQUEST,
  getAllCategoriesRequest,
  GET_CATEGORY_DETAIL_REQUEST,
  GET_CATEGORY_DETAIL_SUCCESS,
  GET_CATEGORY_DETAIL_FAILURE,
} from "./action";
import { LOADER_START, LOADER_END } from "../loader/action";

function* getCategoriesSaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(Get, "/category/get-all", {}, {}, false);
    if (response && response.length > 0) {
      yield put({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: GET_ALL_CATEGORIES_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({ type: GET_ALL_CATEGORIES_FAILURE, payload: error });
    yield put({ type: LOADER_END });
  }
}

function* createCategorySaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(Post, "/category/create", payload, {}, false);
    if (response && !response.error) {
      yield put({
        type: CREATE_CATEGORIE_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
      yield put(getAllCategoriesRequest());
    } else {
      yield put({
        type: CREATE_CATEGORIE_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({ type: CREATE_CATEGORIE_FAILURE, payload: error });
    yield put({ type: LOADER_END });
  }
}

function* getCategorySaga({ payload }) {
  try {
    yield put({ type: LOADER_START });
    const response = yield call(
      Get,
      `/category/get-communities?name=${payload}`,
      {},
      {},
      false
    );
    if (response && !response.error) {
      yield put({
        type: GET_CATEGORY_DETAIL_SUCCESS,
        payload: response,
      });
      yield put({ type: LOADER_END });
    } else {
      yield put({
        type: GET_CATEGORY_DETAIL_FAILURE,
        payload: response,
      });
      yield put({ type: LOADER_END });
    }
  } catch (error) {
    yield put({
      type: GET_CATEGORY_DETAIL_FAILURE,
      payload: error,
    });
    yield put({ type: LOADER_END });
  }
}

export default function* Saga() {
  yield takeLatest(GET_ALL_CATEGORIES_REQUEST, getCategoriesSaga);
  yield takeLatest(CREATE_CATEGORIE_REQUEST, createCategorySaga);
  yield takeLatest(GET_CATEGORY_DETAIL_REQUEST, getCategorySaga);
}
