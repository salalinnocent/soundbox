import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated : false,
    showSignIn : true
  },
  reducers  : {
    logIn : (state) => {
      state.isAuthenticated = true
    },
    logOut : (state) => {
        state.isAuthenticated = false
      },
    toggleAuthForm : (state) => {
      state.showSignIn = !state.showSignIn
    }
  }
})
export const {logIn, logOut, toggleAuthForm} = authSlice.actions;
export default authSlice.reducer
