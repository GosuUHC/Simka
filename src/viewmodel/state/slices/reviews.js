import { createSlice } from "@reduxjs/toolkit";

const reviewsInitialState = {
  selectedProviderIndex: null,
  reviewsData: [],
  leaveReviewFormData: {
    name: "",

  }
};

const reviews = createSlice({
  name: "reviews",
  initialState: reviewsInitialState,
  reducers: {
    setSelectedProviderIndex: (state, action) => {
      state.selectedProviderIndex = action.payload;
    },
    setReviewsData: (state, action) => {
      state.reviewsData = action.payload;
    },
  },
});

export const { setSelectedProviderIndex, setReviewsData } = reviews.actions;

export const reviewsReducer = reviews.reducer;
