import { combineReducers } from "@reduxjs/toolkit";
import { employeeApi } from "../api/employeeApi";
import authReducer from "./auth";

export const rootReducres = combineReducers({
  [employeeApi.reducerPath]: employeeApi.reducer,
  auth: authReducer,
});
