import saga from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { watchCommonSaga } from "../redux/sagas";
import RootReducer from "./slice";

function* RootSaga() {
  yield all([fork(watchCommonSaga)]);
}

const sagaMiddleware = saga();

export const store = configureStore({
  reducer: RootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(RootSaga);
