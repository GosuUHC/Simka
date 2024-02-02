import { createSlice } from "@reduxjs/toolkit";

const applicationFormInitialState = {
  address: {
    name: "",
    phoneNumber: "",
    selectedTime: null,
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
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { setName, setPhoneNumber, setSelectedTime } =
  applicationFormSlice.actions;
export const applicationFormReducer = applicationFormSlice.reducer;
