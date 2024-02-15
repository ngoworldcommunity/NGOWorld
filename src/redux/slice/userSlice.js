import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      console.log("🚀 ~ state:", state);
      return {
        ...state,
        ...action.payload,
      };
    },

    resetUserData: () => {
      return initialState;
    },
  },
});

export const { updateUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;
