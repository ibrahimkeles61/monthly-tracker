import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRightMenuActive: false,
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    toggleRightMenu: (state) => {
      state.isRightMenuActive
        ? (state.isRightMenuActive = false)
        : (state.isRightMenuActive = true);
    },
  },
});

export const { toggleRightMenu } = menuSlice.actions;

export default menuSlice.reducer;
