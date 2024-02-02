import { createSlice } from "@reduxjs/toolkit";

const providersInitialState = {
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
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = providers.actions;
export const providersReducer = providers.reducer;
