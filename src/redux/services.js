import { getSearchParams, readLocalStorage } from "../helpers";

export const API_URL = "https://saalla.radinyazilim.com/api";

const tempToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbmVzc2FoaW4iLCJqdGkiOiIyM2NjNzYxZC05MmEzLTQ3MTUtOTAxNS1hNzE4ODIwZDQ0ZDkiLCJVc2VySWQiOiJkYTI5ODBkZS04N2IxLTQxZGYtY2MyYy0wOGQ4MGEzYzVlNWMiLCJVc2VyUm9sZSI6IkFkbWluIiwiaXNzIjoic2FsbGEucmFkaW55YXppbGltLmNvbSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzE1LyJ9.qb_weliLmVBG0kbCzqbzZ9p1CH4zSo5jgleEcNbdE0M";

const contentTypes = {
  json: "application/json; charset=utf-8",
  urlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
  isMultiPart: "application/json; charset=utf-8",
};

const Post = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Content-Type": isUrlEncoded
        ? contentTypes.urlEncoded
        : contentTypes.json,
      Authorization: tempToken, //`Bearer ${readLocalStorage('token')}`
    },
    body: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then((fetchResponse) => fetchResponse.json())
    .catch((error) => error);
  return response;
};

const PostFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach((key) => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: `Bearer ${readLocalStorage("token")}`,
      //token,
    },
    body: bodyAsFormData,
  };
  const response = fetch(apiUrl, requestOptions)
    .then((fetchResponse) => fetchResponse.json())
    .catch((error) => error);
  return response;
};

const PutFormData = (endpoint, body = {}, token) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const bodyAsFormData = new FormData();
  Object.keys(body).forEach((key) => bodyAsFormData.append(key, body[key]));
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: `Bearer ${readLocalStorage("token")}`,
      // token,
    },
    body: bodyAsFormData,
  };
  const response = fetch(apiUrl, requestOptions)
    .then((fetchResponse) => fetchResponse.json())
    .catch((error) => error);
  return response;
};

const Delete = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Content-Type": isUrlEncoded
        ? contentTypes.urlEncoded
        : contentTypes.json,
      //token,
      Authorization: `Bearer ${readLocalStorage("token")}`,
    },
    body: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

const Put = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = `${API_URL}${endpoint}`;
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Content-Type": isUrlEncoded
        ? contentTypes.urlEncoded
        : contentTypes.json,
      //token,
      Authorization: `Bearer ${readLocalStorage("token")}`,
    },
    body: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

const Get = (endpoint, body = {}, token, isUrlEncoded) => {
  const apiUrl = isUrlEncoded
    ? `${API_URL}${endpoint}${getSearchParams(body)}`
    : `${API_URL}${endpoint}`;
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Content-Type": isUrlEncoded
        ? contentTypes.urlEncoded
        : contentTypes.json,
      Authorization: `Bearer ${token}`,
    },
    data: isUrlEncoded ? getSearchParams(body) : JSON.stringify(body),
  };
  const response = fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => error);
  return response;
};

export { Post, Get, Put, Delete, PostFormData, PutFormData };
