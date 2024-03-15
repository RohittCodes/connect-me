"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images:
    typeof window !== undefined
      ? <number[]>(
          JSON.parse(window.localStorage?.getItem("likedImages") || "[]")
        )
      : [],
};

export const imageSlice = createSlice({
  name: "likedImages",
  initialState,
  reducers: {
    likeImage: (state, action) => {
      const images = action.payload.id;
      state.images.push(images);

      if (typeof window !== "undefined") {
        localStorage.setItem("likedImages", JSON.stringify(state.images));
      }

      console.log(window);
    },
    unlikeImage: (state, action) => {
      state.images = state.images.filter(
        (imageId) => imageId !== action.payload.id
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("likedImages", JSON.stringify(state.images));
      }
    },
  },
});

export const { likeImage, unlikeImage } = imageSlice.actions;

export default imageSlice.reducer;
