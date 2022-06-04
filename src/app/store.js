import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "../features/todoSlice";

export const store = configureStore({
  initialState: {},
  reducer: {
    todo: todoSlide,
  },
});
