import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
export const Store = configureStore({
  reducer: { home: homeSlice },
});
