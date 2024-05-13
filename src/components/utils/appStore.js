import { configureStore } from "@reduxjs/toolkit";
import pdfReducer from "./pdfSlice";
import appReducer from "./appSlice";

const appStore = configureStore({
  reducer: {
    pdf: pdfReducer,
    app: appReducer
  },
});

export default appStore;
