import { configureStore } from "@reduxjs/toolkit";
import refSlice from "./refSlice";
export const store = configureStore({
  reducer: {
    refC: refSlice,
  },
});
