"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSaveReducer from "@/app/store/saves/postSlice";
import postLikeReducer from "@/app/store/likes/postSlice";
import imageLikeReducer from "@/app/store/likes/imageSlice";
import imageSaveReducer from "@/app/store/saves/imageSlice";

const reducers = combineReducers({
  savedPosts: postSaveReducer,
  likedPosts: postLikeReducer,
  likedImages: imageLikeReducer,
  savedImages: imageSaveReducer,
});

export const store = configureStore({
  reducer: reducers,
});
