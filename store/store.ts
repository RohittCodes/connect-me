"use client";

import { configureStore } from "@reduxjs/toolkit";
import postSaveReducer from "@/features/saves/postSlice";
import postLikeReducer from "@/features/likes/postSlice";
import imageLikeReducer from "@/features/likes/imageSlice";
import imageSaveReducer from "@/features/saves/imageSlice";

export const store = configureStore({
  reducer: {
    savedPosts: postSaveReducer,
    likedPosts: postLikeReducer,
    likedImages: imageLikeReducer,
    savedImages: imageSaveReducer,
  },
});
