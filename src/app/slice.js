import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: () => {},
    setPosts: (state, { payload }) => payload,
    removePost: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
  },
});

export const { getPosts, setPosts, removePost } = posts.actions;

export default posts.reducer;
