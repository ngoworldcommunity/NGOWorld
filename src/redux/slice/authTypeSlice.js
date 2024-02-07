import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authTypeOptions: [
    { value: "individual", label: "Individual (Person)" },
    { value: "club", label: "Organization (Charity/Club/NGO)" },
  ],
  active: "individual",
};

const authTypeSlice = createSlice({
  name: "authType",
  initialState,
  reducers: {
    toggleActiveAuthType: (state) => {
      if (state.active === "individual") {
        state.active = "club";
      } else {
        state.active = "individual";
      }
    },
  },
});

export const { toggleActiveAuthType } = authTypeSlice.actions;
export default authTypeSlice.reducer;
