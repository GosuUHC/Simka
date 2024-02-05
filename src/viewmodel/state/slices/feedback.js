import { createSlice } from "@reduxjs/toolkit";

const feedbackInitialState = {
  reason: null,
  message: "",
  wantToGetAnswerBack: true,
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
    setWantToGetAnswerBack: (state, action) => {
      state.wantToGetAnswerBack = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setReason, setMessage, setWantToGetAnswerBack, setEmail } =
  feedback.actions;
export const feedbackReducer = feedback.reducer;
