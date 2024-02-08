import { createSlice } from "@reduxjs/toolkit";
import { availableSortingOptions } from "../../../transport/providers";

const providersInitialState = {
  sortBy: availableSortingOptions.POPULAR,
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
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setSortBy, setFilters } = providers.actions;
export const providersReducer = providers.reducer;
