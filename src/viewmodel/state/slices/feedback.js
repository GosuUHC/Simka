import { createSlice } from "@reduxjs/toolkit";

const feedbackInitialState = {
  reason: null,
  message: "",
  wantToGetAnswerBackCheck: true,
  email: "",
};

const feedback = createSlice({
  name: "feedback",
  initialState: feedbackInitialState,
  reducers: {
    setReason: (state, action) => {
      state.reason = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setWantToGetAnswerBackCheck: (state, action) => {
      state.wantToGetAnswerBackCheck = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setReason, setMessage, setWantToGetAnswerBackCheck, setEmail } =
  feedback.actions;
export const feedbackReducer = feedback.reducer;
