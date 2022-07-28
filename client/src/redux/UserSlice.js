import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorSms: null,
  },
  reducers: {
    loginStart: (state) => {
      state.currentUser = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, actions) => {
      state.currentUser = actions.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFail: (state, actions) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = true;
      state.errorSms = actions.payload;
    },
    logout: (state, actions) => {
      state.currentUser = null;
      state.isFetching = false;
      state.errorSms = actions.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
