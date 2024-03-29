"use client";

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  images:
    typeof window !== "undefined"
      ? <number[]>JSON.parse(localStorage.getItem("likedImages") || "[]")
      : [],
};

// Slice for liked images
export const imageSlice = createSlice({
  name: "likedImages",
  initialState,
  reducers: {
    likeImage: (state, action) => {
      const images = action.payload.id;
      state.images.push(images);
      const likedImages = JSON.stringify(state.images);
      localStorage.setItem("likedImages", likedImages);
    },
    unlikeImage: (state, action) => {
      state.images = state.images.filter(
        (imageId) => imageId !== action.payload.id
      );
      localStorage.setItem("likedImages", JSON.stringify(state.images));
    },
  },
});

export const { likeImage, unlikeImage } = imageSlice.actions;

export default imageSlice.reducer;
