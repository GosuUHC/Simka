import { createSlice } from "@reduxjs/toolkit";

const mainPageInitialState = {
  address: {
    street: "",
    buildingNumber: "",
    roomType: "",
    providersData: [],
    FAQData: [],
  },
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: mainPageInitialState,
  reducers: {
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setBuildingNumber: (state, action) => {
      state.buildingNumber = action.payload;
    },
    setBuildingType: (state, action) => {
      state.roomType = action.payload;
    },
    setProvidersData: (state, action) => {
      state.providersData = action.payload;
    },
    setFAQData: (state, action) => {
      state.FAQData = action.payload;
    },
  },
});

export const {
  setStreet,
  setBuildingNumber,
  setBuildingType,
  setProvidersData,
  setFAQData,
} = mainPageSlice.actions;
export const mainPageReducer = mainPageSlice.reducer;
