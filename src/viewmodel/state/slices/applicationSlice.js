import { createSlice } from "@reduxjs/toolkit";

const applicationFormInitialState = {
  address: {
    name: "",
    phoneNumber: "",
  },
};

const applicationFormSlice = createSlice({
  name: "applicationForm",
  initialState: applicationFormInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setName, setPhoneNumber } = applicationFormSlice.actions;
export const applicationFormReducer = applicationFormSlice.reducer;
