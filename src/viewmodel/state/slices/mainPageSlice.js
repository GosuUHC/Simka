import { createSlice } from "@reduxjs/toolkit";

const mainPageInitialState = {
  city: "Кемерово",
  cityOptions: ["Кемерово", "Новосибирск", "Москва"],
  providersData: [],
  FAQData: [],
  address: {
    street: "",
    buildingNumber: "",
    roomType: "",
  },
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: mainPageInitialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCityOptions: (state, action) => {
      state.city = action.payload;
    },
    setStreet: (state, action) => {
      state.address.street = action.payload;
    },
    setBuildingNumber: (state, action) => {
      state.address.buildingNumber = action.payload;
    },
    setRoomType: (state, action) => {
      state.address.roomType = action.payload;
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
  setCity,
  setCityOptions,
  setStreet,
  setBuildingNumber,
  setRoomType,
  setProvidersData,
  setFAQData,
} = mainPageSlice.actions;
export const mainPageReducer = mainPageSlice.reducer;
