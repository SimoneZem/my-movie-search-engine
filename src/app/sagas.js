import axios from "axios";
import { put, all, takeLatest } from "redux-saga/effects";

import { setPosts, getPosts } from "./slice";

function* getPostsApi() {
  try {
    const { data } = yield axios.get(
      `https://jsonplaceholder.typicode.com/users/1/posts?_limit=50`
    );
    console.log(
      ">>>> ~ file: sagas.js ~ line 9 ~ function*getPostsApi ~ data ",
      data
    );
  } catch (err) {
    console.error(err);
  }
}

export function* watchCommonSaga() {
  yield all([takeLatest(getPosts.type, getPostsApi)]);
  //prende tutte le occorenze e le lancia, se viene lanciata l'azione getPosts viene anciato il relativo function generator
}
