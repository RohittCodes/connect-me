import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images:
    typeof window !== "undefined"
      ? <number[]>JSON.parse(localStorage.getItem("savedImages") || "[]")
      : [],
};

export const imageSlice = createSlice({
  name: "savedImages",
  initialState,
  reducers: {
    saveImage: (state, action) => {
      const images = action.payload.id;
      state.images.push(images);
      localStorage.setItem("savedImages", JSON.stringify(state.images));
    },
    removeImage: (state, action) => {
      state.images = state.images.filter(
        (imageId) => imageId !== action.payload.id
      );
      localStorage.setItem("savedImages", JSON.stringify(state.images));
    },
  },
});

export const { saveImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
