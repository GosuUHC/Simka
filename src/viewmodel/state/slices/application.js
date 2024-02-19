import { createSlice } from "@reduxjs/toolkit";
import { timeForCall } from "../../../transport/callBackForms";

const applicationFormInitialState = {
  name: "",
  phoneNumber: "",
  selectedTime: timeForCall[0],
  isSuccess: null,
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
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setName, setPhoneNumber, setSelectedTime, setIsSuccess } =
  applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
