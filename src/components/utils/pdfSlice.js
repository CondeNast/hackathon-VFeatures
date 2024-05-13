import { createSlice } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
  name: "pdf",
  initialState: {
    pdfsDoc: null,
  },
  reducers: {
    addPDF: (state, action) => {
      state.pdfsDoc = action.payload;
    },
    removePDF: (state, action) => {
      state.pdfsDoc = null;
    }
  },
});

export const { addPDF, removePDF } = pdfSlice.actions;

export default pdfSlice.reducer;
