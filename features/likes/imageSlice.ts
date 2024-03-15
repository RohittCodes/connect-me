import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: <number[]>[],
};

export const imageSlice = createSlice({
  name: "savedImages",
  initialState,
  reducers: {
    likeImage: (state, action) => {
      const images = action.payload.id;
      state.images.push(images);
    },
    unlikeImage: (state, action) => {
      state.images = state.images.filter(
        (imageId) => imageId !== action.payload.id
      );
    },
  },
});

export const { likeImage, unlikeImage } = imageSlice.actions;

export default imageSlice.reducer;
