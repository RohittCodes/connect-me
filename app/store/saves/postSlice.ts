"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts:
    typeof window !== "undefined"
      ? <number[]>JSON.parse(localStorage.getItem("savedPosts") || "[]")
      : [],
};

export const postSlice = createSlice({
  name: "savedPosts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const posts = action.payload.id;
      state.posts.push(posts);
      localStorage.setItem("savedPosts", JSON.stringify(state.posts));
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(
        (postId) => postId !== action.payload.id
      );
      let savedPosts = localStorage.getItem("savedPosts");
      (savedPosts as any) = savedPosts?.match(
        new RegExp(`\\b${action.payload.id}\\b`)
      );
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
