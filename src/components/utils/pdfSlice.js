import { createSlice, current } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
  name: "pdf",
  initialState: {
    pdfsDoc: [],
  },
  reducers: {
    addPDF: (state, action) => {
      state.pdfsDoc.push(action.payload);
    },
    removePDF: (state, action) => {
      state.pdfsDoc.pop();
    }
  },
});

export const { addPDF, removePDF } = pdfSlice.actions;

export default pdfSlice.reducer;
