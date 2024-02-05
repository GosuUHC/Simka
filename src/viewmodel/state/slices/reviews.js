import { createSlice } from "@reduxjs/toolkit";

const reviewsInitialState = {
  providerId: 0,
  userName: "",
  userCommentary: "",
  userEmail: "",
  userScoreNotification: true,
  advantages: "",
  disadvantages: "",
  ratingConnection: 0,
  ratingStability: 0,
  ratingSpeed: 0,
  ratingService: 0,
};

const reviews = createSlice({
  name: "reviews",
  initialState: reviewsInitialState,
  reducers: {
    setProviderId: (state, action) => {
      state.providerId = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserCommentary: (state, action) => {
      state.userCommentary = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserScoreNotification: (state, action) => {
      state.userScoreNotification = action.payload;
    },
    setAdvantages: (state, action) => {
      state.advantages = action.payload;
    },
    setDisadvantages: (state, action) => {
      state.disadvantages = action.payload;
    },
    setRatingConnection: (state, action) => {
      state.ratingConnection = action.payload;
    },
    setRatingStability: (state, action) => {
      state.ratingStability = action.payload;
    },
    setRatingSpeed: (state, action) => {
      state.ratingSpeed = action.payload;
    },
    setRatingService: (state, action) => {
      state.ratingService = action.payload;
    },
  },
});

export const {
  setProviderId,
  setUserName,
  setUserCommentary,
  setUserEmail,
  setUserScoreNotification,
  setAdvantages,
  setDisadvantages,
  setRatingConnection,
  setRatingStability,
  setRatingSpeed,
  setRatingService,
} = reviews.actions;

export const reviewsReducer = reviews.reducer;
