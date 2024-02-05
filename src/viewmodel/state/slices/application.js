import { createSlice } from "@reduxjs/toolkit";

const applicationFormInitialState = {
  name: "",
  phoneNumber: "",
  selectedTime: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState: applicationFormInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { setName, setPhoneNumber, setSelectedTime } =
  applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
