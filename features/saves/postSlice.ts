import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: <number[]>[],
};

export const postSlice = createSlice({
  name: "savedPosts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const posts = action.payload.id;
      state.posts.push(posts);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(
        (postId) => postId !== action.payload.id
      );
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
