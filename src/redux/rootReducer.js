import { combineReducers } from "redux";
import authTypeReducer from "./slice/authTypeSlice";

export const rootReducer = combineReducers({
  authType: authTypeReducer,
});
