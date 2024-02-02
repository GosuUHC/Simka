import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "../../transport/api";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    address: reducers.addressReducer,
    application: reducers.applicationFormReducer,
    feedback: reducers.feedbackReducer,
    main: reducers.mainReducer,
    providers: reducers.providersReducer,
    reviews: reducers.reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
