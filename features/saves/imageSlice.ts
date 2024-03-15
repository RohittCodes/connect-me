import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: <number[]>[],
};

export const imageSlice = createSlice({
  name: "savedImages",
  initialState,
  reducers: {
    saveImage: (state, action) => {
      const images = action.payload.id;
      state.images.push(images);
    },
    removeImage: (state, action) => {
      state.images = state.images.filter(
        (imageId) => imageId !== action.payload.id
      );
    },
  },
});

export const { saveImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
