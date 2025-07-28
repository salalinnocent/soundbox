import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated : false
  },
  reducers  : {
    logIn : (state) => {
      state.isAuthenticated = true
    },
    logOut : (state) => {
        state.isAuthenticated = false
      }
  }
})
export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer
