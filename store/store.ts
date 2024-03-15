"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSaveReducer from "@/features/saves/postSlice";
import postLikeReducer from "@/features/likes/postSlice";
import imageLikeReducer from "@/features/likes/imageSlice";
import imageSaveReducer from "@/features/saves/imageSlice";

const reducers = combineReducers({
  savedPosts: postSaveReducer,
  likedPosts: postLikeReducer,
  likedImages: imageLikeReducer,
  savedImages: imageSaveReducer,
});

export const store = configureStore({
  reducer: reducers,
});
