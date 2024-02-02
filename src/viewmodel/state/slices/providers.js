import { createSlice } from "@reduxjs/toolkit";

const providersInitialState = {
  providersData: [],
  filters: {
    services: [],
    specialOffers: [],
    providersNames: [],
    price: {
      min: "",
      max: "",
    },
    speed: {
      min: "",
      max: "",
    },
  },
};

const providers = createSlice({
  name: "providers",
  initialState: providersInitialState,
  reducers: {
    setProvidersData: (state, action) => {
      state.providersData = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setProvidersData, setFilters } = providers.actions;
export const providersReducer = providers.reducer;
