import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// retrieve token from cookies, if it exists
const initialToken = Cookies.get("token");
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: initialToken || null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      // localStorage.removeItem("token"); // remove token from localStorage on logout
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
