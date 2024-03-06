import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  created: [],
  attending: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateCreatedEvents: (state, action) => {
      state.created = [...state.created, action.payload];
    },
  },
});

export const { updateCreatedEvents } = eventSlice.actions;
export default eventSlice.reducer;
