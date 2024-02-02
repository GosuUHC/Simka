import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "../../transport/api";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {
    address: reducers.addressReducer,
    application: reducers.applicationReducer,
    feedback: reducers.feedbackReducer,
    providers: reducers.providersReducer,
    reviews: reducers.reviewsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
