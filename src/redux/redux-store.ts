import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST, PURGE } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

// Use combineReducers for multiple slices/reducers.
// Pass const combinedReducers to persistReducer
const counterReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
