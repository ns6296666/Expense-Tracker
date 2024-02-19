import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "../store/expense";
import authReducer from "../store/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  // add more reducers if needed
});
export const store = configureStore({
  reducer: rootReducer,
});
