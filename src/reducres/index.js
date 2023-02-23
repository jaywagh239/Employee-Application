import { combineReducers } from "@reduxjs/toolkit";
import { EmployeeApi } from "../api/employeeApi";
import authReducer from "./auth";

export const rootReducres = combineReducers({
  [EmployeeApi.reducerPath]: EmployeeApi.reducer,
  auth: authReducer,
});
