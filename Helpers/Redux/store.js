import { configureStore } from "@reduxjs/toolkit";
import isLoginSlice from "./isLoginSlice";

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice
  },
});