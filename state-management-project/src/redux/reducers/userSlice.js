import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: '', isLoggedIn: false},
  reducers: {
    logUserIn(state, action) {
      return {...state, userName: action.payload, isLoggedIn: true};
    },
    logUserOut(state, action) {
      return {...state, userName: '', isLoggedIn: false};
    },
    changeUserName(state, action) {
      return {...state, userName: action.payload};
    },
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;