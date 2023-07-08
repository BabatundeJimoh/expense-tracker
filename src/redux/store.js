import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./mySlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});
