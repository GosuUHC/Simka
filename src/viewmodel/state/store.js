import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "../../transport/api";
import { reducers } from "./slices/reducers";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    mainPage: reducers.mainPageReducer,
    applicationForm: reducers.applicationFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
