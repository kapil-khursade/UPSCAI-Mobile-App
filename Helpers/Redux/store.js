import { configureStore } from "@reduxjs/toolkit";
import isLoginSlice from "./isLoginSlice";
import waitForLoading from "./waitForLoadingSlice";

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
    waitForLoading: waitForLoading
  },
});