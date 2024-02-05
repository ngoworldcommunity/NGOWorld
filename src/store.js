import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
