import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST, PURGE } from "redux-persist";
import userSlice from "./features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

// Use combineReducers for multiple slices/reducers.
// Pass const combinedReducers to persistReducer
const persistedReducers = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: {
    slices: persistedReducers,
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
