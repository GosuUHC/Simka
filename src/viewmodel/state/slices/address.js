import { createSlice } from "@reduxjs/toolkit";

const addressInitialState = {
  city: "Кемерово",
  cityOptions: ["Кемерово", "Новосибирск", "Москва"],
  addressSelected: false,
  address: {
    street: "",
    buildingNumber: "",
    roomType: "",
  },
};

const address = createSlice({
  name: "address",
  initialState: addressInitialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCityOptions: (state, action) => {
      state.city = action.payload;
    },
    setAddressSelected: (state, action) => {
      state.addressSelected = action.payload;
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
  },
});

export const {
  setCity,
  setCityOptions,
  setAddressSelected,
  setStreet,
  setBuildingNumber,
  setRoomType,
} = address.actions;

export const addressReducer = address.reducer;
