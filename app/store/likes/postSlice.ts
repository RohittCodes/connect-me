import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts:
    typeof window !== "undefined"
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
      localStorage.setItem("likedPosts", JSON.stringify(state.posts));
    },
    unlikePost: (state, action) => {
      state.posts = state.posts.filter(
        (postId) => postId !== action.payload.id
      );
      let likedPosts = localStorage.getItem("likedPosts");
      (likedPosts as any) = likedPosts?.match(
        new RegExp(`\\b${action.payload.id}\\b`)
      );
    },
  },
});

export const { likePost, unlikePost } = postSlice.actions;

export default postSlice.reducer;