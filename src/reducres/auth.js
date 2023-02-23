import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthentication(state, action) {
      return {
        ...state,
        isAuthenticated: action.payload.obj.isLoggedIn,
        user: action.payload.obj.user,
      };
    },
    logout(state, action) {
      return {
        isAuthenticated: false,
      };
    },
  },
});
export const { userAuthentication, logout } = authSlice.actions;
export default authSlice.reducer;
