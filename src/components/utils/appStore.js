import { configureStore } from "@reduxjs/toolkit";
import pdfReducer from "./pdfSlice";

const appStore = configureStore({
  reducer: {
    cart: pdfReducer,
  },
});

export default appStore;
