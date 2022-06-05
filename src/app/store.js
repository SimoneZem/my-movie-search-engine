// import { configureStore } from "@reduxjs/toolkit";
// import todoSlide from "../features/todoSlice";

// export const store = configureStore({
//   initialState: {},
//   reducer: {
//     todo: todoSlide,
//   },
// });

import saga from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { watchCommonSaga } from "../app/sagas";
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
