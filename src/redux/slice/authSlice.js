import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authTypeOptions: [
    { value: "individual", label: "Individual (Person)" },
    { value: "club", label: "Organization (Charity/Club/NGO)" },
  ],
  authType: "individual",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthType: (state, action) => {
      state.authType = action.payload;
    },
  },
});

export const { setAuthType } = authSlice.actions;
export default authSlice.reducer;
