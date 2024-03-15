import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: <number[]>[],
};

export const postSlice = createSlice({
  name: "likedPosts",
  initialState,
  reducers: {
    likePost: (state, action) => {
      const posts = action.payload.id;
      state.posts.push(posts);
    },
    unlikePost: (state, action) => {
      state.posts = state.posts.filter(
        (postId) => postId !== action.payload.id
      );
    },
  },
});

export const { likePost, unlikePost } = postSlice.actions;

export default postSlice.reducer;
