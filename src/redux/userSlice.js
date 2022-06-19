import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogged: false,
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState, deneme } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer;
