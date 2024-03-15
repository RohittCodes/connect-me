import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts:
    typeof window !== undefined
      ? <number[]>JSON.parse(localStorage.getItem("likedPosts") || "[]")
      : [],
};

export const postSlice = createSlice({
  name: "likedPosts",
  initialState,
  reducers: {
    likePost: (state, action) => {
      const posts = action.payload.id;
      state.posts.push(posts);

      if (typeof window !== "undefined") {
        localStorage.setItem("likedImages", JSON.stringify(state.posts));
      }
    },
    unlikePost: (state, action) => {
      state.posts = state.posts.filter(
        (postId) => postId !== action.payload.id
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("likedImages", JSON.stringify(state.posts));
      }
    },
  },
});

export const { likePost, unlikePost } = postSlice.actions;

export default postSlice.reducer;
