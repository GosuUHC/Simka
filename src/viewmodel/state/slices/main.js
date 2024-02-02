import { createSlice } from "@reduxjs/toolkit";

const mainInitialState = {
  FAQData: [],
};

const main = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: {
    setFAQData: (state, action) => {
      state.FAQData = action.payload;
    },
  },
});

export const { setFAQData } = main.actions;
export const mainReducer = main.reducer;
