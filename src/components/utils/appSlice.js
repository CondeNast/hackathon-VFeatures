import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isHeaderVisible: true,
  },
  reducers: {
    hideHeader: (state) => {
      state.isHeaderVisible = false;
    }
  },
});

export const { hideHeader } = appSlice.actions;
export default appSlice.reducer;
