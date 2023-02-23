import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore, persistReducer } from "redux-persist";
import { EmployeeApi } from "./api/employeeApi";
import { rootReducres } from "./reducres";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "application",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducres);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(EmployeeApi.middleware),
});

setupListeners(store.dispatch);

export const persister = persistStore(store);
