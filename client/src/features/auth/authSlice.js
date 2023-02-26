import { createSlice } from "@reduxjs/toolkit";
// retrieve token from localStorage, if it exists
const initialToken = localStorage.getItem('token');

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
      localStorage.removeItem("token"); // remove token from localStorage on logout
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
