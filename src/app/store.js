import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

export const stage = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
